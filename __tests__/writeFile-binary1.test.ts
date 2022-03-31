import plist from "../src/index";

const filePath = `${__dirname}/write-test-binary1.plist`;
const testObj = {
  Name: "John Doe",
  "Birth Year": 1942,
  "Travel Log": [
    "Tokyo, Honshu, Japan",
    "Philadelphia, PA",
    "Recife, Pernambuco, Brazil",
  ],
};

describe("writeBinaryFileSync can properly load and read a file", () => {
  it("has the proper values", (done) => {
    plist.writeBinaryFileSync(filePath, testObj);
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

describe("writeBinaryFile works asynchronously", () => {
  it("has the proper values", (done) => {
    plist.writeBinaryFile(filePath, testObj, () => {
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
});
