//// [emitter.pipelineOperator.es5.ts]
declare const xs: number[];
declare function map<T, U>(arr: T[], fn: (item: T) => U): U[];
declare function identity<T>(value: T): T;

const x = xs |> (_ => map(_, x => x + 1));
const y = xs |> identity;


//// [emitter.pipelineOperator.es5.js]
var _a, _b;
var x = (_a = xs, (function (_) { return map(_, function (x) { return x + 1; }); })(_a));
var y = (_b = xs, identity(_b));
