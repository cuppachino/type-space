import type { IndexOf } from './index-of'
import type { NumberLiteral } from './number-literal'
import type { ParseNumberLiteral } from './parse-number-literal'
/**
 * Generates a tuple based on the length of the input array and fills each index with the index number.
 *
 * @example
 * ```
 * type FruitIndices = Indices<['apple', 'banana', 'plum']> // [0, 1, 2]
 * ```
 * @example
 * Can be used to create an index union (`0 | 1 | 2 | ...`)
 * ```
 * type FruitIndex = Indices<['apple', 'banana', 'plum']>[number] // 0 | 1 | 2
 * ```
 * @see {@link IndexOf}
 * @see {@link NumberLiteral}
 * @see {@link ParseNumberLiteral}
 */
export type Indices<T> = {
	[K in keyof T]: K extends NumberLiteral ? ParseNumberLiteral<K> : never
}
