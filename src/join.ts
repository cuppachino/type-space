import type { Equal, Expect } from '@type-challenges/utils'
import type { IgnoreMutability } from './ignore-mutability'
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
	T extends Stringifiable[] | readonly Stringifiable[],
	D extends Stringifiable = '',
	Acc extends Stringifiable = ''
> = IgnoreMutability<T> extends T
	? JoinReadonly<T, D, Acc>
	: JoinMutable<[...T], D, Acc>

type JoinMutable<
	T extends Stringifiable[],
	D extends Stringifiable = '',
	Acc extends Stringifiable = ''
> = T extends [
	infer Head extends Stringifiable,
	...infer Tail extends Stringifiable[]
]
	? Join<Tail, D, `${Acc}${Head}${Tail extends [] ? '' : D}`>
	: Acc

type JoinReadonly<
	T extends readonly Stringifiable[],
	D extends Stringifiable = '',
	Acc extends Stringifiable = ''
> = T extends readonly [
	infer Head extends Stringifiable,
	...infer Tail extends readonly Stringifiable[]
]
	? Join<Tail, D, `${Acc}${Head}${Tail extends [] ? '' : D}`>
	: Acc

/**
 * @internal
 */
type _join_cases = [
	//    ^?
	Expect<Equal<Join<['a', 'b', 'c']>, 'abc'>>,
	Expect<Equal<Join<['a', 'b', 'c'], ' & '>, 'a & b & c'>>,
	Expect<Equal<Join<readonly ['a', 'b', 'c']>, 'abc'>>,
	Expect<Equal<Join<readonly ['a', 'b', 'c'], ' & '>, 'a & b & c'>>,
	Expect<Equal<Join<readonly ['a', 'b', 'c'], ' & ', '_'>, '_a & b & c'>>
]
