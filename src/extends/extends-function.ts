/**
 Checks if a type extends a function or method.
 
 @param T - The type to check.
 @param R - The type to resolve to if `T` extends a function `(default: T)`.
 @see
 {@link [source tests ](https://github.com/Cuppachino/type-space/blob/main/tests/extends-extract-functions.test.ts)}
 for a fun example of how to use this type.
 */
export type ExtendsFunction<T, R = T> = T extends (
	...args: unknown[]
) => unknown
	? R
	: T extends (...args: readonly unknown[]) => unknown
	? R
	: never
