import * as plist from "../src";

it("Throws an error on improperly formatted plist", () => {
  const doIt = () => plist.readFileSync(`${__dirname}/test-xml1-invalid.plist`);
  expect(doIt).toThrow();
});

it("returns an empty object when the file is zero bytes", () => {
  const obj = plist.readFileSync(`${__dirname}/test-xml1-invalid-2.plist`);
  expect(obj).toMatchInlineSnapshot(`Object {}`);
});
