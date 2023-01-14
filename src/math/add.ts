import type { CreateTuple } from '../create-tuple'
import type { Length } from '../length'

/**
 * Returns a literal sum of two natural numbers.
 *
 * @example
 * ```
 * Add<1, 2> // 3
 * ```
 * @example
 * ```
 * Add<1, 0> // 1
 * ```
 */
export type Add<A extends number, B extends number> = Length<
	[...CreateTuple<A>, ...CreateTuple<B>]
>
