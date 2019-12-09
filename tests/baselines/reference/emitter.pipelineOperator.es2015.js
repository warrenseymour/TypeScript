//// [emitter.pipelineOperator.es2015.ts]
declare const xs: number[];
declare function map<T, U>(arr: T[], fn: (item: T) => U): U[];
declare function identity<T>(value: T): T;

const x = xs |> (_ => map(_, x => x + 1));
const y = xs |> identity;


//// [emitter.pipelineOperator.es2015.js]
var _a, _b;
const x = (_a = xs, (_ => map(_, x => x + 1))(_a));
const y = (_b = xs, identity(_b));
