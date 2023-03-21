import type { ExpectFalse, ExpectTrue, NotEqual } from '@type-challenges/utils'
import type { Assert } from '../assert'
import type { Chars } from './chars'
import type { IndexOf } from '../index-of'
import type { NumberLike } from '../number-like'
import type { SplitAt } from './split-at'
import type { StringIncludes } from './string-includes'

/**
 * Check if a string literal includes another string literal, proper (⊂).
 *
 * @example
 * ```
 * type _StringIncludesProper_Cases = [
 * 	ExpectTrue<StringIncludesProper<'abc', 'a'>>,
 * 	ExpectTrue<StringIncludesProper<'abc', 'bc'>>,
 * 	ExpectFalse<StringIncludesProper<'abc', 'abc'>>,
 * 	ExpectFalse<StringIncludesProper<'NOT', 'NOT-INCLUDE'>>,
 * 	//
 * 	ExpectTrue<StringIncludesProper<'abc', '', 0>>,
 * 	ExpectTrue<StringIncludesProper<'abc', '', '0'>>,
 * 	ExpectTrue<StringIncludesProper<'abc', 'a', '0'>>,
 * 	ExpectTrue<StringIncludesProper<'abc', 'b', '0'>>,
 * 	ExpectFalse<StringIncludesProper<'abc', 'abc', '0'>>,
 * 	ExpectFalse<StringIncludesProper<'NOT', 'NOT-INCLUDE', '0'>>,
 * 	//
 * 	ExpectTrue<StringIncludesProper<'abc', 'b', 1>>,
 * 	ExpectFalse<StringIncludesProper<'abc', 'bc', '1'>>,
 * 	ExpectFalse<StringIncludesProper<'abc', 'a', '1'>>,
 * 	ExpectFalse<StringIncludesProper<'abc', 'ab', '1'>>,
 * 	ExpectFalse<StringIncludesProper<'NOT', 'NOT-INCLUDE', '1'>>,
 * 	//
 * 	ExpectFalse<StringIncludesProper<'abc', 'c', 2>>,
 * 	ExpectFalse<StringIncludesProper<'abc', 'c', '2'>>,
 * 	ExpectFalse<StringIncludesProper<'abc', 'a', '2'>>,
 * 	ExpectFalse<StringIncludesProper<'abc', 'ab', '2'>>,
 * 	ExpectFalse<StringIncludesProper<'abc', 'abc', '2'>>,
 * 	ExpectFalse<StringIncludesProper<'NOT', 'NOT-INCLUDE', '2'>>
 * ]
 * ```
 */
export type StringIncludesProper<
	T extends string,
	S extends string,
	I extends NumberLike<IndexOf<Chars<T>>> = Assert<
		0,
		NumberLike<IndexOf<Chars<T>>>
	>
> = SplitAt<T, I> extends [infer _A, infer B extends string]
	? NotEqual<B, S> extends true
		? StringIncludes<B, S>
		: false
	: never

type _StringIncludesProper_Cases = /* ⊂ */ [
	ExpectTrue<StringIncludesProper<'abc', 'a'>>,
	ExpectTrue<StringIncludesProper<'abc', 'bc'>>,
	ExpectFalse<StringIncludesProper<'abc', 'abc'>>,
	ExpectFalse<StringIncludesProper<'NOT', 'NOT-INCLUDE'>>,
	//
	ExpectTrue<StringIncludesProper<'abc', '', 0>>,
	ExpectTrue<StringIncludesProper<'abc', '', '0'>>,
	ExpectTrue<StringIncludesProper<'abc', 'a', '0'>>,
	ExpectTrue<StringIncludesProper<'abc', 'b', '0'>>,
	ExpectFalse<StringIncludesProper<'abc', 'abc', '0'>>,
	ExpectFalse<StringIncludesProper<'NOT', 'NOT-INCLUDE', '0'>>,
	//
	ExpectTrue<StringIncludesProper<'abc', 'b', 1>>,
	ExpectFalse<StringIncludesProper<'abc', 'bc', '1'>>,
	ExpectFalse<StringIncludesProper<'abc', 'a', '1'>>,
	ExpectFalse<StringIncludesProper<'abc', 'ab', '1'>>,
	ExpectFalse<StringIncludesProper<'NOT', 'NOT-INCLUDE', '1'>>,
	//
	ExpectFalse<StringIncludesProper<'abc', 'c', 2>>,
	ExpectFalse<StringIncludesProper<'abc', 'c', '2'>>,
	ExpectFalse<StringIncludesProper<'abc', 'a', '2'>>,
	ExpectFalse<StringIncludesProper<'abc', 'ab', '2'>>,
	ExpectFalse<StringIncludesProper<'abc', 'abc', '2'>>,
	ExpectFalse<StringIncludesProper<'NOT', 'NOT-INCLUDE', '2'>>
]
