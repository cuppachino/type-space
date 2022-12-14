import type { Subtract } from '../src'
import { expectType } from 'tsd-lite'

declare const case1: Subtract<2, 1>
expectType<1>(case1)

declare const case2: Subtract<1, 0>
expectType<1>(case2)

declare const case3: Subtract<0, 0>
expectType<0>(case3)

declare const case4: Subtract<10, 5>
expectType<5>(case4)
