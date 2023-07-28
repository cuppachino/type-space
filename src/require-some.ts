import type { Combine } from './combine'

/**
 * Returns a new type where some properties `K` of `T` are required.
 * The rest are left as-is.
 *
 * @example
 * ```
 * type Data = {
 * a?: string;
 * b?: string;
 * };
 * type Ex = RequireSome<Test, "a">;
 * ```
 */
export type RequireSome<T, K extends keyof T> = Combine<
	{
		[P in keyof T as Extract<P, K>]-?: T[P]
	} & {
		[P in keyof T as Exclude<P, K>]: T[P]
	}
>
