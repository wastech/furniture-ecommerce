<template>
  <div class="hello container">
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <a class="navbar-brand">
        <router-link to="/"> Products</router-link>
      </a>
      <button
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item"><router-link to="/beds"> Beds </router-link></li>
          <li class="nav-item">
            <router-link to="/chairs"> Chairs </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/sofas"> Sofas </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tables"> Tables </router-link>
          </li>
        </ul>
      </div>
      <router-link tag="a" :to="{ name: 'cart' }"
        ><span class="cart-color"
          ><i class="fas fa-cart-plus badge badge-light">{{
            cart.length
          }}</i></span
        ></router-link
      >
    </nav>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "navbar",
  data() {
    return {
      categories: [],
      url: this.$route.params.id,
    };
  },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      axios
        .get("https://e-furniture-7e2p.onrender.com/api/categories")
        .then((response) => {
          this.categories = response.data.categories;
        });
    },
    reloadPage(url) {
      this.url = url;
    },
    goToHome() {
      this.$router.push({ name: "Home" });
    },
  },
  watch: {
    url: function () {
      console.log(this.url);
      this.$router.go();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
ul {
  margin: 0 auto;
  color: black;
  font-weight: bolder;
  padding: 2rem;
}
.fas {
  font-size: 1em;
  margin-left: 65%;
}
button {
  border-radius: 0.7rem;
}
input {
  border: 0.2rem solid #ccc;
  border-radius: 0.7rem;
}
#nav a.router-link-exact-active {
  color: black;
  font-size: 1.5em;
}
.nav-item {
  margin-right: 2em;
}
</style>
