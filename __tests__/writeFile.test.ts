import { readFile, writeBinaryFile, writeFile } from "../simple-plist";

const filePath = `${__dirname}/write-test-binary1.plist`;
const testObj = {
  Name: "John Doe",
  "Birth Year": 1942,
  "Travel Log": [
    "Tokyo, Honshu, Japan",
    "Philadelphia, PA",
    "Recife, Pernambuco, Brazil"
  ]
};

describe("Writing files", () => {
  it("can write to binary file", async () => {
    await writeBinaryFile(filePath, testObj);
    const contents = await readFile(filePath);
    expect(contents).toMatchObject(testObj);
  });

  it("can write to xml file", async () => {
    await writeFile(filePath, testObj);
    const contents = await readFile(filePath);
    expect(contents).toMatchObject(testObj);
  });
});
