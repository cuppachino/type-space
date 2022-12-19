import type { ExtractFunctions } from '../src'
import { expectType } from 'tsd-lite'

declare abstract class Astronaut {
	static destination: string
	static setDestination(newDestination: string): void

	constructor()

	abstract research(): void
}

declare const instanceMethods: ExtractFunctions<Astronaut>
expectType<{
	research: () => void
}>(instanceMethods)

declare const staticMethods: ExtractFunctions<typeof Astronaut>
expectType<{
	setDestination: (newDestination: string) => void
}>(staticMethods)
