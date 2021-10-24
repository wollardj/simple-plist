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
export type { PlistJsObj, StringOrBuffer, callbackFn } from "./types";

export default {
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
