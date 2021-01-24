import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vcharts'
// 引入全局样式文件
import './style/index.css'

import VueEcharts from 'vue-echarts'

Vue.config.productionTip = false

Vue.prototype.$echarts = require('echarts')

Vue.component('v-chart', VueEcharts)

// mock开关
const mock = true
if (mock) {
  require('./mock/api')
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
