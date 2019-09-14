'use strict'
var expect = require('chai').expect

var FlickrFetcher = require('../src/flickr-fetcher.js')

describe('#photoObjToURL() first', function () {
  it('should take photo 24770505034 object from Flickr and return a string', function () {
    var input = {
      id: '24770505034',
      owner: '97248275@N03',
      secret: '31a9986429',
      server: '1577',
      farm: 2,
      title: '20160229090898',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    }

    var expected = 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg'
    var actual = FlickrFetcher.photoObjToURL(input)
    expect(actual).to.eql(expected)
  })
})

describe('#photoObjToURL() second', function () {
  it('should take photo 24770504484 object from Flickr and return a string', function () {
    var input = {
      id: '24770504484',
      owner: '97248275@N03',
      secret: '69dd90d5dd',
      server: '1451',
      farm: 2,
      title: '20160229090903',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    }
    var expected = 'https://farm2.staticflickr.com/1451/24770504484_69dd90d5dd_b.jpg'
    var actual = FlickrFetcher.photoObjToURL(input)
    expect(actual).to.eql(expected)
  })

  describe('#transformPhotoObj()', function () {
    it('should take a photo object and return an object with just title and URL', function () {
      var input = {
        id: '25373736106',
        owner: '99117316@N03',
        secret: '146731fcb7',
        server: '1669',
        farm: 2,
        title: 'Dog goes to desperate measure to avoid walking on a leash',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0
      }
      var expected = {
        title: 'Dog goes to desperate measure to avoid walking on a leash',
        url: 'https://farm2.staticflickr.com/1669/25373736106_146731fcb7_b.jpg'
      }
      var actual = FlickrFetcher.transformPhotoObj(input)
      expect(actual).to.eql(expected)
    })
  })
})
