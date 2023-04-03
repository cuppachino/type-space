import { expectAssignable, expectType } from 'tsd-lite'
import type { MergeAllRight } from '../src/merge-all-right'

const merge = <const T extends readonly Record<string, any>[]>(items: T) =>
	items.reduce((acc, level) => {
		return {
			...acc,
			...level
		}
	}, {} as Record<string, unknown>) as MergeAllRight<T>

const levels = [
	{ error: ['red', 'bold'] },
	{ warn: 'yellow' },
	{ info: 'green' }
] as const

const config = merge(levels)

expectAssignable<{
	error: readonly ['red', 'bold']
	warn: 'yellow'
	info: 'green'
}>(config)

expectType<{
	error: readonly ['red', 'bold']
	warn: 'yellow'
	info: 'green'
}>(config)

const keys = ['a', 'b', 'c'] as const
const vals = [1, 2, 3] as const
const obj = {
	[keys[0]]: vals[0],
	[keys[1]]: vals[1],
	[keys[2]]: vals[2]
}
expectAssignable<{
	a: 1
	b: 2
	c: 3
}>(obj)

expectAssignable<{
	a: 1
	b: 2
}>(merge([{ a: 1 }, { b: 2 }]))

expectAssignable<{
	a: 1
	b: 2
	c: 3
}>(merge([{ a: 1 }, { b: 2 }, { c: 3 }]))
