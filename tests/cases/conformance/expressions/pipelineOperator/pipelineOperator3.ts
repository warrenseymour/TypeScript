// @target: es2015

declare const xs: number[];
declare function map<T, U>(fn: (item: T) => U): (arr: T[]) => U[];
declare function filter<T>(fn: (item: T) => boolean): (arr: T[]) => T[];

const result = xs
    |> map(x => x.toString())
    |> filter(x => x === '1')