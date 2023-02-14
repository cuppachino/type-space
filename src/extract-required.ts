/**
 * Extracts all required properties in a type. Keeps required `undefined` properties.
 *
 * @example
 * ```ts
 * type ab = ExtractRequired<{
 *  a: string
 *  b: undefined
 *  c?: boolean
 * }> // { a: string; b: undefined; }
 * ```
 */
export type ExtractRequired<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K]
}
