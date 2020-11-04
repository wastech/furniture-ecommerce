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
  components:{
    cards
  },
  data(){
    return{
      items:[
        {image:'https://static.toiimg.com/photo/72975551.cms', name:"matteo harmchair", price:'3444'},
        {image:'https://static.toiimg.com/photo/72975551.cms', name:"matteo harmchair", price:'3444'},
        {image:'https://static.toiimg.com/photo/72975551.cms', name:"matteo harmchair", price:'3444'},
        {image:'https://static.toiimg.com/photo/72975551.cms', name:"matteo harmchair", price:'3444'}
      ]
    }
  }
}
</script>

<style scoped>
.col-sm-3{
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>