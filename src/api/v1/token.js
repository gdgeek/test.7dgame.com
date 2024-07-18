import request from '@/utils/request'
export function getToken() {
  return request({
    url: 'v1/tokens',
    method: 'get'
  })
}

