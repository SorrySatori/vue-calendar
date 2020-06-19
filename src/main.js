import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "AIzaSyAbDhruotda4BSC7cYE7MW-9aTnlCzQWWA",
    authDomain: "vue-calendar-58fab.firebaseapp.com",
    databaseURL: "https://vue-calendar-58fab.firebaseio.com",
    projectId: "vue-calendar-58fab",
    storageBucket: "vue-calendar-58fab.appspot.com",
    messagingSenderId: "550309252519",
    appId: "1:550309252519:web:e7085359ea0499b2f8fa82"
});

export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
