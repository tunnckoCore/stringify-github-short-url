/**
 * stringify-github-short-url <https://github.com/tunnckoCore/stringify-github-short-url>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var stringify = require('./index');

describe('stringify-github-short-url:', function() {
  describe('should throw', function() {
    it('Error when no arguments', function(done) {
      assert.throws(stringify, Error);
      done()
    });

    it('TypeError when first argument not Object given', function(done) {
      function fixture() {
        stringify('some string')
      }
      assert.throws(fixture, TypeError);
      done();
    });

    it('TypeError when Array given', function(done) {
      function fixture() {
        stringify(['some string'])
      }
      assert.throws(fixture, TypeError);
      done();
    });
  });

  describe('should return empty string', function(done) {
    it('when object not contain `user` property', function(done) {
      var actual = stringify({
        user: '',
        username: '',
        org: '',
        organization: '',
        repo: '',
        repository: '',
        branch: ''
      });
      var expected = '';

      assert.strictEqual(typeof actual, typeof expected);
      assert.strictEqual(actual, expected);
      done();
    });

    it('when empty object given', function(done) {
      var actual = stringify({});
      var expected = '';

      assert.strictEqual(typeof actual, typeof expected);
      assert.strictEqual(actual, expected);
      done();
    });
  });

  describe('should return', function() {
    it('string for given `user`, `repo` and `branch`', function(done) {
      var actual = stringify({
        user: 'tunnckoCore',
        username: 'tunnckoCore',
        org: 'tunnckoCore',
        organization: 'tunnckoCore',
        repo: 'glob2fp',
        repository: 'glob2fp',
        branch: 'feature'
      });
      var expected = 'tunnckoCore/glob2fp#feature';

      assert.strictEqual(actual, expected);
      done();
    });

    it('string for given `user` and `repo` properties only', function(done) {
      var actual = stringify({
        user: 'jonschlinkert',
        username: 'jonschlinkert',
        org: 'jonschlinkert',
        organization: 'jonschlinkert',
        repo: 'kind-of',
        repository: 'kind-of',
        branch: ''
      });
      var expected = 'jonschlinkert/kind-of';

      assert.strictEqual(actual, expected);
      done();
    });
  });
});
