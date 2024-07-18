import { getTags } from '@/api/v1/tags'
const state = {
  tagsMap: null
}

const mutations = {
  setMap: (state, { map }) => {
    state.tagsMap = map
  }
}

const actions = {
  refreshTags({ commit }) {
    getTags()
      .then(response => {
        const map = new Map()
        response.data.forEach(item => {
          const obj = { name: item.name }
          const info = JSON.parse(item.info)
          if (info) {
            obj.color = info.color ? info.color : '#000000'
            obj.type = info.type ? info.type : '#000000'
            obj.explan = info.explan ? info.explan : '无内容'
          } else {
            obj.color = '#000000'
            obj.type = '#000000'
            obj.explan = '无内容'
          }
          obj.managed = item.managed
          map.set(item.id, obj)
        })
        commit('setMap', { map })
      })
      .catch(function(error) {
        console.error(error)
      })
      .finally(() => {
        //  self.refresh()
      })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
