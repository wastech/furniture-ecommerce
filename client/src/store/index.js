

export default createStore({
 
  state: {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    charge: {},
    token: "",
    user: "",
    isUserLoggedIn: false,
  },
 
  getters: {
    getCart: (state) => state.cart,
    getCharge: (state) => state.charge,
  },
  mutations: {
    setCart: (state, payload) => {
      state.cart.push(payload);
    },
    setToken(state, token) {
      state.token = token;
      state.isUserLoggedIn = !!token;
    },
    setUser(state, user) {
      state.user = user;
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
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    },
  },
  modules: {},
});
