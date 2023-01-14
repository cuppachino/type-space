import type { IsInteger } from './is-integer'
import type { IsPositive } from './is-positive'

/**
 * Returns whether the number is a whole number.
 * Whole numbers are positive integers.
 *
 * @example
 * ```
 * IsWhole<1> // true
 * ```
 * @example
 * ```
 * IsWhole<1.5> // false
 * ```
 * @example
 * ```
 * IsWhole<-2> // false
 * ```
 */
export type IsWhole<N extends number> = IsPositive<N> extends true
	? IsInteger<N> extends true
		? true
		: false
	: false
