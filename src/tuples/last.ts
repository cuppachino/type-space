import type { IgnoreMutability } from '../ignore-mutability'
import type { UnknownArray } from '../unknown-array'

export type Last<T extends UnknownArray> = IgnoreMutability<T> extends T
	? [T] extends [readonly [...any[], infer L]]
		? L
		: never
	: [T] extends [[...any[], infer L]]
	? L
	: never
