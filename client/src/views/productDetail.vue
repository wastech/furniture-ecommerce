<template>
  <div class="">
    <div class="row">
      <div class="col-sm-6">
        <div class="image">
          <img :src="product.photo" />
        </div>

        <div class="name">
          <h3>
            {{ product.name }}
            <h5 class="price">#{{ product.price }}</h5>
          </h3>
        </div>

        <div class="category">
          <!-- <h5>{{product.category.title}}</h5>-->
        </div>
      </div>

      <div class="col-sm-6">
        <p class="text">
          {{ product.description }}
        </p>
        <div class="icon">
          <i class="fas fa-cart-plus"></i>

          <h3 class="cart" @click="addToCart(product)">+ add to cart</h3>
        </div>
      </div>
    </div>

    <div class="title">
      <h1>Similar Product</h1>
    </div>
    <matchedProduct :category="product.category" />

    <div class="title">
      <h1>New Product</h1>
    </div>

    <newProduct />
  </div>
</template>

<script>
import mixins from "@/mixins/mixins";
import axios from "axios";
import matchedProduct from "@/components/matchedProduct.vue";
import newProduct from "@/components/newProduct.vue";
export default {
  mixins: [mixins],
  components: {
    matchedProduct,
    newProduct,
  },
  data() {
    return {
      product: {},
      _id: this.$route.params.id,
    };
  },
  methods: {
    getPost() {
      axios
        .get(`https://e-furniture-7e2p.onrender.com/api/products/${this._id}`)
        .then((response) => {
          this.product = response.data.product;
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        this.getPost();
      },
    },
  },
};
</script>
<style scoped>
.title h1 {
  margin-bottom: 1.5em;
  margin-top: 1.5em;
  font-weight: 700;
  text-shadow: 1px 1px 1px #000;
}
img {
  width: 100%;
  height: 25em;
  object-fit: contain;
}

.price {
  text-align: right;
  margin-left: 70%;
  box-shadow: 12px 12px 16px 0 rgba(255, 255, 255, 0.3) inset,
    -8px -8px 12px 0 rgba(0, 0, 0, 0.25) inset;
  background-color: white;
  padding: 3%;
  margin-top: 1em;
}
.name h3 {
  margin-top: 3%;
  font-size: large;
  font-weight: 900;
}
.row {
  background: transparent;
  box-shadow: 6px 6px 14px 0 rgba(0, 0, 0, 0.2),
    -8px -8px 18px 0 rgba(255, 255, 255, 0.55);
  border-radius: 18px;
  padding: 4px 30px 20px;
  min-height: 380px;
}
p {
  padding: 1em;
  font-size: large;
}
.icon {
  text-align: center;
  font-size: 3em;
}
.fas {
  background-color: black;
  padding: 0.3em;
  color: white;
  border-radius: 30%;
}
h3.cart {
  padding: 1.5em;
  background-color: #f6f5f1;
  border-radius: 1.5em;
  margin-top: -1.5em;

  cursor: pointer;
}
@media only screen and (max-width: 576px) {
  .title h1 {
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    font-weight: 700;
    font-size: x-large;
    text-shadow: 1px 1px 1px #000;
  }
  img {
    height: 30vh;
    object-fit: cover;
  }
  .name h3 {
    font-size: medium;
    font-weight: 700;
  }
  .price {
    box-shadow: 12px 12px 16px 0 rgba(255, 255, 255, 0.3) inset,
      -8px -8px 12px 0 rgba(0, 0, 0, 0.25) inset;
    background-color: white;
    margin-top: 0.1em;
  }
  p {
    font-size: medium;
  }
  .fas {
    padding: 0.4em;
    color: white;
    font-size: xx-large;
    border-radius: 30%;
  }
  h3.cart {
    padding: 0.5em;
    background-color: #f6f5f1;
    border-radius: 1.5em;
    margin-top: -0.5em;

    cursor: pointer;
  }
}

@media only screen and (min-width: 768px) {
  img {
    height: 15em;
    object-fit: contain;
  }
}
@media only screen and (min-width: 992px) {
  img {
    height: 20em;
    object-fit: contain;
  }
}
</style>
