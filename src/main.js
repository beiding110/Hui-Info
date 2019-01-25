// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'

import $ from 'jquery'

import '@/css/weui.css'
import '@/css/jquery-weui.css'
import 'jquery-weui/dist/js/jquery-weui'

import FastClick from 'jquery-weui/dist/lib/fastclick'

import '@/css/common.css'
import app from '@/js/app.js'
import '@/js/app-supply.js'

import myWeui from '@/components'

Vue.config.productionTip = false

$(function() {
    FastClick.attach(document.body);
});

Vue.use(myWeui)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
