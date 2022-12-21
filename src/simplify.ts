/**
 * Create a new, mapped type from `T`.
 *
 * @example
 * ```
 * Simplify<{ a: 1 } & { b: 2 }> // { a: 1, b: 2 }
 * ```
 */
export type Simplify<T> = T extends infer U ? { [K in keyof U]: U[K] } : never
