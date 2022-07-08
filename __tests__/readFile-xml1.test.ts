import * as plist from "../src";
import { DemoFile } from "./utils/types";

const filePath = `${__dirname}/test-xml1.plist`;

type TestXml1 = DemoFile & { "Empty String": string };

describe("readFileSync can properly load and read a file", () => {
  const contents = plist.readFileSync<TestXml1>(filePath);
  it("has the proper values", () => {
    if (!contents["Name"]) {
      fail(`Failed to parse ${filePath}`);
    }
    expect(contents).toMatchInlineSnapshot(`
      Object {
        "Birth Year": 1942,
        "Empty String": "",
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
    plist.readFile<TestXml1>(filePath, (err, contents) => {
      if (!contents) {
        fail(`Failed to parse ${filePath}`);
      }
      expect(contents).toMatchInlineSnapshot(`
        Object {
          "Birth Year": 1942,
          "Empty String": "",
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
