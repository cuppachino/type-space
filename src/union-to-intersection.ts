/**
 * This utility is easily comparable to function overloading in TypeScript.
 *
 * ```ts
 * // helper for overloading with generics. Not robust enough for overloads that change the return type.
 * type CreateOverload<Union, Returns = void> = UnionToIntersection<
 *   Union extends unknown ? (u: Union) => Returns : never
 * >
 *
 * type BarProps = { kind: 0; enabled: boolean } | { kind: 1; fn: () => void }
 * type Bar = CreateOverload<BarProps>
 *
 * const bar: Bar = (u) => {
 * 	if (u.kind === 0) {
 * 		u.enabled
 * 	} else {
 * 		u.fn()
 * 	}
 * }
 * //
 * // ((u: {
 * //     kind: 0;
 * //     enabled: boolean;
 * // }) => void) & ((u: {
 * //     kind: 1;
 * //     fn: () => void;
 * // }) => void)
 * ```
 *
 * @example
 * `arg` is narrowed as ts checks the function sequentially from top to bottom, stopping at the first match.
 * ```ts
 * function foo(arg: number): number
 * function foo(arg: string): string
 * function foo(arg: string | number): string {
 *   return arg
 * }
 * ```
 * `foo` can be represented using an interface:
 * ```ts
 * interface Foo {
 *   (arg: number): number
 *   (arg: string): string
 *   (arg: string | number): string
 * }
 * ```
 * ```ts
 * declare function Some<T>(): T
 * declare const foo: Foo
 *
 * //@ts-expect-error - `arg` in `foo` must be a string or number
 * foo(Some<boolean>()) // 🚨✅
 * foo(Some<40>()) // (arg: number) => number (+2 overloads) // ✅
 * foo(Some()) // (arg: number) => number (+2 overloads) // ✅
 * foo(Some<number>()) // (arg: number) => number // ✅
 * foo(Some<string>()) // (arg: string) => string (+2 overloads) // ✅
 * foo(Some<string | number>()) // (arg: string | number) => string (+2 overloads) // ✅
 * ```
 * you could overload arrow functions like this as well, but you need a type parameter to do it:
 * ```ts
 * const foo = <T>(arg: T) => arg // const foo: Foo ✅
 * ```
 */
export type UnionToIntersection<Union> = (
	Union extends unknown ? (u: Union) => void : never
) extends (u: infer Intersection) => void
	? Intersection
	: never
