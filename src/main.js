import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

Vue.use(VueRouter);


const Home = { template: '<div>HELLO</div>' };

const routes = [
  { path: '/home', component: Home },

];

const router = new VueRouter({
  routes,
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
});
