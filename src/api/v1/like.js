import request from '@/utils/request'
export function postLike(message_id) {
  const data = { message_id }
  return request({
    url: 'v1/likes',
    method: 'post',
    data: data
  })
}

export function removeLike(message_id) {
  return request({
    url: 'v1/likes/remove?message_id=' + message_id,
    method: 'post'
  })
}

export function isLike(user_id, message_id) {
  // 我是否like
  return request({
    url:
      'v1/likes?LikeSearch[message_id]=' +
      message_id +
      '&LikeSearch[user_id]=' +
      user_id,
    method: 'get'
  })
}

export function getMessagesWithLiker(
  liker,
  sorted = '-created_at',
  search = null,
  page = 0
) {
  let url = 'v1/messages?expand=author,messageTags&sort=' + sorted
  if (!isNaN(liker)) {
    url += '&liker=' + liker
  }
  if (search) {
    url += '&MessageSearch[title]=' + search
  }
  if (page > 1) {
    url += '&page=' + page
  }

  return request({
    url,
    method: 'get'
  })
}
