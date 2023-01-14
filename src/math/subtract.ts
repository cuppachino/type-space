import type { CreateTuple } from '../create-tuple'
import type { IfBothWhole } from './if-both-whole'
import type { Length } from '../length'

/**
 * Returns the literal difference between two natural numbers.
 *
 * @example
 * ```
 * Subtract<3, 1> // 2
 * ```
 * @example
 * ```
 * Subtract<1, 0> // 1
 * ```
 */
export type Subtract<A extends number, B extends number> = IfBothWhole<
	A,
	B,
	CreateTuple<A> extends [...infer U, ...CreateTuple<B>] ? Length<U> : never
>
