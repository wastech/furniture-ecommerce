<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3" v-for="item in items" :key="item.id">
        <cards :item="item" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import cards from "@/shared/cards.vue";
export default {
  components: {
    cards,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    axios.get("http://localhost:3000/api/products").then((response) => {
      this.items = response.data.products;
    });
  },
};
</script>

<style scoped>
.col-sm-3 {
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>