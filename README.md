# [stringify-github-short-url][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Generate Github / npm shorthand from list of arguments or object.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i stringify-github-short-url --save
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
const stringifyGithubShortUrl = require('stringify-github-short-url')
```

### [stringifyGithubShortUrl](./index.js#L40)
> Generate github / npm shorthand from list of arguments or object.

- `<owner>` **{String|Object}** user or org string, or object    
- `[name]` **{String}** repo name    
- `[branch]` **{String}** branch name    
- `[npm]` **{String}** pass `true` if you want to generate npm shorthand    
- `returns` **{String}** generated shorthand

**Example**

```js
const gh = require('stringify-github-short-url')

gh('jonschlinkert', 'micromatch')          // => 'jonschlinkert/micromatch'
gh('jonschlinkert', 'micromatch', 'dev')   // => 'jonschlinkert/micromatch#dev'
gh('gulpjs', 'gulp', 'v3.8.1', true)       // => 'gulpjs/gulp@v3.8.1'
gh({
  owner: 'tunnckoCore',
  name: 'parse-function'
}) // => 'tunnckoCore/parse-function'
gh({
  user: 'assemble',
  repo: 'assemble-core'
}) // => 'assemble/assemble-core'
```


## Related
- [apidocs-cli](https://github.com/tunnckocore/apidocs-cli): Command-line app for generating API docs from code comments. Can be used as API of `helper-apidocs` package.
- [gitclone-cli](https://github.com/tunnckocore/gitclone-cli): Git clone github repository with pattern like `user/repo#branch`
- [parse-github-short-url](https://github.com/tunnckocore/parse-github-short-url): Parse a github/npm shorthand (user/repo#branch or user/repo@version) URL into an object.
- [parse-github-url](https://github.com/jonschlinkert/parse-github-url): Parse a github URL into an object.


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/stringify-github-short-url/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/stringify-github-short-url
[npmjs-img]: https://img.shields.io/npm/v/stringify-github-short-url.svg?label=stringify-github-short-url

[license-url]: https://github.com/tunnckoCore/stringify-github-short-url/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/stringify-github-short-url
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/stringify-github-short-url.svg

[travis-url]: https://travis-ci.org/tunnckoCore/stringify-github-short-url
[travis-img]: https://img.shields.io/travis/tunnckoCore/stringify-github-short-url.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/stringify-github-short-url
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/stringify-github-short-url.svg

[david-url]: https://david-dm.org/tunnckoCore/stringify-github-short-url
[david-img]: https://img.shields.io/david/tunnckoCore/stringify-github-short-url.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg