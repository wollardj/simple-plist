import bplistCreator from "bplist-creator";
import * as bplistParser from "bplist-parser";
import { parse } from "./parse";
import { readFile } from "./readFile";
import { readFileSync } from "./readFileSync";
import { stringify } from "./stringify";
import { writeBinaryFile } from "./writeBinaryFile";
import { writeBinaryFileSync } from "./writeBinaryFileSync";
import { writeFile } from "./writeFile";
import { writeFileSync } from "./writeFileSync";

// "modern" named exports
const SimplePlist = {
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

export default SimplePlist;
export type { callbackFn, PlistJsObj, StringOrBuffer } from "./types";

// preserve backwards compatibility
module.exports = SimplePlist;
