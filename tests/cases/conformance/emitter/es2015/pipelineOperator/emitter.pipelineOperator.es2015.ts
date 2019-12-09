// @target: es2015

declare const xs: number[];
declare function map<T, U>(arr: T[], fn: (item: T) => U): U[];
declare function identity<T>(value: T): T;

const x = xs |> (_ => map(_, x => x + 1));
const y = xs |> identity;
