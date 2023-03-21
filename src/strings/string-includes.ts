import type { ExpectFalse, ExpectTrue } from '@type-challenges/utils'
import type { Assert } from '../assert'
import type { Chars } from './chars'
import type { IndexOf } from '../index-of'
import type { NumberLike } from '../number-like'
import type { SplitAt } from './split-at'

/**
 * Check if a string literal includes another string literal, inclusive (⊆).
 *
 * @example
 * ```
 * type _StringIncludes_Cases = [
 * 	ExpectTrue<StringIncludes<'abc', 'a'>>,
 * 	ExpectTrue<StringIncludes<'abc', 'bc'>>,
 * 	ExpectTrue<StringIncludes<'abc', 'abc'>>,
 * 	ExpectFalse<StringIncludes<'NOT', 'NOT-INCLUDE'>>,
 * 	//
 * 	ExpectTrue<StringIncludes<'abc', '', 0>>,
 * 	ExpectTrue<StringIncludes<'abc', '', '0'>>,
 * 	ExpectTrue<StringIncludes<'abc', 'a', '0'>>,
 * 	ExpectTrue<StringIncludes<'abc', 'abc', '0'>>,
 * 	ExpectFalse<StringIncludes<'NOT', 'NOT-INCLUDE', '0'>>,
 * 	//
 * 	ExpectTrue<StringIncludes<'abc', 'b', 1>>,
 * 	ExpectTrue<StringIncludes<'abc', 'bc', '1'>>,
 * 	ExpectFalse<StringIncludes<'abc', 'a', '1'>>,
 * 	ExpectFalse<StringIncludes<'abc', 'ab', '1'>>,
 * 	ExpectFalse<StringIncludes<'NOT', 'NOT-INCLUDE', '1'>>,
 * 	//
 * 	ExpectTrue<StringIncludes<'abc', 'c', 2>>,
 * 	ExpectTrue<StringIncludes<'abc', 'c', '2'>>,
 * 	ExpectFalse<StringIncludes<'abc', 'a', '2'>>,
 * 	ExpectFalse<StringIncludes<'abc', 'ab', '2'>>,
 * 	ExpectFalse<StringIncludes<'abc', 'abc', '2'>>,
 * 	ExpectFalse<StringIncludes<'NOT', 'NOT-INCLUDE', '2'>>
 * ]
 * ```
 */
export type StringIncludes<
	S extends string,
	Search extends string,
	I extends NumberLike<IndexOf<Chars<S>>> = Assert<
		0,
		NumberLike<IndexOf<Chars<S>>>
	>
> = SplitAt<S, I> extends [infer _A, infer B]
	? B extends `${infer _A}${Search}${infer _B}`
		? true
		: false
	: never

type _StringIncludes_Cases /* ⊆ */ = [
	ExpectTrue<StringIncludes<'abc', 'a'>>,
	ExpectTrue<StringIncludes<'abc', 'bc'>>,
	ExpectTrue<StringIncludes<'abc', 'abc'>>,
	ExpectFalse<StringIncludes<'NOT', 'NOT-INCLUDE'>>,
	//
	ExpectTrue<StringIncludes<'abc', '', 0>>,
	ExpectTrue<StringIncludes<'abc', '', '0'>>,
	ExpectTrue<StringIncludes<'abc', 'a', '0'>>,
	ExpectTrue<StringIncludes<'abc', 'abc', '0'>>,
	ExpectFalse<StringIncludes<'NOT', 'NOT-INCLUDE', '0'>>,
	//
	ExpectTrue<StringIncludes<'abc', 'b', 1>>,
	ExpectTrue<StringIncludes<'abc', 'bc', '1'>>,
	ExpectFalse<StringIncludes<'abc', 'a', '1'>>,
	ExpectFalse<StringIncludes<'abc', 'ab', '1'>>,
	ExpectFalse<StringIncludes<'NOT', 'NOT-INCLUDE', '1'>>,
	//
	ExpectTrue<StringIncludes<'abc', 'c', 2>>,
	ExpectTrue<StringIncludes<'abc', 'c', '2'>>,
	ExpectFalse<StringIncludes<'abc', 'a', '2'>>,
	ExpectFalse<StringIncludes<'abc', 'ab', '2'>>,
	ExpectFalse<StringIncludes<'abc', 'abc', '2'>>,
	ExpectFalse<StringIncludes<'NOT', 'NOT-INCLUDE', '2'>>
]
