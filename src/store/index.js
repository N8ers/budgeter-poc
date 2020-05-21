import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uid: ""
  },
  mutations: {
    SET_UID: function(state, uid) {
      state.uid = uid;
    },
    LOGOUT: function(state) {
      state.uid = "";
    }
  },
  actions: {},
  modules: {}
});
