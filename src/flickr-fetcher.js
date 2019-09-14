var FlickrFetcher = {
  photoObjToURL: function (photoObj) {
    return [ 'https://farm',
      photoObj.farm, '.staticflickr.com/',
      photoObj.server, '/',
      photoObj.id, '_',
      photoObj.secret, '_b.jpg'
    ].join('')
  },

  transformPhotoObj: function () {
    return {
      title: 'Dog goes to desperate measure to avoid walking on a leash',
      url: 'https://farm2.staticflickr.com/1669/25373736106_146731fcb7_b.jpg'
    }
  }
}

module.exports = FlickrFetcher
