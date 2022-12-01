export type Split<
  T extends string,
  D extends string = '',
  Acc extends string[] = []
> = T extends `${infer Head}${D}${infer Tail}`
  ? Split<Tail, D, [...Acc, Head]>
  : Acc
