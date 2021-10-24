import bplistCreator from "bplist-creator";
import bplistParser from "bplist-parser";
import { parse } from "./parse";
import { readFile } from "./readFile";
import { readFileSync } from "./readFileSync";
import { stringify } from "./stringify";
import { writeBinaryFile } from "./writeBinaryFile";
import { writeBinaryFileSync } from "./writeBinaryFileSync";
import { writeFile } from "./writeFile";
import { writeFileSync } from "./writeFileSync";

// "modern" named exports
export { parse } from "./parse";
export { readFile } from "./readFile";
export { readFileSync } from "./readFileSync";
export { stringify } from "./stringify";
export type { callbackFn, PlistJsObj, StringOrBuffer } from "./types";
export { writeBinaryFile } from "./writeBinaryFile";
export { writeBinaryFileSync } from "./writeBinaryFileSync";
export { writeFile } from "./writeFile";
export { writeFileSync } from "./writeFileSync";

// preserve backwards compatibility
module.exports = {
  bplistCreator,
  bplistParser,
  parse,
  readFile,
  readFileSync,
  stringify,
  writeBinaryFile,
  writeBinaryFileSync,
  writeFile,
  writeFileSync,
};
