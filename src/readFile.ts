import fs, { PathOrFileDescriptor } from "fs";
import { parse } from "./parse";
import type { callbackFn } from "./types";

export function readFile<T = unknown>(
  aFile: PathOrFileDescriptor,
  callback: callbackFn<T>
) {
  fs.readFile(aFile, (err, contents) => {
    if (err) {
      return callback(err);
    }
    let results;
    try {
      results = parse<T>(contents, aFile);
    } catch (error) {
      return callback(
        error instanceof Error
          ? error
          : new Error(`failed to read file ${aFile}`)
      );
    }

    callback(null, results);
  });
}
