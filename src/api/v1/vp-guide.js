import request from '@/utils/request'

var qs = require('querystringify')
var path = require('path')
export function postVpGuide(data) {
  return request({
    url: 'v1/vp-guides',
    method: 'post',
    data: data
  })
}


export function getVpGuide(id) {
  return request({
    url: 'v1/vp-guides/' + id,
    method: 'get'
  })

}
export function getVpGuides(page = 0) {

  let query = []

  query['sort'] = 'order'
  if (page > 1) {
    query['page'] = page
  }

  return request({
    url: path.join('v1', 'vp-guides' + qs.stringify(query, true)),
    method: 'get'
  })

}

export function putVpGuide(id, data) {
  return request({
    url: 'v1/vp-guides/' + id,
    method: 'put',
    data
  })
}
export function deleteVpGuide(id) {
  return request({
    url: 'v1/vp-guides/' + id,
    method: 'delete'
  })
}
