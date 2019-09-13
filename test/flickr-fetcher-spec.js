// flickr-fetcher-spec.js
'use strict'
var expect = require('chai').expect

describe('FlickrFetcher', function () {
  it('should exist', function () {
    var FlickrFetcher = require('../src/flickr-fetcher.js')
    expect(FlickrFetcher).to.not.be.undefined
  })
})
