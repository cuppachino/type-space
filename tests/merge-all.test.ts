import { expectAssignable, expectType } from 'tsd-lite'
import type { MergeAll } from '../src/merge-all'

// * Case 1.A

declare type Color =
	| 'blue'
	| 'cyan'
	| 'green'
	| 'yellow'
	| 'red'
	| 'bold'
	| 'bgBlack'
declare type RawLevel = Record<string, Color | [Color, ...Color[]]>
declare type Level = Record<string, [Color, ...Color[]]>

declare function mergeLevelConfig<T extends RawLevel[]>(
	...levels: [...T]
): MergeAll<T>

declare const levels: [
	{ error: ['red', 'bold', 'bgBlack'] },
	{ warn: 'yellow' },
	{ info: 'cyan' },
	{ debug: ['blue', 'bold'] }
]

declare type ExpectedMerge = {
	error: ['red', 'bold', 'bgBlack']
	warn: 'yellow'
	info: 'cyan'
	debug: ['blue', 'bold']
}

expectType<ExpectedMerge>(mergeLevelConfig(...levels))

expectType<ExpectedMerge>(
	mergeLevelConfig(
		{ error: ['red', 'bold', 'bgBlack'] },
		{ warn: 'yellow' },
		{ info: 'cyan' },
		{ debug: ['blue', 'bold'] }
	)
)

// * Case 1.B

declare const mergedLevels: MergeAll<typeof levels>

declare type NormalizeLevel<L extends RawLevel> = {} & {
	[K in keyof L]: L[K] extends Color[] ? [...L[K]] : [L[K]]
}

declare type ExpectedNormalized = {
	error: ['red', 'bold', 'bgBlack']
	warn: ['yellow']
	info: ['cyan']
	debug: ['blue', 'bold']
}

declare function normalizeMergedLevels<Config extends RawLevel>(
	levelConfig: Config
): NormalizeLevel<Config>

expectType<ExpectedNormalized>(normalizeMergedLevels(mergedLevels))

expectAssignable<Level>(normalizeMergedLevels(mergedLevels))

// * Case 1.C

declare function defineLogLevels<Config extends RawLevel[]>(
	...levels: [...Config]
): NormalizeLevel<MergeAll<Config>>

expectType<ExpectedNormalized>(defineLogLevels(...levels))

expectAssignable<Level>(defineLogLevels(...levels))
