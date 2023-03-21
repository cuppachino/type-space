import type { NumberLiteral } from '../number-literal'

/**
 * Coerce either a `number` or a `NumberLiteral` into a `NumberLiteral`.
 *
 * @remarks This is useful for finalizing a `NumberLike` into a `NumberLiteral`.
 * @example
 * ```
 * type A = IntoNumberLiteral<1> // "1"
 * type B = IntoNumberLiteral<"1"> // "1"
 * ```
 */
export type IntoNumberLiteral<T extends number | NumberLiteral> =
	T extends NumberLiteral ? T : `${T}`
