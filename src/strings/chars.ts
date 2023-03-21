import type { Equal, ExpectFalse, ExpectTrue } from '@type-challenges/utils'

/**
 * Split a string literal into an tuple of characters.
 *
 * @example
 * ```
 * type MyChars = Chars<'abc'> // ['a', 'b', 'c']
 * ```
 */
export type Chars<
	S extends string,
	A extends string[] = []
> = S extends `${infer C}${infer R}` ? Chars<R, [...A, C]> : A

/**
 * @internal
 */
type _Chars_Cases = [
	ExpectTrue<Equal<Chars<'abc'>, ['a', 'b', 'c']>>,
	ExpectTrue<Equal<Chars<'abc', ['d']>, ['d', 'a', 'b', 'c']>>,
	ExpectFalse<Equal<Chars<'abc'>, ['', 'abc']>>
]
