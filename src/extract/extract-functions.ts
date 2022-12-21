import type { ExtendsFunction } from 'type-space/extends/extends-function'

/* eslint-disable @typescript-eslint/no-explicit-any 
-- // ? for compatibility with constructables 
*/

/**
 Extracts all properties from `T` that extend functions or methods.
 
 @see
 {@link [ExtendsFunction](https://github.com/Cuppachino/type-space/blob/main/src/extends/extends-function.ts)}
 */
export type ExtractFunctions<T> = {
	[K in keyof T as ExtendsFunction<T[K], K>]: T[K]
}
