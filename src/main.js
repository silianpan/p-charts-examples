import Vue from 'vue'
import App from './App.vue'
import PCharts from 'p-charts'
Vue.use(PCharts)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
