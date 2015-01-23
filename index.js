/**
 * stringify-github-short-url <https://github.com/tunnckoCore/stringify-github-short-url>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var fmt = require('util').format;
var _NAME = 'stringify-github-short-url:';

/**
 * Stringify github short url object
 *
 * **Example:**
 *
 * ```js
 * var stringifyGithubShortUrl = require('stringify-github-short-url');
 * stringifyGithubShortUrl({
 *   user: 'tunnckoCore',
 *   username: 'tunnckoCore',
 *   org: 'tunnckoCore',
 *   organization: 'tunnckoCore',
 *   repo: 'glob2fp',
 *   repository: 'glob2fp',
 *   branch: 'master'
 * });
 * //=> 'tunnckoCore/glob2fp#master'
 *
 * stringifyGithubShortUrl({
 *   user: 'jonschlinkert',
 *   username: 'jonschlinkert',
 *   org: 'jonschlinkert',
 *   organization: 'jonschlinkert',
 *   repo: 'template',
 *   repository: 'template',
 *   branch: 'feature'
 * });
 * //=> 'jonschlinkert/template#feature'
 *
 * stringifyGithubShortUrl({
 *   user: 'visionmedia',
 *   username: 'visionmedia',
 *   org: 'visionmedia',
 *   organization: 'visionmedia',
 *   repo: 'mocha',
 *   repository: 'mocha',
 *   branch: ''
 * });
 * //=> 'visionmedia/mocha'
 * ```
 *
 * @name stringifyGithubShortUrl
 * @param  {Object} `<obj>` object to stringify
 * @return {String}
 * @api public
 */
module.exports = function stringifyGithubShortUrl(obj) {
  if (!obj) {
    throw new Error('%s should have at least 1 arguments', _NAME);
  }

  if (typeOf(obj) !== 'object') {
    throw new TypeError('%s expect `obj` be object', _NAME);
  }

  if (!obj.user) {
    return '';
  }

  if (obj.branch) {
    return fmt('%s/%s#%s', obj.user, obj.repo, obj.branch);
  }

  return fmt('%s/%s', obj.user, obj.repo);
};

/**
 * Get correct type of value
 *
 * @param  {*} `val`
 * @return {String}
 * @api private
 */
function typeOf(val) {
  if (typeof val !== 'object') {
    return typeof val;
  }

  if (Array.isArray(val)) {
    return 'array';
  }

  return {}.toString(val).slice(8, -1).toLowerCase();
}
