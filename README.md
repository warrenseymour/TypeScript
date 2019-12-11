# wms' TypeScript Fork

[![Watch the video](https://img.youtube.com/vi/ofy13sWr23I/maxresdefault.jpg)](https://youtu.be/ofy13sWr23I)

## What's this all about then?

This fork contains supports for highly desirable features that will not land in the mainline edition of TypeScript until they progress through the TC39 approval process. This fork currently supports the following language features:

- [The Pipeline Operator](#pipeline-operator)

## Usage

| Fork Version                      | Based on TypeScript Version | Fork-specific Features/Notes                               |
|-----------------------------------|-----------------------------|------------------------------------------------------------|
| `wms/typescript#v3.7.3-wms+1.0.0` | `v3.7.3`                    | Initial release: Introduced Pipeline Operator              |

Making use of this fork within your own project should be relatively straightforward. In most cases, you should be able to just replace the version of the `typescript` dependency in `package.json` with a version specified in the table above.

For example, if you're currently using `"typescript": "3.7.3"`, you can switch to `"typescript": "wms/typescript#v3.7.3-wms+1.0.0"`.

Well-behaved tools *should* use whatever version of TypeScript is installed at `{yourProject}/node_modules/typescript`. If you encounter a specific tool that is not working, please raise an issue so that I can document it.

## Version Summary

## Additional Language Features

### Pipeline Operator

TC39 Proposal: https://github.com/tc39/proposal-pipeline-operator

Original credit: https://github.com/rbuckton

Based on the `pipelineStage1` branch by `rbuckton`, I've updated this logic (to the best of my ability) to target the latest version of TypeScript.

Some examples/caveats:

```typescript
const double = (n: number) => n * 2;
const inc = (n: number) => n + 1;

const twentyTwo = 10
  |> inc
  |> double;
// twentyTwo: number
```

Arrow functions within a pipeline have to be explicitly wrapped in parentheses:

```typescript
const twentyTwoBang = 10
  |> (x => x + 1)        // x: number
  |> (x => x * 2)        // x: number
  |> (x => x.toString()) // x: number
  |> (x => x + '!')      // x: string

// twentyTwoBang: string
```

I did some monkeying around with the contexual typing that gets applied to the RHS of a pipeline expression, meaning it's possible for Curried functions within a pipeline to get their arguments inferred (!):

```typescript
declare function map<T, U>(fn: (item: T) => U): (arr: T[]) => U[];
declare function filter<T>(fn: (item: T) => boolean): (arr: T[]) => T[];

const numbers = [4, 8, 15, 16, 23, 42]
  |> filter(x => x > 10)    // x: number
  |> map(x => x.toString()) // x: number

// numbers: string[]
```

---

The rest of this document is the unmodified, official TypeScript readme.

# TypeScript

[![Build Status](https://travis-ci.org/microsoft/TypeScript.svg?branch=master)](https://travis-ci.org/microsoft/TypeScript)
[![VSTS Build Status](https://dev.azure.com/typescript/TypeScript/_apis/build/status/Typescript/node10)](https://dev.azure.com/typescript/TypeScript/_build/latest?definitionId=4&view=logs)
[![npm version](https://badge.fury.io/js/typescript.svg)](https://www.npmjs.com/package/typescript)
[![Downloads](https://img.shields.io/npm/dm/typescript.svg)](https://www.npmjs.com/package/typescript)

[TypeScript](https://www.typescriptlang.org/) is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript. Try it out at the [playground](https://www.typescriptlang.org/play/), and stay up to date via [our blog](https://blogs.msdn.microsoft.com/typescript) and [Twitter account](https://twitter.com/typescript).

Find others who are using TypeScript at [our community page](https://www.typescriptlang.org/community/).

## Installing

For the latest stable version:

```bash
npm install -g typescript
```

For our nightly builds:

```bash
npm install -g typescript@next
```

## Contribute

There are many ways to [contribute](https://github.com/microsoft/TypeScript/blob/master/CONTRIBUTING.md) to TypeScript.
* [Submit bugs](https://github.com/microsoft/TypeScript/issues) and help us verify fixes as they are checked in.
* Review the [source code changes](https://github.com/microsoft/TypeScript/pulls).
* Engage with other TypeScript users and developers on [StackOverflow](https://stackoverflow.com/questions/tagged/typescript).
* Help each other in the [TypeScript Community Discord](https://discord.gg/typescript).
* Join the [#typescript](https://twitter.com/search?q=%23TypeScript) discussion on Twitter.
* [Contribute bug fixes](https://github.com/microsoft/TypeScript/blob/master/CONTRIBUTING.md).
* Read the language specification ([docx](https://github.com/microsoft/TypeScript/blob/master/doc/TypeScript%20Language%20Specification.docx?raw=true),
 [pdf](https://github.com/microsoft/TypeScript/blob/master/doc/TypeScript%20Language%20Specification.pdf?raw=true), [md](https://github.com/microsoft/TypeScript/blob/master/doc/spec.md)).

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see
the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com)
with any additional questions or comments.

## Documentation

*  [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
*  [Programming handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html)
*  [Language specification](https://github.com/microsoft/TypeScript/blob/master/doc/spec.md)
*  [Homepage](https://www.typescriptlang.org/)

## Building

In order to build the TypeScript compiler, ensure that you have [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/) installed.

Clone a copy of the repo:

```bash
git clone https://github.com/microsoft/TypeScript.git
```

Change to the TypeScript directory:

```bash
cd TypeScript
```

Install [Gulp](https://gulpjs.com/) tools and dev dependencies:

```bash
npm install -g gulp
npm install
```

Use one of the following to build and test:

```
gulp local             # Build the compiler into built/local.
gulp clean             # Delete the built compiler.
gulp LKG               # Replace the last known good with the built one.
                       # Bootstrapping step to be executed when the built compiler reaches a stable state.
gulp tests             # Build the test infrastructure using the built compiler.
gulp runtests          # Run tests using the built compiler and test infrastructure.
                       # Some low-value tests are skipped when not on a CI machine - you can use the
                       # --skipPercent=0 command to override this behavior and run all tests locally.
                       # You can override the specific suite runner used or specify a test for this command.
                       # Use --tests=<testPath> for a specific test and/or --runner=<runnerName> for a specific suite.
                       # Valid runners include conformance, compiler, fourslash, project, user, and docker
                       # The user and docker runners are extended test suite runners - the user runner
                       # works on disk in the tests/cases/user directory, while the docker runner works in containers.
                       # You'll need to have the docker executable in your system path for the docker runner to work.
gulp runtests-parallel # Like runtests, but split across multiple threads. Uses a number of threads equal to the system
                       # core count by default. Use --workers=<number> to adjust this.
gulp baseline-accept   # This replaces the baseline test results with the results obtained from gulp runtests.
gulp lint              # Runs eslint on the TypeScript source.
gulp help              # List the above commands.
```


## Usage

```bash
node built/local/tsc.js hello.ts
```


## Roadmap

For details on our planned features and future direction please refer to our [roadmap](https://github.com/microsoft/TypeScript/wiki/Roadmap).
