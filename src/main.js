import Vue from 'vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
