import type { TrimNumberLiteral } from '../src/main'
import { expectType } from 'tsd-lite'

type ForEachPadLeft<
  T extends string[],
  U extends string,
  Acc extends string[] = []
> = T extends [infer Head extends string, ...infer Tail extends string[]]
  ? ForEachPadLeft<Tail, U, [...Acc, `${U}${Head}`]>
  : Acc

type ForEachPadRight<
  T extends string[],
  U extends string,
  Acc extends string[] = []
> = T extends [infer Head extends string, ...infer Tail extends string[]]
  ? ForEachPadRight<Tail, U, [...Acc, `${Head}${U}`]>
  : Acc

// Case 1
type Case1 = ForEachPadLeft<['0', '.', '.0'], '000'> // ["0000", "000.", "000.0"]
declare const case1: [
  TrimNumberLiteral<Case1[0]>,
  TrimNumberLiteral<Case1[1]>,
  TrimNumberLiteral<Case1[2]>
]

expectType<['0', '0', '0']>(case1)

// Case 2
type Case2 = ForEachPadRight<['1', '.', '.1'], '000'> // ["1000", ".000", ".1000"]
declare const case2: [
  TrimNumberLiteral<Case2[0]>,
  TrimNumberLiteral<Case2[1]>,
  TrimNumberLiteral<Case2[2]>
]
expectType<['1000', '0', '0.1']>(case2)
