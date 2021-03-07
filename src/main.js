import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import GreetingGlobalComponent from './components/Greeting'
Vue.component('GreetingGlobalComponent', GreetingGlobalComponent);


import SlotExample from './components/SlotExample';
Vue.component('SlotExample', SlotExample);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
