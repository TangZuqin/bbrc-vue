// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* eslint-disable no-unused-vars */
import $ from 'jQuery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'ionicons/dist/css/ionicons.min.css'
import 'select2/dist/css/select2.min.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/skin-blue.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'admin-lte/dist/js/app.min.js'
import 'select2/dist/js/select2.full.min.js'
import 'admin-lte/dist/js/demo.js'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }

})
