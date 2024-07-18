// import Cookies from 'js-cookie'
import Vue from 'vue'
const TokenKey = 'vue_admin_template_token'

let token = null
export function getToken() {
  if (typeof Vue.$cookies !== 'undefined') {
    const tk = Vue.$cookies.get(TokenKey)
    if (tk !== null) {
      token = tk
    }
  }
  return token
}

export function removeToken() {
  if (typeof Vue.$cookies !== 'undefined') {
    Vue.$cookies.remove(TokenKey)
  }
  token = null
}
export function setToken(value) {
  if (typeof Vue.$cookies !== 'undefined') {
    Vue.$cookies.set(TokenKey, value)
  }
  token = value
}
