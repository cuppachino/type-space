/* eslint-disable @typescript-eslint/no-explicit-any */
// ? for compatibility with constructables

/**
 Extracts all properties from `T` that extend functions or methods.
 
 @see
 {@link [source tests ](https://github.com/Cuppachino/type-space/blob/main/tests/extends-extract-functions.test.ts)}
 for a fun example of how to use this type.
 */
export type ExtractFunctions<T> = {
	[K in keyof T]: T[K] extends (...args: any[]) => any
		? T[K]
		: T[K] extends (...args: readonly any[]) => any
		? T[K]
		: never
}
