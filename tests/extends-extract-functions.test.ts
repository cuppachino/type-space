import type { ExtractFunctions, Simplify, UnknownArray } from '../src'
import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite'

// Year is 2077, and you're a hacker. Many things are wirelessly exploitable.
// We'll use this interface to represent any exploits we find.
interface QuickHacks {
	[k: string]: (...args: UnknownArray) => unknown
}

// all kinds of vehicles are hackable in this world.
interface Vehicle {
	accelerate(): void
	decelerate(): void
	model: string
}
declare class Car implements Vehicle {
	constructor(spec: { model: string })
	accelerate(): void
	decelerate(): void
	model: string
}

// and not all vehicles will have the same exploits.
interface TurboVehicle extends Vehicle {
	boost(): void
	trick(): void
}
declare class TurboCar extends Car implements TurboVehicle {
	constructor(spec: { model: string })
	boost(): void
	trick(): void
}

// we can use ExtractFunctions to extract the methods of a vehicle.
// you can modify the body of the function to bypass any security measures you
// think are in place.
// (in that case, you might use an additional generic to filter, modify, or add to
// the available exploits for a given vehicle.)
declare function hackVehicle<V extends Vehicle>(
	vehicle: V
): Simplify<ExtractFunctions<V>>

// This is an ordinary ATM. It's not hackable with our current tools (hackVehicle).
declare const publicATM: { withdraw(): void }
// but it does have a few exploits...
expectAssignable<QuickHacks>(publicATM)

// Let's hack an ordinary car.
declare const car: InstanceType<typeof Car>
declare const carQuickHacks: ReturnType<typeof hackVehicle<typeof car>>
type CarQuickHacks = ExtractFunctions<typeof car>

expectType<CarQuickHacks>(carQuickHacks)
expectType<{
	accelerate: () => void
	decelerate: () => void
}>(carQuickHacks)
expectAssignable<QuickHacks>(carQuickHacks)
expectNotAssignable<CarQuickHacks>(publicATM)

// Now let's hack a turbo car.
declare const turbo: InstanceType<typeof TurboCar>
declare const turboQuickHacks: ReturnType<typeof hackVehicle<typeof turbo>>
type TurboQuickHacks = ExtractFunctions<typeof turbo>

expectType<TurboQuickHacks>(turboQuickHacks)
expectType<{
	accelerate: () => void
	decelerate: () => void
	boost: () => void
	trick: () => void
}>(turboQuickHacks)

// happy hacking! :)
