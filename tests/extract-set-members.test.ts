import type { ExtractSetMembers } from '../src'
import { expectType } from 'tsd-lite'

declare class Config {
	static logLevels: Set<
		(readonly ['error', 'warn', 'info', 'debug', 'verbose'])[number]
	>
}

declare const level: ExtractSetMembers<typeof Config['logLevels']>

expectType<'error' | 'warn' | 'info' | 'debug' | 'verbose'>(level)
