import type { NumberLiteral } from 'type-space/number-literal'
import type { Stringify } from 'type-space/stringify'

export type TrimNumberLiteral<N extends number | NumberLiteral> =
	Stringify<N> extends `${0}`
		? '0'
		: PositiveRational<NoDecimalWithoutLeadingZero<Stringify<N>>>

type PositiveRational<N> = HandleLeadingZeroIntegral<
	IfWhole<N, Whole<N>, Fractional<N>>
>

type HandleLeadingZeroIntegral<N> =
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	Stringify<N> extends `${0}${infer _R extends 0}${infer R2}`
		? R2
		: N extends ''
		? '0'
		: N

type Whole<N> =
	/* if the number has a leading zero, infer everything after the zero, and recurse. */
	N extends `0${infer N2}`
		? Whole<`${N2}`>
		: /* otherwise return the number */
		  N

type Fractional<N> =
	/* if the number ends in a decimal, but doesn't have any fractional digits, return the integral. */
	N extends `${infer I}.`
		? `${I}`
		: /* if the number has both an integral and fractional part... */
		N extends `${infer I}.${infer F}`
		? /* if the fractional part has a trailing zero... */
		  `${F}` extends `${infer F2}0`
			? /* recurse with the fractional part without the trailing zero. */
			  Fractional<`${I}.${F2}`>
			: /* otherwise return the number. */
			  N
		: never

type NoDecimalWithoutLeadingZero<N> = N extends `.${infer F}` ? `0.${F}` : N

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type IfWhole<N, Then, Else> = `${N & string}` extends `${infer _I}.${infer _F}`
	? Else
	: Then
