import type { IsWhole } from './is-whole'

/**
 * Validate whether two number are whole. Returns `Then` if true, otherwise `Else`.
 *
 * @example
 * ```
 * IfBothWhole<1, 2, true, false> // true
 * ```
 * @example
 * ```
 * IfBothWhole<-1, 1.5, true, false> // false
 * ```
 */
export type IfBothWhole<
	A extends number,
	B extends number,
	Then,
	Else = never
> = IsWhole<A> extends true ? (IsWhole<B> extends true ? Then : Else) : Else
