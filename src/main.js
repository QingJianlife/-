import Vue from 'vue'
import 'lib-flexible/flexible'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import store from './vuex/store'
Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
Vue.component('Header', Header)
new Vue({
  el:'#app',
  // components:{App},//注册组件
  // template:'<App/>',//声明使用标签形式使用
  render:h => h(App),
  router,
  store,
})