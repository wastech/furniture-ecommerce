<template>
  <div class="container">
     <div class="title">
      <h1>Best offers</h1>
    </div>
   <bestProduct/>

    <div class="title">
      <h1>New Products</h1>
    </div>
   <newProduct/>
   <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import bestProduct from '@/components/bestProduct.vue'
import newProduct from '@/components/newProduct.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
   // HelloWorld
   bestProduct,
   newProduct,
   Footer
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
