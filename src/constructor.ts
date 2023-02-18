/**
 * Represents the constructor of a class.
 *
 * @example
 * ```ts
 * function create<T, A extends any[]>(Class: Constructor<T, A>, ...args: A): T {
 *   return new Class(...args)
 * }
 *
 * class Package<T extends string> {
 *   constructor(public name: T) {}
 * }
 *
 * const instance = create(Package, '@cuppachino/type-space' as const)
 * console.log(instance.name) // '@cuppachino/type-space'
 * ```
 */
export type Constructor<T, A extends any[] = any[]> = new (...args: A) => T
