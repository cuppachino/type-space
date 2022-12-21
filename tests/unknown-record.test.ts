import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite'
import type { UnknownRecord } from '../src/unknown-record'

interface Bar<F> {
	foo: F
}

declare function makeBar<F extends UnknownRecord>(foo: F): Bar<F>

expectType<Bar<{}>>(makeBar({}))
expectType<Bar<{ foo: number }>>(makeBar({ foo: 1 }))

expectNotAssignable<Bar<{ foo: string }>>(makeBar({ foo: 1 }))

expectAssignable<Bar<Record<PropertyKey, string>>>(makeBar({ foo: '1' }))
expectAssignable<UnknownRecord>(makeBar({ foo: '1' }).foo)
