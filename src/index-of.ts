import type { Indices, UnknownArray } from 'type-space'

/**
 * Create a union type from the indices of `T`
 *
 * @example
 * ```
 * IndexOf<[1, 2, 3]> // 0 | 1 | 2
 * ```
 * @see {@link Indices}
 */
export type IndexOf<T extends UnknownArray> =
	Indices<T> extends infer I extends number[] | readonly number[]
		? I[number]
		: never
