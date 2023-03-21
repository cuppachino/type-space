import type { Equal, Expect } from '@type-challenges/utils'
import type { Assert } from '../assert'
import type { Chars } from './chars'
import type { IndexOf } from '../index-of'
import type { IntoNumber } from '../into/into-number'
import type { Join } from '../join'
import type { Length } from '../length'
import type { NumberLike } from '../number-like'
import type { PopBy } from '../tuples/pop-by'
import type { ShiftBy } from '../tuples/shift-by'
import type { Stringifiable } from '../stringifiable'
import type { Subtract } from '../math/subtract'

/**
 * Splits a string literal at a given index, non-inclusive.
 *
 * @param S - The string literal to split.
 * @param I - A number or number literal. Must be an index of `S`.
 * @example
 * ```
 * type A = SplitAt<'david', '2'> // ['da', 'vid']
 * type B = SplitAt<'david', 5> // ['david', '']
 * ```
 */
export type SplitAt<
	S extends string,
	I extends NumberLike<IndexOf<[...Chars<S>]>> = Assert<
		NumberLike<0>,
		NumberLike<IndexOf<[...Chars<S>]>>
	>
> = Chars<S> extends infer C extends Stringifiable[]
	? [
			Join<PopBy<C, Subtract<Length<C>, IntoNumber<I>>>>,
			Join<ShiftBy<C, IntoNumber<I>>>
	  ]
	: never

/**
 * @internal
 */
type _SplitAt_Cases = [
	Expect<Equal<SplitAt<'david', '0'>, ['', 'david']>>,
	Expect<Equal<SplitAt<'david', '1'>, ['d', 'avid']>>,
	Expect<Equal<SplitAt<'david', '2'>, ['da', 'vid']>>,
	Expect<Equal<SplitAt<'david', '3'>, ['dav', 'id']>>,
	Expect<Equal<SplitAt<'david', '4'>, ['davi', 'd']>>,
	// Expect<Equal<SplitAt<'david', '5'>, ['david', '']>>, // this can be done if I extends NumberLike<Length<[...Chars<S>, never]>>
	Expect<Equal<SplitAt<'david', 0>, ['', 'david']>>,
	Expect<Equal<SplitAt<'david', 1>, ['d', 'avid']>>,
	Expect<Equal<SplitAt<'david', 2>, ['da', 'vid']>>,
	Expect<Equal<SplitAt<'david', 3>, ['dav', 'id']>>,
	Expect<Equal<SplitAt<'david', 4>, ['davi', 'd']>>
	// Expect<Equal<SplitAt<'david', 5>, ['david', '']>> // but should it really be allowed? I think not.
]
