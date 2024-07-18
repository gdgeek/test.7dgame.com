import request from '@/utils/request'
export function postReply(data) {
  return request({
    url: 'v1/replies',
    method: 'post',
    data: data
  })
}

export function getReply(id) {
  return request({
    url: 'v1/replies/' + id + '?expand=message',
    method: 'get'
  })
}
export function getReplies(message_id = -1, sort = 'created_at', page = 0) {
  let url = 'v1/replies?expand=author&sort=' + sort
  if (message_id !== -1) {
    url += '&ReplySearch[message_id]=' + message_id
  }
  if (page > 1) {
    url += '&page=' + page
  }
  return request({
    url,
    method: 'get'
  })
}

export function putReply(id, data) {
  return request({
    url: 'v1/replies/' + id,
    method: 'put',
    data: data
  })
}
export function deleteReply(id) {
  return request({
    url: 'v1/replies/' + id,
    method: 'delete'
  })
}
