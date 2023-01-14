/**
 * Create a union between `T` and `Union` without losing the literal type of `T`.
 * A common use case is when you need a function that accepts a known string literal or any string.
 * Using `UnionLiteral` would preserve `T` and enable intellisense for the argument.
 *
 * @example
 * ```
 * declare function fn(arg: UnionLiteral<'a' | 'b' | 'c' | 4>): void
 * // valid
 * fn('a')
 * fn('b')
 * fn('c')
 * fn(4)
 * // invalid
 * //@ts-expect-error - "d" is not a valid argument
 * fn('d') // Error
 * //@ts-expect-error - '{}' is not a valid argument
 * fn({}) // Error
 * ```
 */
export type UnionLiteral<T, Union = string> = T | (Union & { _?: never })
