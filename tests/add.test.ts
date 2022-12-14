import type { Add } from '../src'
import { expectType } from 'tsd-lite'

declare const case1: Add<1, 2>
expectType<3>(case1)

declare const case2: Add<1, 0>
expectType<1>(case2)

declare const case3: Add<0, 0>
expectType<0>(case3)

declare const case4: Add<5, 5>
expectType<10>(case4)
