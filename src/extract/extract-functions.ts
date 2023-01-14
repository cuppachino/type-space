import type { ExtendsFunction } from '../extends/extends-function'

/**
 * Extracts all properties from `T` that extend functions or methods.
 *
 * @see
 * {@link https://github.com/Cuppachino/type-space/blob/main/src/extends/extends-function.ts | ExtendsFunction}.
 */
export type ExtractFunctions<T> = {
	[K in keyof T as ExtendsFunction<T[K], K>]: T[K]
}
