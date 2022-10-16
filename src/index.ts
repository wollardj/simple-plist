import * as bplistCreator from "bplist-creator";
import * as bplistParser from "bplist-parser";

export { bplistCreator }
export { bplistParser }
export { parse } from "./parse";
export { readFile } from "./readFile";
export { readFileSync } from "./readFileSync";
export { stringify } from "./stringify";
export { writeBinaryFile } from "./writeBinaryFile";
export { writeBinaryFileSync } from "./writeBinaryFileSync";
export { writeFile } from "./writeFile";
export { writeFileSync } from "./writeFileSync";

export type { callbackFn, PlistJsObj, StringOrBuffer } from "./types";
