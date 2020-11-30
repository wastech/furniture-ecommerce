<template>
  <div class="main">
    <div class="row">
      <div class="col-sm-2">
        <div class="img">
          <img
            src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/1888657.jpg"
            alt=""
          />
        </div>
        <div class="name">
          <h4>hello @ admin123</h4>
        </div>

        <div class="list">
          <h5><a href="orders"> <i class="fas fa-cart-plus mr-4"></i>User Orders</a></h5>
          <h5>  <a href=""><i class="fas fa-cart-plus mr-4"></i>Product List</a> </h5>
          <h5> <a href="owner"> <i class="fas fa-cart-plus mr-4"></i>authors</a></h5>
          <h5> <a href="addcategory"> <i class="fas fa-cart-plus mr-4"></i>categories</a></h5>
           <h5>  <i class="fas fa-cart-plus mr-4"></i>log out</h5>
        </div>
      </div>

      <div class="col-sm-10">
        <div class="new">
            <a href="product"> <h4>New Item</h4></a>
         
        </div>

         <div class="products">
           <h3>Products in Store</h3>
         
        </div>
  <posts/>
      </div>

    </div>
  </div>
</template>

<script>
import posts from '@/admin/posts.vue'
export default {
  components:{
posts
  },
  data(){
    return{

    }
  }
}
</script>


<style scoped>
.col-sm-2 {
  background-color: black;
  position: fixed;
  height: 100%;
        position: fixed;
        float: left;
        width: 200px;
}
.col-sm-10 {
 
    margin-left: 12em;
   width: 800px;

}

img {
  max-width: 10em;
  width: 100%;
  border-radius: 50%;
  height: 10em;
  object-fit: cover;
}
.img {
  text-align: center;
  margin-top: 2em;
}
.list{
  color: white;
}
h5{
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: large;
  font-weight: 500;
}
.new{
  margin:0 auto;
  text-align: center;
  margin-bottom: 2em;
  border-radius: 1.5em;
  background-color: blue;
  max-width: 10em;
}
h4{
  color: white;
  padding: 0.6em;
}
.products{
   margin:0 auto;
  text-align: center;
  margin-bottom: 2em;

  max-width: 60em;
}
</style>
