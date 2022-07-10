import bplistParser from "bplist-parser";
import { PathOrFileDescriptor } from "fs";
import type { PlistValue } from "plist";
import plist from "plist";
import type { StringOrBuffer } from "./types";

/**
 * Detects the format of the given string or buffer, then attempts to parse the
 * payload using the appropriate tooling.
 */
export function parse<T = PlistValue>(
  aStringOrBuffer: StringOrBuffer,
  aFile?: PathOrFileDescriptor
): T {
  const firstByte = aStringOrBuffer[0];
  let results: T | PlistValue;
  try {
    if (firstByte === 60 || firstByte === "<") {
      results = plist.parse(aStringOrBuffer.toString());
    } else if (firstByte === 98) {
      [results] = bplistParser.parseBuffer(aStringOrBuffer);
    } else if (aFile) {
      throw new Error(`Unable to determine format for '${aFile}'`);
    } else {
      throw new Error("Unable to determine format for plist aStringOrBuffer");
    }
  } catch (error) {
    throw error instanceof Error ? error : new Error(`error parsing ${aFile}`);
  }
  return results as T;
}
