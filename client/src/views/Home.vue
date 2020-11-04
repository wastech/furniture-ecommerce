<template>
  <div class="container">
   <Hero/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'

export default {
  name: 'Home',
  components: {
   // HelloWorld
   Hero
  }
}
</script>
<style scoped>
.container{
  max-width: 95%;
  width: 100%;
}
</style>
