import type { Split } from '../src'
import { expectType } from 'tsd-lite'

type CaseString = 'a-b-c'

declare const cases: [
	Split<CaseString>,
	Split<CaseString, '-'>,
	Split<CaseString, '-c'>,
	Split<CaseString, 'b'>,
	Split<'', ''>
]

expectType<['a', '-', 'b', '-', 'c']>(cases[0])
expectType<['a', 'b', 'c']>(cases[1])
expectType<['a-b']>(cases[2])
expectType<['a-', '-c']>(cases[3])
expectType<['']>(cases[4])
