import bplistCreator from "bplist-creator";
import bplistParser from "bplist-parser";
import fs, { WriteFileOptions } from "fs";
import plist, { PlistValue } from "plist";
import { URL } from "url";
import { promisify } from "util";

const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);

export type SPFile = string | number | Buffer | URL;

export async function parse<T = PlistValue>(
  aStringOrBuffer: string | Buffer,
  aFile?: SPFile
): Promise<T> {
  const firstByte = aStringOrBuffer[0];
  let results: T;

  if (firstByte === 60 || firstByte === "<") {
    results = (plist.parse(aStringOrBuffer.toString()) as unknown) as T;
  } else if (firstByte === 98) {
    [results] = bplistParser.parseBuffer(aStringOrBuffer);
  } else if (aFile) {
    throw new Error(`Unable to determine format for '${aFile}'`);
  } else {
    throw new Error("Unable to determine format of plist");
  }

  return results;
}

export async function readFile<T = PlistValue>(aFile: SPFile) {
  const content = await read(aFile);
  if (content.length === 0) {
    return {} as T;
  }
  return parse<T>(content, aFile);
}

export async function writeFile(
  aFile: SPFile,
  anObject: any,
  options?: WriteFileOptions
) {
  return write(aFile, plist.build(anObject), options);
}

export async function writeBinaryFile(
  aFile: SPFile,
  anObject: any,
  options?: WriteFileOptions
) {
  const data = bplistCreator(anObject);
  return write(aFile, data, options);
}

/**
 * Converts an object to a plist xml string
 */
export function stringify(anObject: any) {
  return plist.build(anObject);
}

export default {
  parse,
  readFile,
  writeFile,
  writeBinaryFile,
  stringify
};
