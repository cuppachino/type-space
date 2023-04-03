/**
 * Extracts the keys of a `T` where the value extends `U`.
 */
export type Where<T, U> = {
	[K in keyof T]: T[K] extends U ? K : never
}[keyof T]
