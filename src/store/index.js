import Vue from 'vue';
import Vuex from 'vuex';
import firebase from '@/plugins/firebase';
import auth from './modules/auth';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
  },
});

console.log(store);

firebase.auth().onAuthStateChanged((user) => {
  console.log('onAuthStateChanged', user);
});

export default store;
