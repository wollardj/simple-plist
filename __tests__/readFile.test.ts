import { readFile } from "../simple-plist";

const filePath = `${__dirname}/test-binary1.plist`;

interface IReference {
  "Birth Year": number;
  "Travel Log": string[];
  Name: string;
}

const reference: IReference = {
  "Travel Log": [
    "Tokyo, Honshu, Japan",
    "Philadelphia, PA",
    "Recife, Pernambuco, Brazil"
  ],
  "Birth Year": 1942,
  Name: "John Doe"
};

describe("Reading Files", () => {
  it("can read a binary file", async () => {
    expect(await readFile(filePath)).toMatchObject(reference);
  });

  it("can read an xml file", async () => {
    const contents = await readFile<IReference>(filePath);
    expect(contents.Name).toBe(reference.Name);
    expect(contents["Birth Year"]).toBe(reference["Birth Year"]);
    expect(contents["Travel Log"]).toEqual(reference["Travel Log"]);
  });
});
