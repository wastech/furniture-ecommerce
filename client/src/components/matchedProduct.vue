<template>
  <div class="">
    <div class="row">
  <div class="col-sm-3" v-for="item in items.reverse().slice(0,4)" :key="item._id">
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
    // HelloWorld
    cards,
  },
   props: ['category'],
  data(){
    return{
      items:[]
    }
  },
  watch: {
    $props: {
      handler: async function (newProps) {
        console.log("newProps.category", newProps.category._id);
        const response = await axios.get(
          `https://infinite-headland-81013.herokuapp.com/api/matched/${newProps.category._id}`
        );
        console.log("this is respone",  response)
        this.items = response.data.product;
        
      },
      deep: true,
    },
  },
};

</script>

<style scoped>
.col-sm-3{
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>