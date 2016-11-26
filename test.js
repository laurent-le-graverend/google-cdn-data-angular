/* global describe, it, beforeEach */

'use strict';

const assert = require('chai').assert;

describe('google-cdn-data-angular', function() {
  beforeEach(function() {
    this.data = require('./index');
  });

  describe('AngularJS libraries', function() {
    it('should include angular 1.5.9', function() {
      assert.include(this.data.angular.versions, '1.5.9');
    });

    it('should include angular-animate 1.5.9', function() {
      assert.include(this.data['angular-animate'].versions, '1.5.9');
    });

    it('should include angular-cookies 1.5.9', function() {
      assert.include(this.data['angular-cookies'].versions, '1.5.9');
    });

    it('should include angular-loader 1.5.9', function() {
      assert.include(this.data['angular-loader'].versions, '1.5.9');
    });

    it('should include angular-resource 1.5.9', function() {
      assert.include(this.data['angular-resource'].versions, '1.5.9');
    });

    it('should include angular-route 1.5.9', function() {
      assert.include(this.data['angular-route'].versions, '1.5.9');
    });

    it('should include angular-sanitize 1.5.9', function() {
      assert.include(this.data['angular-sanitize'].versions, '1.5.9');
    });

    it('should include angular-touch 1.5.9', function() {
      assert.include(this.data['angular-touch'].versions, '1.5.9');
    });

    it('should build angular-resource 1.5.9 url', function() {
      assert.equal(this.data['angular-resource'].url('1.5.9'), '//ajax.googleapis.com/ajax/libs/angularjs/1.5.9/angular-resource.min.js');
    });
  });
});
