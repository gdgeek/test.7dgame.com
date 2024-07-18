import request from '@/utils/request'

export function getTags() {
  return request({
    url: 'v1/tags',
    method: 'get'
  })
}

export function getMessageTag(tag_id, page = 0) {
  return request({
    url: 'v1/message-tags?expand=message&MessageTagsSearch[tag_id]=' + tag_id + '&page=' + page + '&expand=message',
    method: 'get'
  })
}

export function removeMessageTag(message_id, tag_id) {
  return request({
    url: 'v1/message-tags/0?message_id=' + message_id + '&tag_id=' + tag_id,
    method: 'delete'
  })
}
export function addMessageTag(message_id, tag_id) {
  const data = { message_id, tag_id }

  return request({
    url: 'v1/message-tags',
    method: 'post',
    data
  })
}
