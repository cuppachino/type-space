/**
 * Creates a super union of all keys in a union, unlike `keyof` which only preserves shared members.
 *
 * @example
 * ```
 * declare const foobar: { foo: string, bar: string } | { bar: string }
 * declare const foobars: typeof foobar[]
 *
 * // using keyof we lose the `foo` property because it's not present in all members of the union.
 * type incorrect_a = keyof typeof foobar // "bar"
 * type incorrect_b = keyof typeof foobars[number] // "bar"
 * // Using KeyOf we have a true union of keys from all members.
 * type FooBarKeys_a = KeyOf<typeof foobar> // "bar" | "foo"
 * type FooBarKeys_b = KeyOf<typeof foobars[number]> // "bar" | "foo"
 * ```
 */
export type KeyOf<Union, Otherwise = never> = Union extends Union
	? keyof Union
	: Otherwise
