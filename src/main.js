import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { firestorePlugin } from 'vuefire'
import { auth } from './plugins/firebase'


Vue.use(firestorePlugin)
Vue.config.productionTip = false

let app = false

auth.onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})