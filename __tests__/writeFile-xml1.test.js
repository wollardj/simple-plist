const plist = require('../simple-plist')

const filePath = `${__dirname}/write-test-xml1.plist`
const testObj = {
  Name: 'John Doe',
  'Birth Year': 1942,
  'Travel Log': [
    'Tokyo, Honshu, Japan',
    'Philadelphia, PA',
    'Recife, Pernambuco, Brazil'
  ]
}

describe('writeFileSync can produce a valid file', () => {
  it('has the proper values', (done) => {
    plist.writeFileSync(filePath, testObj)
    plist.readFile(filePath, (error, contents) => {
      expect(contents).toMatchObject(testObj)
      done()
    })
  })
})

describe('writeFile works asynchronously', () => {
  it('has the proper values', (done) => {
    plist.writeFile(filePath, testObj, () => {
      plist.readFile(filePath, (error, contents) => {
        expect(contents).toMatchObject(testObj)
        done()
      })
    })
  })
})
