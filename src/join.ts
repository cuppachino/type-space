import type { Stringifiable } from './stringifiable'
/**
 * Joins an array of strings into a single string, separated by a delimiter.
 *
 * @example
 * ```
 * Join<['apple', 'banana', 'plum'], ' & '> // 'apple & banana & plum'
 * ```
 * @example
 * ```
 * Join<['a', 'b', 'c']> // 'abc'
 * ```
 */
export type Join<
	T extends Stringifiable[],
	D extends Stringifiable = '',
	Acc extends Stringifiable = ''
> = T extends [
	infer Head extends Stringifiable,
	...infer Tail extends Stringifiable[]
]
	? Join<Tail, D, `${Acc}${Head}${Tail extends [] ? '' : D}`>
	: Acc
