export type callbackFn<T> = (error: Error | null, result?: T) => void;
export type StringOrBuffer = string | Buffer;
export type PlistJsObj = Record<any, any> | any[];
