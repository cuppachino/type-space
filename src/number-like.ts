import type { NumberLiteral } from './number-literal'
import type { ParseNumberLiteral } from './parse-number-literal'

/**
 * Coerce either a `number` or a `NumberLiteral` into a union between the two.
 *
 * @remarks This is useful for when you want to accept a `number` or a `NumberLiteral` but you want to choose which one to use later.
 * @example
 * ```
 * type A = NumberLike<1> // 1 | "1"
 * ```
 * @example Accepting a `NumberLike` and returning a `NumberLiteral`
 * ```
 * type IntoNumberLiteral<T extends number | NumberLiteral> =
 * 	T extends NumberLiteral ? T : `${T}`
 * ```
 * @example Accepting a `NumberLike` and returning a `number`
 * ```
 * type IntoNumber<T extends number | NumberLiteral> = T extends NumberLiteral
 * 	? ParseNumberLiteral<T>
 * 	: T
 * ```
 */
export type NumberLike<T extends number | NumberLiteral> =
	T extends NumberLiteral ? ParseNumberLiteral<T> | T : `${T}` | T
