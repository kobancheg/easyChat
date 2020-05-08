import mutations from '@/store/mutations';
import { firebaseLogin } from '@/services/firebase/auth.service';

const {
  IS_LOGGED_IN,
  LOGIN_LOADER,
} = mutations;

const authStore = {
  namespaced: true,
  state: {
    isLoggedIn: false,
    loginInProgress: false,
  },
  getters: {
    isLoggedIn: ({ isLoggedIn }) => isLoggedIn,
    loginInProgress: ({ loginInProgress }) => loginInProgress,
  },
  mutations: {
    [IS_LOGGED_IN](state, bool) {
      state.IS_LOGGED_IN = bool;
    },
    [LOGIN_LOADER](state, bool) {
      state.LOGIN_LOADER = bool;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      console.log(email, password);
      try {
        commit(LOGIN_LOADER, true);
        await firebaseLogin(email, password);
      } catch (err) {
        console.log(err);
      } finally {
        commit(LOGIN_LOADER, false);
      }
    },
  },
};

export default authStore;
