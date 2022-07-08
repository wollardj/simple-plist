import * as plist from "../src";
import { DemoFile } from "./utils/types";

describe("String parsing", () => {
  it("can parse a string", () => {
    const doc = plist.readFileSync<DemoFile>(`${__dirname}/test-binary1.plist`);
    const plistString = plist.stringify(doc);
    const parsedDoc = plist.parse(plistString);

    return expect(parsedDoc).toMatchInlineSnapshot(`
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
