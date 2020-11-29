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
          <h5> <i class="fas fa-cart-plus mr-4"></i>User Orders</h5>
          <h5> <i class="fas fa-cart-plus mr-4"></i>Product List</h5>
          <h5> <i class="fas fa-cart-plus mr-4"></i>New Item</h5>
           <h5> <i class="fas fa-cart-plus mr-4"></i>log out</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.col-sm-2 {
  background-color: black;
}
.row {
  height: 50em;
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
</style>
