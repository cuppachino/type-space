import type { KeyOf } from './key-of'
import type { UnknownArray } from './unknown-array'

/**
 * Create a tuple of key unions from each member in a collection. The order is preserved (without recursion).
 *
 * @see {@link KeyOf} if you don't need the tuple structure.
 * @example
 * ```
 * declare const levelConfig: [
 * 	{ name: 'error', colors: ['red', 'bold'] },
 * 	{ name: 'warn', colors: ['yellow'] },
 * 	{ name: 'info' }
 * 	{ name: 'debug', colors: ['blue'] }
 * ]
 *
 * declare const levelConfigKeys: PartitionKeys<typeof levelConfig>
 * // [
 * //   "name" | "colors",
 * //   "name" | "colors",
 * //   "name",
 * //   "name" | "colors"
 * // ]
 * ```
 * @example
 * ```
 * type LevelConfigKeys = KeyOf<typeof levelConfig[number]> // "name" | "colors"
 * ```
 */
export type PartitionKeys<T extends UnknownArray> = {
	[Idx in keyof T]: KeyOf<T[Idx]>
}
