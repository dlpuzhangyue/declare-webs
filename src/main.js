import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import xhr from '../src/xhr'
import 'normalize.css/normalize.css'
import flexible from 'flexible.js'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false
flexible();
Vue.use(xhr)
Vue.use(Vant);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
