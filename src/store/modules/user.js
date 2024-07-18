import { login, signup } from '@/api/sites'
import { getUserData } from '@/api/v1/user'
import { logout } from '@/api/servers'
import { setToken, removeToken } from '@/utils/auth'
const getDefaultState = () => {
  return {
    data: null,
    roles: null
  }
}

const state = getDefaultState()

const mutations = {
  resetState: state => {
    Object.assign(state, getDefaultState())
  },
  setData: (state, data) => {
    state.data = data
  },
  setUser: (state, { data, roles }) => {
    state.data = data
    state.roles = roles
  }
}

const actions = {
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password })
        .then(response => {
          const data = response.data
          setToken(data.token)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  signup({ commit }, info) {
    return new Promise((resolve, reject) => {
      signup(info)
        .then(response => {
          console.log(response)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getUser({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserData(state.token)
        .then(response => {
          const data = response.data
          if (!data) {
            return reject('Verification failed, please Login again.')
          }
          commit('setUser', data)
          resolve(data)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout()
        .then(() => {
          removeToken()
          commit('resetState')
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('resetState')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
