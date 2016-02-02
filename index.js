/*!
 * stringify-github-short-url <https://github.com/tunnckoCore/stringify-github-short-url>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

/**
 * Generate github / npm shorthand from list
 * of arguments or object.
 *
 * **Example**
 *
 * ```js
 * const gh = require('stringify-github-short-url')
 *
 * gh('jonschlinkert', 'micromatch')          // => 'jonschlinkert/micromatch'
 * gh('jonschlinkert', 'micromatch', 'dev')   // => 'jonschlinkert/micromatch#dev'
 * gh('gulpjs', 'gulp', 'v3.8.1', true)       // => 'gulpjs/gulp@v3.8.1'
 * gh({
 *   owner: 'tunnckoCore',
 *   name: 'parse-function'
 * }) // => 'tunnckoCore/parse-function'
 * gh({
 *   user: 'assemble',
 *   repo: 'assemble-core'
 * }) // => 'assemble/assemble-core'
 * ```
 *
 * @name  stringifyGithubShortUrl
 * @param  {String|Object} `<owner>` user or org string, or object
 * @param  {String} `[name]` repo name
 * @param  {String} `[branch]` branch name
 * @param  {String} `[npm]` pass `true` if you want to generate npm shorthand
 * @return {String} generated shorthand
 * @api public
 */
module.exports = function stringifyGithubShortUrl (owner, name, branch, npm) {
  if (owner && typeof owner === 'object') {
    var params = owner
    owner = params.owner || params.user
    name = params.name || params.repo
    branch = params.branch
    npm = params.npm
  }

  if (typeof owner !== 'string') {
    throw new TypeError('stringify-github-short-url: expects `owner` to be a string')
  }
  if (typeof name !== 'string') {
    return owner
  }

  var url = owner + '/' + name
  if (typeof branch === 'string' && branch.length) {
    return url + (npm === true ? '@' : '#') + branch
  }
  return url
}
