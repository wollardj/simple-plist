import plist from "plist";
import { PlistJsObj } from "./types";

export function stringify(anObject: PlistJsObj) {
  return plist.build(anObject);
}
