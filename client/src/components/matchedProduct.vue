<template>
  <div class="container">
    <div class="row">
    <div class="col-sm-3"   v-for="item in items" :key="item._id">
       <div class="card" style="width: 100%;">
      <router-link
        v-bind:to="{ name: 'productdetail', params: { id: item._id } }"
      >
        <img :src="item.photo" class="card-img-top" alt="item.name" />
      </router-link>
      <div class="card-body">
        <h5 class="card-title">{{ item.name }}</h5>
        <p class="card-text">
          ${{ item.price }} <span><i class="fas fa-cart-plus"></i></span>
        </p>
      </div>
    </div>

    </div>

  </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
   props: ['category'],
  data(){
    return{
      items:[]
    }
  },
  watch: {
    $props: {
      handler: async function (newProps) {
        console.log("newProps.category", newProps.category.title);
        const response = await axios.get(
          `https://infinite-headland-81013.herokuapp.com/api/matched/${newProps.category.title}`
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