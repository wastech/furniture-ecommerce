<template>
  <div>
    <div class="row">
      <div
        class="col-sm-12 col-sm-12  col-md-6 col-lg-4 col-xl-3"
        v-for="item in items"
        :key="item._id"
      >
        <cards :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import cards from "@/shared/cards.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
    cards,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    axios
      .get("https://infinite-headland-81013.herokuapp.com/api/recent/products")
      .then((response) => {
        this.items = response.data.product;
      });
  },
};
</script>
<style scoped>
.container {
  max-width: 95%;
  width: 100%;
}
.title h1 {
  margin-bottom: 1.5em;
  margin-top: 1.5em;
  text-shadow: 1px 1px 1px #000;
}
.col-sm-3 {
  margin-bottom: 2em;
}
</style>
