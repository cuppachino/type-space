import type { PartitionValues } from '../src/partition-values'
import { expectType } from 'tsd-lite'

declare const levelConfig: [
	{ name: 'error'; colors: ['red', 'bold'] },
	{ name: 'warn'; colors: ['yellow'] },
	{ name: 'info' },
	{ name: 'debug'; colors: ['blue'] }
]

declare const LevelNames: PartitionValues<typeof levelConfig, 'name'>
expectType<['error', 'warn', 'info', 'debug']>(LevelNames)

declare const levelColors: PartitionValues<typeof levelConfig, 'colors'>
expectType<[['red', 'bold'], ['yellow'], never, ['blue']]>(levelColors)

declare const levelNamesOrColors: PartitionValues<
	typeof levelConfig,
	'name' | 'colors'
>
expectType<
	['error' | ['red', 'bold'], 'warn' | ['yellow'], 'info', 'debug' | ['blue']]
>(levelNamesOrColors)
