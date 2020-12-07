import Vue from 'vue'
import axios from 'axios'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import components from './components/map'

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

// import * as fundebug from 'fundebug-javascript'
// import fundebugVue from 'fundebug-vue'
// fundebug.apikey = 'c360cab0ddad7dbf6cb50f906d0723b1433203e5589d0454034b56bfa2bf68d7'
// fundebugVue(fundebug, Vue)
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

components.map((item) => Vue.component(item.id, item.component))

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
