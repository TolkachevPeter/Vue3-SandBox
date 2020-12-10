import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import messagePlugin from './utils/message.plugin';
import dateFilter from './filters/date.filter';
import 'materialize-css/dist/js/materialize';

import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(messagePlugin);

Vue.filter('date', dateFilter);

firebase.initializeApp({
  apiKey: 'AIzaSyCg16T0Q5op7Ajvf0PurvE27Qg_bjA13y0',
  authDomain: 'vue2-ee9c0.firebaseapp.com',
  projectId: 'vue2-ee9c0',
  storageBucket: 'vue2-ee9c0.appspot.com',
  messagingSenderId: '161965001836',
  appId: '1:161965001836:web:0278ac17b7ffe3ffb25c49',
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
