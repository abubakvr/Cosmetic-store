import Vue from 'vue'
import App from './App.vue'
import router from './router';
import vuetify from './plugins/vuetify'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
  mounted(){
    AOS.init()
  },
}).$mount('#app')
