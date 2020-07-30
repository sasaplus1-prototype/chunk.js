export function chunk<T>(values: Array<T>, size: number): Array<Array<T>> {
  const len = values.length;
  const result = [];

  let index = 0;

  while (index < len) {
    result.push(
      values.slice(index, index + size)
    );

    index += size;
  }

  return result;
}
