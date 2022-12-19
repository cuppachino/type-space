/**
 Checks if a type extends a function or method.
 
 @param T - The type to check.
 @param R - The type to resolve to if `T` extends a function `(default: T)`.
 @see
 {@link [ExtractFunctions ](https://github.com/Cuppachino/type-space/blob/main/src/extract/extract-functions.ts)} for example usage.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ExtendsFunction<T, R = T> = T extends (...args: any[]) => any
	? R
	: never
