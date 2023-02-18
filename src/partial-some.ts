import type { Combine } from './combine'

/**
 *
 * Make `K` properties of `T` optional. The remaining keys are left untouched.
 *
 * @param T - The base type to create a partial of.
 * @param K - The keys to make optional.
 * @see {@link Combine | Combine} for how this type simplifies the intersection between `Partial<T>` and `Pick<T, Exclude<keyof T, K>>`
 * @example
 * ```
 * declare const CLIENT_TOKENS: readonly ['appPid', 'appPort', 'remotingAuthToken', 'certificate']
 *
 * declare const credentials: PartialSome<
 *   Record<typeof CLIENT_TOKENS[number], string>,
 *   'certificate'
 * >
 * // {
 * //   appPid: string
 * //   appPort: string
 * //   remotingAuthToken: string
 * //   certificate?: string
 * // }
 *
 * ```
 */
export type PartialSome<T, K extends keyof T> = Combine<
	Partial<T> & Pick<T, Exclude<keyof T, K>>
>
