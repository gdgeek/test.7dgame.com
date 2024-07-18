import request from '@/utils/request'
export function getTrades(data) {
  return request({
    url: 'v1/trades',
    method: 'get',
    data
  })
}

export function transactions(id) {
  const data = { id: id }

  return request({
    url: 'v1/trades/transactions',
    method: 'post',
    data
  })
}
