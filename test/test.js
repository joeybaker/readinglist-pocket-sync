/* global describe, it */
'use strict';

var plugin = require('../index.js')
  , chai = require('chai')

describe('parsing', function(){
  it('should parse a file', function(){
    plugin.getReadingList(console.log)
  })
})
