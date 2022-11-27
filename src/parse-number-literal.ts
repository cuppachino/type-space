import type { NumberLiteral } from "@/main";

/** Coerces a `NumberLiteral` type to a `number`
 * @see {@link NumberLiteral}
 */
export type ParseNumberLiteral<N> = N extends `${infer I extends number}`
  ? I
  : never;
