/**
 * Merge two types into a new type. If a key exists in both types, the SECOND type's value will be used.
 */
export type MergeRight<A, B> = {
	[K in keyof A | keyof B]: K extends keyof B
		? B[K]
		: K extends keyof A
		? A[K]
		: never
}
