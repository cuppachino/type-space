import type { UnionToIntersection } from './union-to-intersection'

/**
 * Converts a union type to a tuple type, the order is not guaranteed.
 * This is useful as an intermediate step for other types.
 */
export type UnionToTuple<T> = UnionToIntersection<
	T extends never ? never : (t: T) => T
> extends (_: never) => infer W
	? [...UnionToTuple<Exclude<T, W>>, W]
	: []
