import type { IndexOf } from '@/main'
/**
 * generates a tuple based on the length of the input array
 * and fills each index with the index number.
 * @example type _MyIndices = Indices<['foo', 'bar', 'qux']> // [0, 1, 2]
 * @example type _MyIndexUnion = Indices<['foo', 'bar', 'qux']>[number] // 0 | 1 | 2
 * @see {@link IndexOf}
 */
export type Indices<
  Tuple extends any[] | readonly any[],
  Accumulator extends any[] = []
> = Accumulator['length'] extends Tuple['length']
  ? Accumulator
  : Indices<Tuple, [...Accumulator, Accumulator['length']]>
