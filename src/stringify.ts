import type { Stringifiable } from './stringifiable'

/**
 * Converts a type to a template literal type, if possible.
 *
 * @example
 * ```
 * Stringify<1 | 2> // '1' | '2'
 * ```
 */
export type Stringify<T> = T extends Stringifiable ? `${T}` : never
