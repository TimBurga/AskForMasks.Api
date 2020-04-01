import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import MainPlugin from './main-plugin';

Vue.config.productionTip = false

Vue.use(MainPlugin);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')



