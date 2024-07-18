import request from '@/utils/request'

var qs = require('querystringify')
var path = require('path')

export function getVerse(id) {
  return request({
    url: path.join('e1', 'verses', id.toString()),
    method: 'get'
  })
}
