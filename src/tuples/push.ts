import type { Equal } from '@type-challenges/utils'
import type { IgnoreMutability } from 'type-space'
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
export type Push<T extends UnknownArray, V> = IgnoreMutability<T> extends T
	? readonly [...T, V]
	: [...T, V]

/**
 * @internal
 */
type _push_cases = [
	//    ^?
	Equal<Push<[1, 2], 3>, [1, 2, 3]>,
	//    ^?
	Equal<Push<readonly [1, 2], 3>, readonly [1, 2, 3]>
	//    ^?
]
