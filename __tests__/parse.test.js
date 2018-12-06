const plist = require('../simple-plist')

describe('String parsing', () => {
  it('can parse a string', () => {
    const doc = plist.readFileSync(`${__dirname}/test-binary1.plist`)
    const plistString = plist.stringify(doc)
    const parsedDoc = plist.parse(plistString)

    return expect(parsedDoc).toEqual(doc)
  })
})
