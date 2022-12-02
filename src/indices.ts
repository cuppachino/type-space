/**
Generates a tuple based on the length of the input array and fills each index with the index number.
 
@example
```
type FruitIndices = Indices<['apple', 'banana', 'plum']> // [0, 1, 2]
```
 
Can be used to create an index union (`0 | 1 | 2 | ...`)
@example
```
type FruitIndex = Indices<['apple', 'banana', 'plum']>[number] // 0 | 1 | 2
```
@see {@link IndexOf}
@see Contribution in {@link https://github.com/sindresorhus/type-fest/pull/518 type-fest #518}
 */
export type Indices<T extends unknown[] | readonly unknown[]> = {
	[K in keyof T]: K extends `${infer N extends number}` ? N : never
}
