import type { Combine } from './combine'

/**
 * A Subset `⊆` is Union between a "Pick" and indexed access.
 *
 * @example Be careful when `K` is a union of keys.
 * ```ts
 * type Person = { name?: string, age: number, address: { street: string, city: string } }
 *
 * declare const arg: Subset<Person, 'name' | 'address'>
 * declare const expect:
 * | string
 * | { street: string; city: string; }
 * | { name?: string | undefined; address: { street: string; city: string; }; }
 * | undefined
 *
 * ```
 */
export type Subset<T, K extends keyof T> = T[K] | Combine<Pick<T, K>>
