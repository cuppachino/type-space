import type { Simplify } from './simplify'
import type { UnknownRecord } from './unknown-record'
/**
 * Merge all type members of a tuple into a single type. The resulting type will
 * have all properties of all members in the tuple. The final occurrence of a
 * property overrides all previous occurrences.
 *
 * @example
 * In this example, `Foo[0]['a']` is overridden by `Foo[1]['a']`, which may be undefined.
 * ```
 * type Foo = [{ a: string; b(): void }, { a?: string }, { c: string }]
 * type MergedFoo = MergeAll<Foo> // { a?: string | undefined; b(): void; c: string }
 * ```
 * @example
 * Here we merge a tuple of logger level configs into a single config.
 * ```
 * type LevelConfig = Record<string, Color | Color[]>
 * const merge = <Level extends LevelConfig[]>(levels: [...Level]) =>
 *   levels.reduce((acc, level) => {
 *     Object.assign(acc, level)
 *     return acc
 *   }, {} as MergeAll<Level>)
 *
 * const levels = [
 *   { error: ['red', 'bold'] },
 *   { warn: 'yellow' },
 *   { info: 'green' },
 * ] as const
 * ```
 * @deprecated Use `ShallowMergeRight`, `DeepMergeRight`, or `DeepMergeAllRight` instead.
 */
export type MergeAll<
	Records extends UnknownRecord[] | readonly UnknownRecord[],
	A = unknown
> = Records extends [
	infer H,
	...infer R extends UnknownRecord[] | readonly UnknownRecord[]
]
	? MergeAll<R, Omit<A, keyof H> & H>
	: Simplify<A>
