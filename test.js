/*!
 * stringify-github-short-url <https://github.com/tunnckoCore/stringify-github-short-url>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var gh = require('./index')

test('should generate shorthand from arguments list', function (done) {
  test.strictEqual(gh('assemble'), 'assemble')
  test.strictEqual(gh('assemble', 'verb'), 'assemble/verb')
  test.strictEqual(gh('assemble', 'verb', 'dev'), 'assemble/verb#dev')
  test.strictEqual(gh('assemble', 'verb', 'v2.7.4', true), 'assemble/verb@v2.7.4')
  done()
})

test('should generate shorthand from object', function (done) {
  test.strictEqual(gh({owner: 'assemble'}), 'assemble')
  test.strictEqual(gh({user: 'assemble'}), 'assemble')
  test.strictEqual(gh({owner: 'assemble', name: 'verb'}), 'assemble/verb')
  test.strictEqual(gh({user: 'assemble', repo: 'verb'}), 'assemble/verb')
  test.strictEqual(gh({owner: 'assemble', name: 'verb', branch: 'dev'}), 'assemble/verb#dev')
  test.strictEqual(gh({owner: 'assemble', name: 'verb', branch: 'v2.7.4', npm: true}), 'assemble/verb@v2.7.4')
  done()
})

test('should throw TypeError if first argument not a string', function (done) {
  function fixture () {
    gh(123)
  }

  test.throws(fixture, TypeError)
  test.throws(fixture, /stringify-github-short-url: expects `owner` to be a string/)
  done()
})

test('should throw TypeError if `owner` prop not a string', function (done) {
  function fixture () {
    gh({owner: 123})
  }

  test.throws(fixture, TypeError)
  test.throws(fixture, /expects `owner` to be a string/)
  done()
})
