import fs, { PathOrFileDescriptor, WriteFileOptions } from "fs";
import plist from "plist";
import { callbackFn, PlistJsObj } from "./types";

export function writeFile(
  aFile: PathOrFileDescriptor,
  anObject: PlistJsObj,
  options: callbackFn<void>
): void;

export function writeFile(
  aFile: PathOrFileDescriptor,
  anObject: PlistJsObj,
  options: WriteFileOptions,
  callback: callbackFn<void>
): void;

export function writeFile(
  aFile: PathOrFileDescriptor,
  anObject: PlistJsObj,
  options: WriteFileOptions | callbackFn<void>,
  callback?: callbackFn<void>
) {
  if (typeof options === "function" && callback === undefined) {
    fs.writeFile(aFile, plist.build(anObject), options);
  } else if (typeof options === "object" && typeof callback === "function") {
    fs.writeFile(aFile, plist.build(anObject), options, callback);
  } else {
    throw new Error("Invalid parameters passed to writeFile");
  }
}
