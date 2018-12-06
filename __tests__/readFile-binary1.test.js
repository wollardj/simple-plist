const plist = require('../simple-plist')

const filePath = `${__dirname}/test-binary1.plist`
const reference = {
  'Travel Log': [
    'Tokyo, Honshu, Japan',
    'Philadelphia, PA',
    'Recife, Pernambuco, Brazil'
  ],
  'Birth Year': 1942,
  Name: 'John Doe'
}

describe('readFileSync can properly load and read a binary file', () => {
  it('has the proper values', () => {
    expect(plist.readFileSync(filePath)).toMatchObject(reference)
  })
})

describe('readFile works asynchronously', () => {
  it('has the proper values', (done) => {
    plist.readFile(filePath, (error, contents) => {
      expect(contents).toMatchObject(reference)
      done()
    })
  })
})
