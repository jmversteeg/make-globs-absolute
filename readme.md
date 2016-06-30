# make-globs-absolute [![Build Status](https://travis-ci.org/jmversteeg/make-globs-absolute.svg?branch=master)](https://travis-ci.org/jmversteeg/make-globs-absolute)

> Map an array of globs to their absolute path equivalent


## Install

```
$ npm install --save make-globs-absolute
```


## Usage

```js
var makeGlobsAbsolute = require('make-globs-absolute');

makeGlobsAbsolute(['foo']);
//=> ['/Users/jmversteeg/foo']

makeGlobsAbsolute(['!foo']);
//=> ['!/Users/jmversteeg/foo']

makeGlobsAbsolute(['foo', '!foo/bar'], '/bar');
//=> ['bar/foo', '!bar/foo/bar']
```


## API

### makeGlobsAbsolute(input, wd)

#### input

Type: `string[]`

Array of globs.

#### wd 

Type: `string`

Optional (default: `process.cwd()`)

Working directory

## License

MIT © [JM Versteeg](https://github.com/jmversteeg)
