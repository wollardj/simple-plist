import bplistCreator from "bplist-creator";
import fs, { PathOrFileDescriptor, WriteFileOptions } from "fs";
import { PlistJsObj } from "./types";

export function writeBinaryFileSync(
  aFile: PathOrFileDescriptor,
  anObject: PlistJsObj,
  options?: WriteFileOptions
) {
  return fs.writeFileSync(aFile, bplistCreator(anObject), options);
}
