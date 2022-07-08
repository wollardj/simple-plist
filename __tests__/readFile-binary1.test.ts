import * as plist from "../src";

const filePath = `${__dirname}/test-binary1.plist`;

describe("readFileSync can properly load and read a binary file", () => {
  it("has the proper values", () => {
    expect(plist.readFileSync(filePath)).toMatchInlineSnapshot(`
      Object {
        "Birth Year": 1942,
        "Name": "John Doe",
        "Travel Log": Array [
          "Tokyo, Honshu, Japan",
          "Philadelphia, PA",
          "Recife, Pernambuco, Brazil",
        ],
      }
    `);
  });
});

describe("readFile works asynchronously", () => {
  it("has the proper values", (done) => {
    plist.readFile(filePath, (error, contents) => {
      expect(contents).toMatchInlineSnapshot(`
        Object {
          "Birth Year": 1942,
          "Name": "John Doe",
          "Travel Log": Array [
            "Tokyo, Honshu, Japan",
            "Philadelphia, PA",
            "Recife, Pernambuco, Brazil",
          ],
        }
      `);
      done();
    });
  });
});
