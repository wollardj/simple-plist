declare module "bplist-creator" {
  type PlistJsObj = any[] | Record<any, any>;

  type BPlistCreator = (object: PlistJsObj) => Buffer;

  const BPlistCreator: BPlistCreator;
  export = BPlistCreator;
}
