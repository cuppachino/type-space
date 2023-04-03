import type { Combine } from './combine'
import type { IgnoreMutability } from './ignore-mutability'
import type { ShallowMergeRight } from './shallow-merge-right'

/**
 * Merge all type members of a tuple into a single type. The resulting type will
 * have all properties of all members in the tuple. The final occurrence of a
 * property overrides all previous occurrences.
 *
 * @example
 * Here we merge a tuple of logger level configs into a single config.
 * ```
 * const merge = <T extends readonly Record<string, any>[]>(levels: T) =>
 * 	levels.reduce((acc, level) => {
 * 		return {
 * 			...acc,
 * 			...level
 * 		}
 * 	}, {} as Record<string, unknown>) as MergeAllRight<T>
 *
 * const levels = [
 *   { error: ['red', 'bold'] },
 *   { warn: 'yellow' },
 *   { info: 'green' },
 * ] as const
 *
 * const config = merge(levels)
 * // {
 * //   error: readonly ['red', 'bold'],
 * //   warn: 'yellow',
 * //   info: 'green'
 * // }
 * ```
 * @deprecated Use `ShallowMergeRight`, `DeepMergeRight`, or `DeepMergeAllRight` instead.
 */
export type MergeAllRight<
	T extends unknown[] | readonly unknown[],
	Acc = {}
> = T extends IgnoreMutability<[...infer Head, infer A]>
	? MergeAllRight<Head, ShallowMergeRight<Acc, A>>
	: Combine<Acc>
