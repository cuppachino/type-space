import type { PartitionKeys } from '../src/partition-keys'
import { expectType } from 'tsd-lite'

declare const levelConfig: [
	{ name: 'error'; colors: ['red', 'bold'] },
	{ name: 'warn'; colors: ['yellow'] },
	{ name: 'info' },
	{ name: 'debug'; colors: ['blue'] }
]

declare const levelConfigKeys: PartitionKeys<typeof levelConfig>

expectType<['name' | 'colors', 'name' | 'colors', 'name', 'name' | 'colors']>(
	levelConfigKeys
)
