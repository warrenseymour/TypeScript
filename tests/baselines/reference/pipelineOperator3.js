//// [pipelineOperator3.ts]
declare const xs: number[];
declare function map<T, U>(fn: (item: T) => U): (arr: T[]) => U[];
declare function filter<T>(fn: (item: T) => boolean): (arr: T[]) => T[];

const result = xs
    |> map(x => x.toString())
    |> filter(x => x === '1')

//// [pipelineOperator3.js]
var _a;
const result = (_a = xs, _a = map(x => x.toString())(_a), filter(x => x === '1')(_a));
