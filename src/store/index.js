import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import getters from './getters'
import modules from './modules'
Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  modules,
  getters,
  strict: process.env.NODE_ENV !== 'production'
})

export default store
