/**
 * Converts a type to a template literal type, if possible.
 *
 * @example
 * ```
 * Stringify<1 | 2> // '1' | '2'
 * ```
 */
export type Stringify<T> = T extends
	| string
	| number
	| bigint
	| boolean
	| null
	| undefined
	? `${T}`
	: never
