import type { Combine } from './combine'
/**
 * Create a new, mapped type from `T`.
 *
 * @example
 * ```
 * Simplify<{ a: 1 } & { b: 2 }> // { a: 1, b: 2 }
 * ```
 * ---
 * @remarks
 * If `Combine` cannot infer the result type, try `Simplify` because it uses `infer` before mapping over `T`, which sometimes helps TypeScript unravel deep types.
 * @see {@link Combine | Combine}
 */
export type Simplify<T> = T extends infer U ? { [K in keyof U]: U[K] } : never
