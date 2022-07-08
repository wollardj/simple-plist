import bplistCreator from "bplist-creator";
import fs, { PathOrFileDescriptor, WriteFileOptions } from "fs";
import type { callbackFn, PlistJsObj } from "./types";

export function writeBinaryFile(
  aFile: PathOrFileDescriptor,
  anObject: PlistJsObj,
  callback: callbackFn<void>
): void;

export function writeBinaryFile(
  aFile: PathOrFileDescriptor,
  anObject: PlistJsObj,
  options: WriteFileOptions,
  callback: callbackFn<void>
): void;

export function writeBinaryFile(
  aFile: PathOrFileDescriptor,
  anObject: PlistJsObj,
  options: WriteFileOptions | callbackFn<void>,
  callback?: callbackFn<void>
) {
  if (typeof options === "function" && callback === undefined) {
    fs.writeFile(aFile, bplistCreator(anObject), options);
  } else if (typeof options === "object" && typeof callback === "function") {
    fs.writeFile(aFile, bplistCreator(anObject), options, callback);
  } else {
    throw new Error("Invalid parameters passed to writeBinaryFile");
  }
}
