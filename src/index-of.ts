import type { Indices } from './indices'
import type { UnknownArray } from './unknown-array'

/**
 * Create a union type from the indices of `T`
 *
 * @see {@link Indices}
 * @example
 * ```
 * IndexOf<[1, 2, 3]> // 0 | 1 | 2
 * ```
 */
export type IndexOf<T extends UnknownArray> =
	Indices<T> extends infer I extends number[] | readonly number[]
		? I[number]
		: never
