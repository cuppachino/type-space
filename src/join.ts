/**
 Joins an array of strings into a single string, separated by a delimiter.
 
 @example Join<['apple', 'banana', 'plum'], ' & '> // 'apple & banana & plum'
 @example Join<['a', 'b', 'c']> // 'abc'
 */
export type Join<
	T extends string[],
	D extends string = '',
	Acc extends string = ''
> = T extends [infer Head extends string, ...infer Tail extends string[]]
	? Join<Tail, D, `${Acc}${Head}${Tail extends [] ? '' : D}`>
	: Acc
