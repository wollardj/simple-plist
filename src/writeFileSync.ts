import fs, { PathOrFileDescriptor, WriteFileOptions } from "fs";
import plist from "plist";
import type { PlistJsObj } from "./types";

export function writeFileSync(
  aFile: PathOrFileDescriptor,
  anObject: PlistJsObj,
  options?: WriteFileOptions
) {
  const data = plist.build(anObject);
  return fs.writeFileSync(aFile, data, options);
}
