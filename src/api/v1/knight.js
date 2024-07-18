import request from '@/utils/request'
var qs = require('querystringify')
var path = require('path')

export function postKnight(data) {
  return request({
    url: path.join('v1', 'knights'),
    method: 'post',
    data
  })
}
export async function getKnights(
  sort = '-created_at',
  search = null,
  page = 0,
  expand = 'image, author'
) {
  let query = {
    expand,
    sort
  }
  if (search !== null) {
    query['KnightSearch[title]'] = search
  }
  if (page > 1) {
    query['page'] = page
  }

  const url = path.join('v1', 'knights' + qs.stringify(query, true))

  return await request({
    url,
    method: 'get'
  })
}
export function getKnight(id, query = {}) {
  const url = path.join(
    'v1',
    'knights',
    id.toString() + qs.stringify(query, true)
  )

  return request({
    url,
    method: 'get'
  })
}

export function deleteKnight(id) {
  return request({
    url: path.join('/v1/knights', id.toString()),
    method: 'delete'
  })
}
export function putKnight(id, data) {
  return request({
    url: path.join('/v1/knights', id.toString()),
    method: 'put',
    data
  })
}
