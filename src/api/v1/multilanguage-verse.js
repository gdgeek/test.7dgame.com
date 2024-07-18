import request from '@/utils/request'
export function postMultilanguageVerse(data) {
  return request({
    url: 'v1/multilanguage-verses',
    method: 'post',
    data: data
  })
}

export function getMultilanguageVerse(id) {
  return request({
    url: 'v1/multilanguage-verses/' + id,
    method: 'get'
  })
}

export function putMultilanguageVerse(id, data) {
  return request({
    url: 'v1/multilanguage-verses/' + id,
    method: 'put',
    data
  })
}
export function deleteMultilanguageVerse(id) {
  return request({
    url: 'v1/multilanguage-verses/' + id,
    method: 'delete'
  })
}
