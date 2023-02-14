/**
 * Extracts all optional properties in a type. Discards required `undefined` properties.
 *
 * @example
 * ```ts
 * type c = ExtractOptional<{
 *  a: string
 *  b: undefined
 *  c?: boolean
 * }> // { c?: boolean; }
 * ```
 */
export type ExtractOptional<T> = {
	[K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K]
}
