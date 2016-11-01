plist = require 'simple-plist'
filePath = "#{__dirname}/write-test-binary1.plist"
testObj = {
  Name: 'John Doe'
  "Birth Year": 1942
  "Travel Log": [
    'Tokyo, Honshu, Japan'
    'Philadelphia, PA'
    'Recife, Pernambuco, Brazil'
  ]
}


describe 'writeBinaryFileSync can properly load and read a file', =>
  plist.writeBinaryFileSync filePath, testObj
  it "has the proper values", =>
    plist.readFile filePath, (contents)=>
      expect(contents).toEqual testObj


describe 'writeBinaryFile works asynchronously', =>
  it "has the proper values", =>
    plist.writeBinaryFile filePath, testObj, =>
      plist.readFile filePath, (contents)=>
        expect(contents).toEqual testObj
