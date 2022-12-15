# type-space

TypeScript type utilities for typing better TypeScript types.

## Installation

```ps
pnpm add -D @cuppachino/type-space
```

```ps
npm install --save-dev @cuppachino/type-space
```

## Quick Reference

### Base Types

- [`NumberLiteral`]: A stringified number literal.

### Arithmetic Types

- [`Absolute`]: Coerces a number or `NumberLiteral` to a positive number of the same magnitude.

- [`Add`]: Returns the sum of two number literals
- [`Subtract`]: Returns the difference between two number literals

### Tuple Types

- [`CreateTuple`]: Generates a fixed-length tuple.
- [`IndexOf`]: Returns a union of a tuple's indices.
- [`Indices`]: Generates a tuple of a tuple's indices.
- [`Join`]: Joins a tuple of strings into a single string, separated by a delimiter.
