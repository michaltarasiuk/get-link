export function assertNever(v: never): never {
  throw new Error(`Unexpected value: ${v}`);
}

export function raise(...params: ConstructorParameters<typeof Error>): never {
  throw new Error(...params);
}
