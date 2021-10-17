declare module "bplist-parser" {
  type PlistJsObj = any[] | Record<any, any>;

  interface BPlistParser {
    parseBuffer: (val: string | Buffer) => [PlistJsObj];
  }

  const BPlistParser: BPlistParser;
  export = BPlistParser;
}
