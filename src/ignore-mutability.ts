/**
 * Creates a type that is a union of readonly and mutable versions of `T`.
 */
export type IgnoreMutability<T> =
	| { -readonly [K in keyof T]: T[K] }
	| {
			readonly [K in keyof T]: T[K]
	  }
