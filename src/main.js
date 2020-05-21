import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as firebase from "firebase/app";
import "firebase/auth";

import "./sass/style.scss";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCIMKkDSw04Lnm5RLk9qkB5zX9gLNOLhwo",
  authDomain: "budgeter-cfcbb.firebaseapp.com",
  databaseURL: "https://budgeter-cfcbb.firebaseio.com",
  projectId: "budgeter-cfcbb",
  storageBucket: "budgeter-cfcbb.appspot.com",
  messagingSenderId: "215426514368",
  appId: "1:215426514368:web:be6e1ba1dc2fb038c89c25",
  measurementId: "G-EVCHBJPLQP"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
