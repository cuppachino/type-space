import { PickAll } from './pick-all'
/**
 * Extract all keys from every member of a union type.
 * Unlike `keyof`, this includes properties that might not be present in all members of the union type.
 *
 * @see {@link PickAll} to extract properties from a union type.
 * @example
 * Try extracting keys or properties from a discriminated union type:
 * ```ts
 * declare const union: { kind: 0, str: 'str' } | { kind: 1, fn: () => void }
 * type Union = typeof union
 * ```
 * @example
 * Using standard `keyof` and indexed access:
 * ```ts
 * type _UnionKinds = Union['kind']
 * // 0 | 1 // ✅
 *
 * type _UnionValues = Union[keyof Union]
 * // 0 | 1 ❓ missing 'str' and () => void
 *
 * //@ts-expect-error - Property 'fn' and 'str' are not assignable to all members of the union.
 * type _UnionKeys = Union['kind' | 'str' | 'fn']
 * // error ❌
 * ```
 * @example
 * Using `KeyOf<Union>` and `PickAll<Union>`:
 * ```ts
 * type UnionKeys = KeyOf<Union>
 * // 'kind' | 'str' | 'fn' // ✅
 *
 * type UnionProps = PickAll<Union>
 * // { kind: 0 | 1; str: 'str' | undefined; fn: () => void | undefined } // ✅
 *
 * type UnionValues = PickAll<Union>[UnionKeys]
 *  // 0 | 1 | 'str' | () => void | undefined // ✅
 * ```
 */
export type KeyOf<Union, Otherwise = never> = Union extends Union
	? keyof Union
	: Otherwise
