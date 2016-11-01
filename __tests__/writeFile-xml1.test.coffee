plist = require 'simple-plist'
filePath = "#{__dirname}/write-test-xml1.plist"
testObj = {
  Name: 'John Doe'
  "Birth Year": 1942
  "Travel Log": [
    'Tokyo, Honshu, Japan'
    'Philadelphia, PA'
    'Recife, Pernambuco, Brazil'
  ]
}


describe 'writeFileSync can properly load and read a file', =>
  plist.writeFileSync filePath, testObj
  it "has the proper values", =>
    plist.readFile filePath, (contents)=>
      expect(contents).toEqual testObj


describe 'writeFile works asynchronously', =>
  it "has the proper values", =>
    plist.writeFile filePath, testObj, =>
      plist.readFile filePath, (contents)=>
        expect(contents).toEqual testObj
