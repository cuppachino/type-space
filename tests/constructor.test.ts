import { expectNotAssignable, expectType } from 'tsd-lite'
import type { Constructor } from '../src/constructor'

class Package<T extends string> {
	constructor(public name: T) {}
}

function create<T, A extends any[]>(Class: Constructor<T, A>, ...args: A): T {
	return new Class(...args)
}

const lit = create(Package, '@cuppachino/type-space' as const)
expectType<'@cuppachino/type-space'>(lit.name)

const mut = create(Package, '@cuppachino/type-space')
expectType<string>(mut.name)
expectNotAssignable<Package<'@cuppachino/type-space'>>(mut)
expectNotAssignable<Package<'@cuppachino/type-space'>['name']>(mut['name'])
