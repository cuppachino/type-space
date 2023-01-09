import type { PartialSome } from '../src'
import { expectType } from 'tsd-lite'

declare const CLIENT_TOKENS: readonly [
	'appPid',
	'appPort',
	'remotingAuthToken',
	'certificate'
]

declare const credentials: PartialSome<
	Record<typeof CLIENT_TOKENS[number], string>,
	'certificate'
>

expectType<{
	appPid: string
	appPort: string
	remotingAuthToken: string
	certificate?: string
}>(credentials)
