import type { UnknownArray } from '../unknown-array'

/**
 * Create a tuple type with a new type added to the end. Does not return the length of the tuple.
 *
 * @remarks Its worth noting `Pop`, `Push`, `Shift`, and `Unshift` are inspired by JS; however, the types are not 1:1 for design reasons. More information can be found in [README](https://github.com/Cuppachino/type-space/#type-space).
 * @example
 * ```
 * declare const tuple: [1, 2]
 * type Tuple = Push<typeof tuple, 3> // [1, 2, 3]
 * ```
 */
export type Push<T extends UnknownArray, V> = [...T, V]
