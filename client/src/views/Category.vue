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
import axios from 'axios'
import cards from "@/shared/cards.vue"
export default {
  props: ['category'],
  components:{
    cards
  },
  data(){
    return{
      items:[]
    }
  },
  
    created() {
        this.fetch();
    },
    watch: {
        '$route' (to, from) {
            if(from.params.category !== to.params.category){
                this.fetch()
            }
        }
    },
    methods: {
        fetch() {
              axios.get(`http://localhost:3000/api/categories/${this.category}`).then(response => {
        this.items = response.data;
        console.log(this.items)
      });
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