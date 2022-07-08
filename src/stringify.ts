import plist from "plist";
import type { PlistJsObj } from "./types";

export function stringify(anObject: PlistJsObj) {
  return plist.build(anObject);
}
