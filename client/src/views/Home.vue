<template>
  <div class="container">
     <div class="title">
      <h1>Best offers</h1>
    </div>
   <bestProduct/>
  </div>
</template>

<script>
// @ is an alias to /src
import bestProduct from '@/components/bestProduct.vue'

export default {
  name: 'Home',
  components: {
   // HelloWorld
   bestProduct
  }
}
</script>
<style scoped>
.container{
  max-width: 95%;
  width: 100%;
}
.title h1 {
  margin-bottom: 1.5em;
  margin-top: 1.5em;
  text-shadow: 1px 1px 1px #000;
}
</style>
