const state = {
  main: {
    title: 'title',
    type: 'success',
    description: 'description',
    show: false
  }
}

const mutations = {
  flashSetup(state, { title, type = 'success', description = null }) {
    state.main.title = title
    state.main.type = type
    state.main.description = description
    state.main.show = true
  },
  flashClean(state) {
    state.main.show = false
  }

}

export default {
  state,
  mutations
}
