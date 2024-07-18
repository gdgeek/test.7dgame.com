import request from '@/utils/request'

var qs = require('querystringify')
var path = require('path')
export function postPerson(data) {
  return request({
    url: 'v1/people',
    method: 'post',
    data: data
  })
}
export function changeAuth(id, auth) {
  return request({
    url: 'v1/people/auth',
    method: 'put',
    data: { id: id, auth: auth }
  })
}
export function deletePerson(id) {
  return request({
    url: 'v1/people/' + id,
    method: 'delete'
  })
}

export function putPerson(id, data) {
  return request({
    url: 'v1/people/' + id,
    method: 'put',
    data
  })
}

export function getPerson(
  sort = '-created_at',
  search = null,
  page = 1,
  expand = ''
) {
  let query = []
  query['expand'] = expand
  query['sort'] = sort

  if (search !== '') {
    query['UserSearch[username]'] = search
  }
  if (page > 1) {
    query['page'] = page
  }
  //alert(path.join('v1', 'people' + qs.stringify(query, true)))
  return request({
    url: path.join('v1', 'people' + qs.stringify(query, true)),
    method: 'get'
  })
}
