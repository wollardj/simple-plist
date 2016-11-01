plist = require 'simple-plist'

describe "String parsing", =>
  it "can parse a string", =>
    doc = plist.readFileSync "#{__dirname}/test-binary1.plist"
    plistString = plist.stringify doc
    parsedDoc = plist.parse(plistString)
    expect(parsedDoc).toEqual(doc)
