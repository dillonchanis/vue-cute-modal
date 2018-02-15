import Vue from 'vue'
import App from './App'
import CuteModal from './index'

Vue.use(CuteModal, {
  width: '1000px',
  height: '55px'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
