import type { PartitionPick } from '../src/partition-pick'
import { expectType } from 'tsd-lite'

declare const levelConfig: [
	{ name: 'error'; colors: ['red', 'bold'] },
	{ name: 'warn'; colors: ['yellow'] },
	{ name: 'info' },
	{ name: 'debug'; colors: ['blue'] }
]

declare const pickAll: PartitionPick<typeof levelConfig, 'colors' | 'name'>
expectType<typeof levelConfig>(pickAll)

declare const pickByName: PartitionPick<typeof levelConfig, 'name'>
expectType<
	[{ name: 'error' }, { name: 'warn' }, { name: 'info' }, { name: 'debug' }]
>(pickByName)

declare const pickByColor: PartitionPick<typeof levelConfig, 'colors'>
expectType<
	[
		{ colors: ['red', 'bold'] },
		{ colors: ['yellow'] },
		{},
		{ colors: ['blue'] }
	]
>(pickByColor)
