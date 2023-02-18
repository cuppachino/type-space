import type { UnknownArray } from '../unknown-array'

/**
 * Create a tuple type with the last element removed. Does not return the removed type.
 *
 * @example
 * ```
 * type Tuple = [1, 2, 3]
 * type LeadingRest = Pop<[1, 2, 3]> // [1, 2]
 * ```
 * @see `Last` if you need the type of the last element (like `Array.prototype.pop`)
 * @remarks Its worth noting `Pop`, `Push`, `Shift`, and `Unshift` are inspired by JS; however, the types are not 1:1 for design reasons. More information can be found in [README](https://github.com/Cuppachino/type-space/#type-space).
 */
export type Pop<T extends UnknownArray> = T extends [...infer U, any]
	? U
	: never
