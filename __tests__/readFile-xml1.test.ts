import plist from "../src/index";

const filePath = `${__dirname}/test-xml1.plist`;

type TestXml1 = {
  "Birth Year": number;
  Name: string;
  "Empty String": string;
  "Travel Log": string[];
};

describe("readFileSync can properly load and read a file", () => {
  const contents = plist.readFileSync<TestXml1>(filePath);
  it("has the proper values", () => {
    if (!contents["Name"]) {
      fail(`Failed to parse ${filePath}`);
    }
    expect(contents.Name).toBe("John Doe");
    expect(contents["Birth Year"]).toBe(1942);
    expect(contents["Empty String"]).toBe("");
    expect(contents["Travel Log"]).toEqual([
      "Tokyo, Honshu, Japan",
      "Philadelphia, PA",
      "Recife, Pernambuco, Brazil",
    ]);
  });
});

describe("readFile works asynchronously", () => {
  it("has the proper values", (done) => {
    plist.readFile<TestXml1>(filePath, (err, contents) => {
      if (!contents) {
        fail(`Failed to parse ${filePath}`);
      }
      expect(contents.Name).toBe("John Doe");
      expect(contents["Birth Year"]).toBe(1942);
      expect(contents["Empty String"]).toBe("");
      expect(contents["Travel Log"]).toEqual([
        "Tokyo, Honshu, Japan",
        "Philadelphia, PA",
        "Recife, Pernambuco, Brazil",
      ]);
      done();
    });
  });
});
