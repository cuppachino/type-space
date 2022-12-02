export type Join<
  T extends string[],
  D extends string = '',
  Acc extends string = ''
> = T extends [infer Head extends string, ...infer Tail extends string[]]
  ? Join<Tail, D, `${Acc}${Head}${Tail extends [] ? '' : D}`>
  : Acc
