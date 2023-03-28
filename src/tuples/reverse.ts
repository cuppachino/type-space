/**
 * Reverses a tuple type.
 *
 * @example
 * ```
 * Reverse<[1, 2, 3]> // [3, 2, 1]
 * ```
 */
export type Reverse<T extends unknown[] | readonly unknown[]> = T extends [
	infer F,
	...infer R
]
	? [...Reverse<R>, F]
	: []
