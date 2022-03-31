import plist from "../src";

/** @see https://cwe.mitre.org/data/definitions/1321.html */

describe("CWE-1321", () => {
  it("filters out unsafe properties", () => {
    const unsafeDoc = { __proto__: 42, foo: "bar" };
    const safeDoc = plist.parse(plist.stringify(unsafeDoc));

    expect(safeDoc).toMatchInlineSnapshot(`
      Object {
        "foo": "bar",
      }
    `);
  });
});
