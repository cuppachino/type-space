import type { KeyOf } from './key-of'
import type { UnionToIntersection } from './union-to-intersection'

/**
 * Extract all properties from every member in a union type.
 * Akin to `Pick`, properties are selected by key, akin to `Extract`, the entire property is extracted `{key: value}`.
 * If a property doesn't exist in all members of `Union`, it will be extracted a union between the property type and `Otherwise`.
 *
 * @param Union - A discriminated union type to extract properties from.
 * @param Keys - The specific properties to extract from `Union`.
 * @defaultValue all `KeyOf<Union>`
 * @param Otherwise - The type to unionize with value types that don't exist in all members of `Union`.
 * @defaultValue `undefined`
 * @example
 * Try extracting properties from a discriminated union type:
 * ```ts
 * declare const union: { kind: 0, str: 'str' } | { kind: 1, fn: () => void }
 * type Union = typeof union
 * ```
 * @example
 * Using `KeyOf<Union>` and `PickAll<Union>`:
 * ```ts
 * type PossibleUnionKeys = KeyOf<Union>
 * // 'kind' | 'str' | 'fn' // ✅
 *
 * type PossibleUnionProps = PickAll<Union>
 * // {
 * //    kind: 0 | 1;
 * //    str: 'str' | undefined;
 * //    fn: () => void | undefined
 * // }
 * // ✅
 *
 * type PossibleUnionValues = PickAll<Union>[UnionKeys]
 * // 0 | 1 | 'str' | () => void | undefined // ✅
 * ```
 *  @example
 * #### Compare against standard indexed access with `keyof`:
 * ```ts
 * type _UnionKeys keyof Union
 * // 'kind' // ❓ missing 'str' and 'fn'
 *
 * type _UnionValues Union[keyof Union]
 * // 0 | 1 // ❓ missing 'str' and () => void
 * ```
 */
export type PickAll<
	Union,
	Keys extends KeyOf<Union> = KeyOf<Union>,
	Otherwise = undefined
> = {
	[_K in Keys]: Union extends { [K in _K]: infer Value }
		? UnionToIntersection<Value>
		: Otherwise
}
