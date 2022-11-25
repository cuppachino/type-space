/**
 * generates a tuple based on the length of the input array
 * and fills each index with the index number.
 * @example type _MyIndices = IndexOf<['foo', 'bar', 'qux']> // [0, 1, 2]
 * @example type _MyIndexUnion = IndexOf<['foo', 'bar', 'qux']>[number] // 0 | 1 | 2
 */
export type IndexOf<
  Tuple extends any[] | readonly any[],
  Accumulator extends any[] = []
> = Accumulator['length'] extends Tuple['length']
  ? Accumulator
  : IndexOf<Tuple, [...Accumulator, Accumulator['length']]>;
