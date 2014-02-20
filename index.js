'use strict';

var bplist = require('bplist-parser')
  , path = require('path')

exports.getReadingList = function(callback){
  bplist.parseFile(path.join(process.env.HOME, '/Library/Safari/Bookmarks.plist'), function(err, obj){
    var list
      , urls

    if (err) return callback(err)

    list = obj[0].Children.reduce(function(memo, child){
      if (child.Title === 'com.apple.ReadingList') return child
      else return memo
    })

    urls = list.Children.reduce(function(bookmarks, bookmark){
      bookmarks.push(bookmark.URLString)
      return bookmarks
    }, [])

    callback(null, urls)
  })
}
