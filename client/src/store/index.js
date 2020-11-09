import { createStore } from "vuex";

export default createStore({
  state: {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    charge: {},
  },
  getters: {
    getCart: (state) => state.cart,
    getCharge: (state) => state.charge,
  },
  mutations: {
    setCart: (state, payload) => {
      state.cart.push(payload);
    },
    setQuantity: (state, payload) => {
      let item = state.cart.find((product) => {
        return product.id === payload.id;
      });
      item.qty = payload.qty;
    },
    setPrice: (state, payload) => {
      let item = state.cart.find((product) => {
        return product.id === payload.id;
      });
      item.subtotal = payload.subtotal;
    },
    setCharge: (state, payload) => {
      state.charge = payload;
    },
  },
  actions: {},
  modules: {},
});
