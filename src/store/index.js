import Vue from 'vue'
import Vuex from 'vuex'

//MODULES
import adminSnackbar from './modules/adminSnackbar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    adminSnackbar
  }
})
