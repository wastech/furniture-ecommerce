<template>
  <div class="container">
   
   
        <div class="card" style="width: 100%;">
          <img
            :src="item.image"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <p class="card-text">
              ${{item.price}}
            </p>
          </div>
        </div>
      </div>
    
</template>
<script>
export default {
  props:[
    'item'
  ]
}
</script>
<style scoped>
.card {
  box-shadow: 12px 12px 16px 0 rgba(255, 255, 255, 0.3) inset,
    -8px -8px 12px 0 rgba(0, 0, 0, 0.25) inset;
}
.card-title{
  color: #534b4b;
}

</style>
