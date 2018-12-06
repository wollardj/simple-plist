const plist = require('../simple-plist')

const filePath = `${__dirname}/write-test-binary1.plist`
const testObj = {
  Name: 'John Doe',
  'Birth Year': 1942,
  'Travel Log': [
    'Tokyo, Honshu, Japan',
    'Philadelphia, PA',
    'Recife, Pernambuco, Brazil'
  ]
}

describe('writeBinaryFileSync can properly load and read a file', () => {
  it('has the proper values', (done) => {
    plist.writeBinaryFileSync(filePath, testObj)
    plist.readFile(filePath, (error, contents) => {
      expect(contents).toMatchObject(testObj)
      done()
    })
  })
})

describe('writeBinaryFile works asynchronously', () => {
  it('has the proper values', (done) => {
    plist.writeBinaryFile(filePath, testObj, () => {
      plist.readFile(filePath, (error, contents) => {
        expect(contents).toMatchObject(testObj)
        done()
      })
    })
  })
})
