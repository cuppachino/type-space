import type { NumberLiteral, ParseNumberLiteral } from 'type-space'

/**
 * Coerce either a `number` or a `NumberLiteral` into a `number`.
 *
 * @remarks This is useful for finalizing a `NumberLike` into a `number`.
 * @example
 * ```
 * type A = IntoNumber<1> // 1
 * type B = IntoNumber<"1"> // 1
 * ```
 */
export type IntoNumber<T extends number | NumberLiteral> =
	T extends NumberLiteral ? ParseNumberLiteral<T> : T
