// @target: es2015

declare const xs: number[];
declare function map<T, U>(arr: T[], fn: (item: T) => U): U[];
declare function filter<T>(arr: T[], fn: (item: T) => boolean): T[];

const x = xs
  |> (_ => map(_, x => x + 1))
  |> (_ => filter(_, x => x > 2));