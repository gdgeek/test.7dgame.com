import request from '@/utils/request'

export function openid(token) {
  return request({
    url: '/wechats/openid?token=' + token,
    method: 'get'
  })
}
export function binding(data) {
  return request({
    url: '/wechats/binding',
    method: 'post',
    data
  })
}
export function qrcodeurl(qrcode) {
  return request({
    url: '/wechats/qrcode',
    method: 'get'
  })
}
export function qrcode() {
  return request({
    url: '/wechats/qrcode',
    method: 'get'
  })
}
export function signup(data) {
  return request({
    url: '/wechats/signup',
    method: 'post',
    data
  })
}
