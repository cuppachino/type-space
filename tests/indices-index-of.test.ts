import type { IndexOf, Indices } from '../src'
import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite'

// * Indices Cases
// ! Test BEFORE IndexOf because IndexOf depends on Indices
declare const numberArray: number[]

declare const tupleCase1: Indices<[1, 2, 3]>
expectType<[0, 1, 2]>(tupleCase1)
expectAssignable<readonly number[]>(tupleCase1)
expectAssignable<number[]>(tupleCase1)
expectNotAssignable<typeof tupleCase1>(numberArray)

declare const tupleCase2: Indices<readonly ['a', 'b', 'c']>
expectType<readonly [0, 1, 2]>(tupleCase2)
expectAssignable<readonly number[]>(tupleCase2)
expectNotAssignable<number[]>(tupleCase2)
expectNotAssignable<typeof tupleCase2>(numberArray)

// * IndexOf Cases
// ! Test AFTER Indices because IndexOf depends on Indices
declare const number: number

declare const unionCase1: IndexOf<[1, 2, 3]>
expectType<0 | 1 | 2>(unionCase1)
expectAssignable<number>(unionCase1)
expectNotAssignable<typeof unionCase1>(number)

declare const unionCase2: IndexOf<readonly ['a', 'b', 'c']>
expectType<0 | 1 | 2>(unionCase2)
expectAssignable<number>(unionCase2)
expectNotAssignable<typeof unionCase2>(number)
