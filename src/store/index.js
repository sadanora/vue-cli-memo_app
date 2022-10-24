import { createStore } from "vuex";
import { VuexPersistence } from "vuex-persist";

const vuexPersist = new VuexPersistence({
  storage: localStorage,
});

export default createStore({
  state: {
    count: 0,
    memos: [],
  },
  getters: {
    getLengthOfMemos: (state) => {
      return state.memos.length;
    },
    getAllMemos: (state) => {
      return state.memos;
    },
    getMemoById: (state) => (id) => {
      return state.memos.find((memo) => memo.id === id);
    },
    getCount: (state) => {
      return state.count;
    },
  },
  mutations: {
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,
    save(state, memo) {
      if (memo.id) {
        let existingMemo = state.memos.find((memo) => memo.id === memo.id);
        existingMemo.content = memo.content;
      } else {
        memo.id = ++state.count;
        state.memos.unshift(memo);
      }
    },
    delete(state, id) {
      state.memos = state.memos.filter((memo) => memo.id !== id);
    },
    incrementCount(state) {
      ++state.count;
    },
  },
  actions: {},
  modules: {},
  plugins: [vuexPersist.plugin],
});
