import type { NumberLiteral } from "@/main";

/**
 * Asserts a number is positive
 * @example Absolute<-1> // 1
 * @example Absolute<'1'> // 1
 * @see {@link NumberLiteral}
 */
export type Absolute<N extends number | NumberLiteral> =
  `${N}` extends `-${number}`
    ? `${N}` extends `-${infer R extends number | `${number}`}`
      ? R
      : never
    : N;
