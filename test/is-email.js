var assert = require('assert');
var isEmail = require('../lib/is-email');

describe('is-email', function () {
    describe('init', function () {
        it('should return true if String is an email address', function () {
            assert.equal(isEmail('anatoliy.gatt@aol.com'), true, 'String should be an email address');
        });

        it('should return false if String is not an email address', function () {
            assert.equal(isEmail('@ryandahl.com'), false, 'String should not be an email address');
        });
    });
});