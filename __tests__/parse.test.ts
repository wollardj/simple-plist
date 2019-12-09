import { readFile, stringify, parse } from "../simple-plist";

describe("String parsing", () => {
  it("can parse a string", async () => {
    const doc = await readFile(`${__dirname}/test-binary1.plist`);
    const plistString = stringify(doc);
    const parsedDoc = await parse(plistString);

    expect(parsedDoc).toEqual(doc);
  });
});
