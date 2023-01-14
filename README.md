<h1 align="center">Type Space</h1>

<p align="center">
  <p>
  Welcome to Type Space, a suite of utility types for enhancing your TypeScript code. With
  <code>@cuppachino/type-space</code>, you can perform a wide range of type operations,
  including numeric calculations, string manipulation, tuple operations, and more.
  </p>
  <div align="center">
    <a href="https://github.com/Cuppachino/type-space/issues">Report Problem</a>
    🌘🧑‍🚀
    <a href="https://github.com/Cuppachino/type-space/pulls">Contribute</a>
  </div>
</p>

## 📦 Installation

Use your favorite package manager to install `@cuppachino/type-space` as a developer dependency.

[@cuppachino/type-space](https://www.npmjs.com/package/@cuppachino/type-space)

```ps
pnpm add -D @cuppachino/type-space
```

```ps
npm install --save-dev @cuppachino/type-space
```

# 🔎 Quick Reference

The source code is commented with descriptions and examples to help you
understand how each utility functions; however, it is assumed that you carry
some knowledge of TypeScript, and the explanations provided are meant to
supplement that knowledge, not provide a comprehensive introduction to the
language.

## 🍎 Base Types

- [`NumberLiteral`](src/number-literal.ts): A stringified number literal.
- [`UnknownArray`](src/unknown-array.ts): An alias for `unknown[] | readonly unknown[]`,
  safer than `any`.
- [`UnknownRecord`](src/unknown-record.ts): An alias for `Record<PropertyKey, unknown>`,
  safer than `any` or `{}`.

## 🧮 Arithmetic Types

- [`Absolute`](src/math/absolute.ts): Coerces a number literal to a positive `number` of the same magnitude.
- [`Add`](src/math/add.ts): Returns the sum of two number literals.
- [`Subtract`](src/math/subtract.ts): Returns the difference between two number literals.

## 🔢 Numeric Types

- [`IsInteger`](src/math/is-integer.ts): A boolean type that is true if a number literal is an integer.
- [`IsPositive`](src/math/is-positive.ts): A boolean type that is true if a number literal is positive.
- [`IsNegative`](src/math/is-negative.ts): A boolean type that is true if a number literal is negative.
- [`IsWhole`](src/math/is-whole.ts): A boolean type that is true if a number literal is a whole number.
- [`ParseNumberLiteral`](src/parse-number-literal.ts): Coerces a `NumberLiteral` type to a `number`

## 💭 String Types

- [`Split`](src/split.ts): Splits a string literal into a tuple of characters, separated by the given delimiter.
- [`Stringify`](src/stringify.ts): Converts a type to a string literal type, if possible.

## 📜 Tuple Types

- [`CreateTuple`](src/create-tuple.ts): Generates a fixed-length tuple.
- [`Flat`](src/flat.ts): Recursively flatten a tuple up to a given depth.
- [`IndexOf`](src/index-of.ts): Returns a union of a tuple's indices.
- [`Indices`](src/indices.ts): Generates a tuple of a tuple's indices.
- [`Join`](src/join.ts): Joins a tuple of strings into a single string, separated by a delimiter.
- [`Length`](src/length.ts): Extracts the length property from an array or
  tuple.
- [`MergeAll`](src/merge-all.ts): Merge all type members of a tuple into a
  single type.
- [`PartitionKeys`](src/partition-keys.ts): Extract a union of keys for each member in a tuple into a new tuple; order is preserved.
- [`PartitionValues`](src/partition-values.ts): Create a tuple of value(s) for the given key(s) in each member of a tuple; order is preserved.
- [`PartitionPick`](src/partition-pick.ts): Maps picked properties from each member of a tuple into a new tuple; order is preserved.

## 🧰 Utility Types

- [`Combine`](src/combine.ts): Simplifies a type by mapping over its properties.
- [`KeyOf`](src/key-of.ts): Extracts all keys from every member of a union type, unlike `keyof` which only preserves shared members' keys.
- [`Mutable`](src/mutable.ts): Recursively removes the `readonly` modifier from all properties of a type.
- [`PartialSome`](src/partial-some.ts): Returns a new type that allows the specified keys to be undefined.
- [`PickAll`](src/pick-all.ts): Extract properties from *all* members in a union, missing properties default to `| undefined`.
- [`Simplify`](src/simplify.ts): Simplifies a type by mapping over its inferred properties - use when `Combine` cannot infer a deep type.
- [`UnionLiteral`](src/union-literal.ts): Create a union from a literal and primitive type without losing the literal type.
- [`UnionToIntersection`](src/union-to-intersection.ts): Create an intersection from all members of a union type.

### Extract

- [`ExtractFunctions`](src/extract/extract-functions.ts): Creates a new type of
  all property functions and methods in a type.
- [`ExtractSetMembers`](src/extract/extract-set-members.ts): Creates a union
  type of members in a `Set`.

### Extends

All `Extends\<Type>` have two type parameters: `<T, R = T>`.

> - `T` is the type to check.
> - `R` is the type returned when `T` extends the name of the generic.

- [`ExtendsFunction`](src/extends/extends-function.ts): Returns a type if the
  given type extends a function or method.

---

I hope you have fun with these utilities. Thank you for using `type-space`!
