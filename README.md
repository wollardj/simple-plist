# node-simple-plist

[![npm](https://img.shields.io/npm/dw/simple-plist.svg?style=popout&logo=npm)](https://www.npmjs.org/package/simple-plist)
[![npm](https://img.shields.io/npm/v/simple-plist.svg?style=popout&logo=npm)](https://www.npmjs.com/package/simple-plist)
[![Travis (.com) branch](https://img.shields.io/travis/com/wollardj/node-simple-plist/develop.svg?style=popout&logo=Travis%20CI)](https://travis-ci.com/wollardj/node-simple-plist)

A simple API for interacting with binary and plain text plist data.

## Installation

```sh
npm install simple-plist
```

## Reading Data

```js
import { readFile } from "simple-plist";

async function myApp() {
  const data = await readFile("/path/to/some.plist");
  console.log(data);
}
```

## Writing Data

```js
import { writeBinaryFile, writeFile } from "simple-plist";

async function myApp() {
  // Write data to xml file
  writeFile("/path/to/xml.plist", { foo: "bar" });

  // Write data to binary file
  writeBinaryFile("/path/to/binary.plist", { foo: "bar" });
}
```

## Mutating Plists In Memory

```js
import { parse, stringify } from "simple-plist";

async function myApp() {
  // Convert a Javascript object to a plist xml string
  const xml = stringify({ name: "Joe", answer: 42 });

  // Convert a plist xml string or a binary plist buffer to a Javascript object
  const data = await parse(
    "<plist><dict><key>name</key><string>Joe</string></dict></plist>"
  );
}
```

## TypeScript Generics

If you're using TypeScript, the `parse` and `readFile` functions both support
generics so you don't lose type information. If no type is specified, the
default of `PlistValue` will be used.

```ts
import { parse } from "simple-plist";

interface MyDatabase {
  name: string;
  answer?: number;
}

async function myApp() {
  return parse<MyDatabase>(
    "<plist><dict><key>name</key><string>Joe</string></dict></plist>"
  );
}
```
