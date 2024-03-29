import type { NumberLiteral } from '../number-literal'

/**
 * Coerces a number type to a positive number of the same magnitude.
 *
 * @see {@link NumberLiteral}
 * @example
 * ```
 * Absolute<-1> // 1
 * ```
 * @example
 * ```
 * Absolute<'1'> // 1
 * ```
 */
export type Absolute<N extends number | NumberLiteral> =
	`${N}` extends `-${number}`
		? `${N}` extends `-${infer R extends number | `${number}`}`
			? R
			: never
		: N
