import type { NumberLiteral } from 'type-space'

/**
 Coerces a number type to a positive number of the same magnitude.
 
 @example Absolute<-1> // 1
 @example Absolute<'1'> // 1
 @see {@link NumberLiteral}
 */
export type Absolute<N extends number | NumberLiteral> =
	`${N}` extends `-${number}`
		? `${N}` extends `-${infer R extends number | `${number}`}`
			? R
			: never
		: N
