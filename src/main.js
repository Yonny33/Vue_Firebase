import Vue from 'vue'
import App from './App.vue'
import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css';
import '../node_modules/@fortawesome/fontawesome-free/css/solid.css';
import firebase  from 'firebase';
import 'firebase/firestore';

Vue.config.productionTip = false
var config = {
  apiKey: "AIzaSyDAuWU-_blv0B4BF88bOfoU3QveJRwem2U",
  authDomain: "vuejs-43243.firebaseapp.com",
  databaseURL: "https://vuejs-43243.firebaseio.com",
  projectId: "vuejs-43243",
  storageBucket: "vuejs-43243.appspot.com",
  messagingSenderId: "893357153627",
  appId: "1:893357153627:web:500c42d9dd1ed8999b8e7e",
  measurementId: "G-2SM8PCKYJN"
}
firebase.initializeApp(config);
firebase.analytics();

new Vue({
  render: h => h(App),
}).$mount('#app')
