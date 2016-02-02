/*!
 * stringify-github-short-url <https://github.com/tunnckoCore/stringify-github-short-url>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

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
