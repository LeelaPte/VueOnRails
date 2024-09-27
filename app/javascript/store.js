import { createStore } from 'vuex';

export default createStore({
  state: {
    messageOptionOne: false,
    message: `"Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat"`
  },
  mutations: {
    setMessageOptionOne(state, newMessageOptionOne) {
      state.messageOptionOne = newMessageOptionOne;
    },
    setMessage(state, newMessage) {
      state.message = newMessage;
    }
  }
});
