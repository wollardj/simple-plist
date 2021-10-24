import fs, { PathOrFileDescriptor } from "fs";
import { parse } from "./parse";

export function readFileSync<T = unknown>(aFile: PathOrFileDescriptor) {
  const contents = fs.readFileSync(aFile);
  if (contents.length === 0) {
    return {} as Record<any, any>;
  }
  return parse<T>(contents, aFile);
}
