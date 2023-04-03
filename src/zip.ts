import type { MergeAllRight } from './merge-all-right'

type Indices<T extends unknown[] | readonly unknown[]> = Exclude<
	keyof T,
	keyof unknown[]
> extends `${infer Index extends number}`
	? Index
	: never

/**
 * From a tuple of keys and a tuple of values, create a new record. An ordered tuple must be used, and they both must be equal length.
 *
 * @example
 * ```ts
 * type Key2 = ['a', 'b']
 * type v2 = ['apple', 'butter']
 *
 * type Zipped = Zip<Key2, v2>
 * // { a: "apple"; b: "butter"; }
 * ```
 */
export type Zip<
	Keys extends readonly string[],
	Values extends readonly unknown[]
> = MergeAllRight<{
	[I in keyof Keys]: I extends keyof Values
		? {
				[K in Keys[I]]: Values[I]
		  }
		: never
}>
