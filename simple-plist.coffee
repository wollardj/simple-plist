bplistParser = require 'bplist-parser'
bplistCreator = require 'bplist-creator'
plist = require 'plist'
fs = require 'fs'

# reveal the underlying modules
exports.plist = plist
exports.bplistCreator = bplistCreator
exports.bplistParser = bplistParser


# Parses the given file and returns its contents as a native JavaScript object.
exports.readFileSync = (aFile)->
  contents = fs.readFileSync aFile

  if contents.length is 0
    return {}
  exports.parse contents, aFile


exports.readFile = (aFile, callback)->
  fs.readFile aFile, (err, contents)->
    if err
      callback err
    else
      try
        results = exports.parse contents, aFile
        callback null, results
      catch err
        callback err


exports.writeFileSync = (aFile, anObject, options)->
  data = plist.build anObject
  fs.writeFileSync aFile, data, options


exports.writeFile = (aFile, anObject, options, callback)->
  if arguments.length is 3 and typeof options is 'function'
    callback = options
    options = undefined
  data = plist.build anObject
  fs.writeFile aFile, data, options, callback


exports.writeBinaryFileSync = (aFile, anObject, options)->
  data = bplistCreator anObject
  fs.writeFileSync aFile, data, options


exports.writeBinaryFile = (aFile, anObject, options, callback)->
  if arguments.length is 3 and typeof options is 'function'
    callback = options
    options = undefined

  data = bplistCreator anObject
  fs.writeFile aFile, data, options, callback


exports.stringify = (anObject)->
  plist.build anObject


exports.parse = (aStringOrBuffer, aFile)->
  firstByte = aStringOrBuffer[0]
  try
    if firstByte in [60, '<']
      results = plist.parse aStringOrBuffer.toString()
    else if firstByte is 98
      results = bplistParser.parseBuffer(aStringOrBuffer)[0]
    else
      if aFile?
        throw new Error "Unable to determine format for '#{aFile}'"
      else
        throw new Error "Unable to determine format for plist aStringOrBuffer"
      results = {}
  catch e
    throw new Error "#{aFile} has errors"

  results
