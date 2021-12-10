import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false  // prevents from displaying the production mode message "yopu are running in development ...."

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
