import request from '@/utils/request'

var qs = require('querystringify')
var path = require('path')

export function getMeta(id, expand = 'resources') {
  const url = path.join(
    'e1',
    'metas',
    id.toString() + qs.stringify({ expand: expand }, true)
  )
  return request({
    url,
    method: 'get'
  })
}
