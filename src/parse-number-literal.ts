import type { NumberLiteral, Stringify } from 'type-space'

/** 
 Coerces a `NumberLiteral` type to a `number`
 
 @see {@link NumberLiteral}
 */
export type ParseNumberLiteral<N extends NumberLiteral> =
	Stringify<N> extends `${infer I extends number}` ? I : never
