import type { NumberLiteral } from './number-literal'
import type { Stringify } from './stringify'

/**
 * Coerces a `NumberLiteral` type to a `number`
 *
 * @see {@link NumberLiteral}
 * @example
 * ```
 * type Positive42 = ParseNumberLiteral<'42'> // 42
 * type Negative42 = ParseNumberLiteral<'-42'> // -42
 * ```
 */
export type ParseNumberLiteral<N extends NumberLiteral> =
	Stringify<N> extends `${infer I extends number}` ? I : never
