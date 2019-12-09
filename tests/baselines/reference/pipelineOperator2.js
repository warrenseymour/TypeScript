//// [pipelineOperator2.ts]
declare const xs: number[];
declare function map<T, U>(fn: (item: T) => U): (arr: T[]) => U[];
declare function filter<T>(fn: (item: T) => boolean): (arr: T[]) => T[];

const x = xs
    |> map((x: number) => x + 1)
    |> filter((x: number) => x > 1)

//// [pipelineOperator2.js]
var _a;
const x = (_a = xs, _a = map((x) => x + 1)(_a), filter((x) => x > 1)(_a));
