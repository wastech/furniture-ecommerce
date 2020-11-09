export default {
  methods: {
    addToCart(product) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      if (cart.length === 0) { 
        let item = {
          _id: product._id,
          name: product.name,
          price: product.price,
          title: product.title,
          photo:product.photo,
          subtotal: product.price*1,
          qty: 1
        }
        cart.push(item);
        this.$store.commit('setCart', item);
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        let item = cart.find(item => {
          return item.id === product._id;
        });
        if (item) { // check if is not new item
          item.qty++;
          item.subtotal = item.price*item.qty
          this.$store.commit('setQuantity', item);
          this.$store.commit('setPrice', item);
          localStorage.setItem('cart', JSON.stringify(cart));
        } else {
          let item = {
            _id: product._id,
            name: product.name,
            price: product.price,
            title: product.title,
            photo:product.photo,
            subtotal: product.price *1,
            qty: 1
          };
          cart.push(item);
          this.$store.commit('setCart', item);
          localStorage.setItem('cart', JSON.stringify(cart));
        }
      }
    }
  }
}