import type { UnknownArray } from '../unknown-array'

/**
 * Create a tuple type with the last element removed. Does not return the removed type.
 *
 * @remarks Its worth noting `Pop`, `Push`, `Shift`, and `Unshift` are inspired by JS; however, the types are not 1:1 for design reasons. More information can be found in [README](https://github.com/Cuppachino/type-space/#type-space).
 * @see `Last` if you need the type of the last element (like `Array.prototype.pop`)
 * @example
 * ```
 * declare const tuple: [1, 2, 3]
 * type Tuple = Pop<typeof tuple> // [1, 2]
 * ```
 */
export type Pop<T extends UnknownArray> = [T] extends [[...infer R, any]]
	? R
	: [T] extends [readonly [...infer R, any]]
	? readonly [...R]
	: never
