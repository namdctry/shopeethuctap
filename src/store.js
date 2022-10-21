import { createStore } from "vuex";

const store = createStore({
  state: {
    cart: [],
  },
  mutations: {
    addCart: (state, item) => {
      const index = state.cart.findIndex((it) => it.id == item.id);

      if (index === -1) {
        state.cart.push(item);
      } else {
        state.cart[index].count += item.count;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    remove: (state, id) => {
      state.cart = state.cart.filter((it) => it.id != id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
  actions: {
    addCart({ commit }, data) {
      commit("addCart", data);
    },
    getCart({ commit, state }) {
      state.cart = JSON.parse(localStorage.getItem("cart")) || [];
    },
    remove({ commit }, id) {
      commit("remove", id);
    },
  },
});

export { store };
