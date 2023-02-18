import type { UnknownArray } from '../unknown-array'

/**
 * Remove the first element from a tuple type. Does not return the removed type.
 *
 * @remarks Its worth noting `Pop`, `Push`, `Shift`, and `Unshift` are inspired by JS; however, the types are not 1:1 for design reasons. More information can be found in [README](https://github.com/Cuppachino/type-space/#type-space).
 * @example
 * ```
 * Shift<[1, 2, 3]> // [2, 3]
 * ```
 */
export type Shift<T extends UnknownArray> = T extends [any, ...infer U]
	? U
	: never
