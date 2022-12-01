import type { NumberLiteral, Stringify } from '.'

/** Coerces a `NumberLiteral` type to a `number`
 * @see {@link NumberLiteral}
 */
export type ParseNumberLiteral<N> =
  Stringify<N> extends `${infer I extends number}` ? I : never
