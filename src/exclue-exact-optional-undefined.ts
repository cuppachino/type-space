import type { Combine } from './combine'
import type { ExtractOptional } from './extract/extract-optional'
import type { ExtractRequired } from './extract/extract-required'
import type { Primitive } from './primitive'
import type { Where } from './where'

export type OmitExactOptionalUndefined<T> = T extends Primitive
	? T extends undefined
		? never
		: T
	: T extends (infer U)[]
	? T
	: Combine<
			ExtractRequired<T> &
				Omit<ExtractOptional<T>, Where<ExtractOptional<T>, undefined>>
	  >
