import type { Join } from '../src'
import { expectType } from 'tsd-lite'

declare const fruits: Join<['apple', 'banana', 'plum'], ' & '>
expectType<'apple & banana & plum'>(fruits)

declare const abc: Join<['a', 'b', 'c']>
expectType<'abc'>(abc)
