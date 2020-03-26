import Vue from 'vue'
import Vuex from 'vuex'
import inLocal from './plugin/saveInLocal'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  // strict: true, // 严格模式
  // strict: process.env.NODE_ENV === 'development', //启用更为灵活的生产环境判断是否启用严格模式
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user
  },
  getters: {
  },
  plugins: [ inLocal ]
})
