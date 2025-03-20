export function isObjectEmpty(object: any) {
  return Object.getOwnPropertyNames(object).length === 0;
}
