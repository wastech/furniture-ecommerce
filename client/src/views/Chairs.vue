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
        {image:'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/C/86899_1529181630.jpg', name:"matteo harmchair", price:'444'},
        {image:'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/C/86899_1529181630.jpg', name:"matteo harmchair", price:'444'},
        {image:'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/C/86899_1529181630.jpg', name:"matteo harmchair", price:'444'},
        {image:'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/C/86899_1529181630.jpg', name:"matteo harmchair", price:'444'},
         {image:'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/C/86899_1529181630.jpg', name:"matteo harmchair", price:'444'},
        {image:'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/C/86899_1529181630.jpg', name:"matteo harmchair", price:'444'},
        {image:'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/C/86899_1529181630.jpg', name:"matteo harmchair", price:'444'},
        {image:'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/C/86899_1529181630.jpg', name:"matteo harmchair", price:'444'}
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
.container{
    max-width: 95%;
  width: 100%;}
</style>