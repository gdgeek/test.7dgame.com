
const state = {
  sidebar: {
    opened: true,
    withoutAnimation: false
  },
  blind: false,
  device: 'desktop'
}

const mutations = {
  setBlind: (state, blind) => {
    state.blind = blind
  },
  setSidebarOpened: (state, opened) => {
    state.sidebar.opened = opened
  },
  setSidebarWithoutAnimation: (state, withoutAnimation) => {
    state.sidebar.withoutAnimation = withoutAnimation
  },
  toggleDevice: (state, device) => {
    state.device = device
  }
}

const actions = {
  setSidebar({ commit, state }, { opened, withoutAnimation }) {
    if (!state.blind) {
      commit('setBlind', true)
      commit('setSidebarOpened', opened)
      commit('setSidebarWithoutAnimation', withoutAnimation)

      setTimeout(() => {
        var myEvent = new Event('resize')
        window.dispatchEvent(myEvent)
      }, 100)
      setTimeout(() => {
        commit('setBlind', false)
      }, 110)
    }
  },
  toggleSideBar({ commit, state }) {
    if (!state.blind) {
      commit('setBlind', true)
      commit('setSidebarOpened', !state.sidebar.opened)
      commit('setSidebarWithoutAnimation', false)

      setTimeout(() => {
        var myEvent = new Event('resize')
        window.dispatchEvent(myEvent)
      }, 100)
      setTimeout(() => {
        commit('setBlind', false)
      }, 110)
    }
  },
  closeSideBar({ commit }, { withoutAnimation }) {
   
    if (!state.blind) {
      commit('setBlind', true)
      commit('setSidebarOpened', false)
      commit('setSidebarWithoutAnimation', withoutAnimation)

      setTimeout(() => {
        var myEvent = new Event('resize')
        window.dispatchEvent(myEvent)
      }, 100)
      setTimeout(() => {
        commit('setBlind', false)
      }, 110)
    }
  },
  toggleDevice({ commit }, device) {
    commit('toggleDevice', device)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
