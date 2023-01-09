import type { CreateTuple } from '../src/create-tuple'
import { expectType } from 'tsd-lite'

declare const case1: CreateTuple<4>
expectType<[never, never, never, never]>(case1)

declare const case2: CreateTuple<3, 'a'>
expectType<['a', 'a', 'a']>(case2)
