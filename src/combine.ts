import type { Simplify } from './simplify'
/**
 * Intersects a type with an empty object. This is useful for simplifying/expanding a type or interface.
 *
 * @remarks
 * In some cases, such as when `T` is particularly close to the depth limit, `Combine` may not be able to infer the type. In these cases, use `Simplify` instead.
 * @see {@link Simplify | Simplify}
 * @example
 * ```ts
 * Combine<{ a: 1 } & { b: 2 }> // { a: 1, b: 2 }
 * ```
 * ---
 */
export type Combine<T> = {} & { [K in keyof T]: T[K] }
