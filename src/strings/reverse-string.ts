import type { Chars } from './chars'
import type { Join } from '../join'
import type { Reverse } from '../tuples/reverse'

/**
 * Reverses a string literal.
 *
 * @example
 * ```ts
 * function ReverseString<Str extends string>(str: Str): ReverseString<Str> => str.split('').reverse().join('') as ReverseString<Str>
 * ```
 */
export type ReverseString<T extends string> = Join<
	Reverse<Chars<T>>
> extends infer R extends string
	? R
	: never
