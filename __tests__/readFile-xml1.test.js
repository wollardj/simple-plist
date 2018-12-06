const plist = require('../simple-plist')

const filePath = `${__dirname}/test-xml1.plist`

describe('readFileSync can properly load and read a file', () => {
  const contents = plist.readFileSync(filePath)
  it('has the proper values', () => {
    expect(contents.Name).toBe('John Doe')
    expect(contents['Birth Year']).toBe(1942)
    expect(contents['Empty String']).toBe('')
    expect(contents['Travel Log']).toEqual([
      'Tokyo, Honshu, Japan',
      'Philadelphia, PA',
      'Recife, Pernambuco, Brazil'
    ])
  })
})

describe('readFile works asynchronously', () => {
  it('has the proper values', (done) => {
    plist.readFile(filePath, (err, contents) => {
      expect(contents.Name).toBe('John Doe')
      expect(contents['Birth Year']).toBe(1942)
      expect(contents['Empty String']).toBe('')
      expect(contents['Travel Log']).toEqual([
        'Tokyo, Honshu, Japan',
        'Philadelphia, PA',
        'Recife, Pernambuco, Brazil'
      ])
      done()
    })
  })
})
