import { readFile, parse } from "../simple-plist";

describe("Catch Invalid Plists", () => {
  it("Throws an error on improperly formatted plist file", async () => {
    try {
      await readFile(`${__dirname}/test-xml1-invalid.plist`);
      fail();
    } catch (error) {
      expect(error).toBeTruthy;
    }
  });

  it("Throws an error on improperly formatted plist string", async () => {
    try {
      await parse("🙄");
      fail();
    } catch (error) {
      expect(error.message).toEqual("Unable to determine format of plist");
    }
  });

  it("returns an empty object when the file is zero bytes", async () => {
    const obj = await readFile(`${__dirname}/test-xml1-invalid-2.plist`);
    expect(obj).toEqual({});
  });
});
