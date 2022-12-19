import type { ExtendsFunction } from 'type-space'

/**
 Extracts all properties from `T` that extend functions or methods.
 
 @see
 {@link [source tests ](https://github.com/Cuppachino/type-space/blob/main/tests/extends-extract-functions.test.ts)}
 for a fun example of how to use this type.
 */
export type ExtractFunctions<T> = {
	[K in keyof T as ExtendsFunction<T[K], K>]: T[K]
}
