<template>
  <div class="container">
    <div class="row">
    <div class="col-sm-3"   v-for="item in items" :key="item.id">
      <cards
     
        :item="item"/>


    </div>

  </div>
  </div>
</template>
<script>
import cards from "@/shared/cards.vue"
export default {
   props: {
    category: String,
  },
  components:{
    cards
  },
  data(){
    return{
      items:[]
    }
  },
  watch: {
    $props: {
      handler: async function (newProps) {
        console.log("newProps.category", newProps.category);
        const response = await axios.get(
          `api/product/${newProps.category}`
        );
        this.items = response.data.product;
        console.log(this.items)
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