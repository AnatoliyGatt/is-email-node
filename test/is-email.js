var assert = require('assert');
var isEmail = require('../lib/is-email');

describe('is-email', () => {
  describe('init', () => {
    it('should return true if String is an email address', () => {
      assert.equal(
        isEmail('anatoliy.gatt@aol.com'),
        true,
        'String should be an email address'
      );
      assert.equal(isEmail('a@b.c'), true, 'String should be an email address');
    });

    it('should return false if String is not an email address', () => {
      assert.equal(
        isEmail('ryandahl@nodejs.'),
        false,
        'String should not be an email address'
      );
      assert.equal(
        isEmail('@ryandahl.com'),
        false,
        'String should not be an email address'
      );
      assert.equal(
        isEmail('ryandahl.com'),
        false,
        'String should not be an email address'
      );
      assert.equal(
        isEmail('ryandahl@nodejs'),
        false,
        'String should not be an email address'
      );
      assert.equal(
        isEmail('ryandahl'),
        false,
        'String should not be an email address'
      );
    });
  });
});
