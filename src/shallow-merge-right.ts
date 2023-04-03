import type { Combine } from './combine'

/**
 * Merge two types into a new type. If a key exists in both types, the SECOND type's value will be used.
 */
export type ShallowMergeRight<A, B> = Combine<Omit<A, keyof B> & B>
