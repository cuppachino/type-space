/**
 * Shorthand `extends` check.
 */
export type Assert<T, U> = T extends U ? T : never
