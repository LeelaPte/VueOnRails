import * as Vue from 'vue'
import App from '../app.vue'
import store from '../store'

document.addEventListener('DOMContentLoaded', () => {
  const app = Vue.createApp(App);
  app.use(store);
  app.mount('#app');
});
