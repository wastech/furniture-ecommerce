<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <div class="image">
          <img
            src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/C/86899_1529181630.jpg"
            alt=""
          />
        </div>

        <div class="name">
          <h3>Osmond Armchair <span class="price">$5555</span></h3>
        </div>

        <div class="category">
          <h5>chiar</h5>
        </div>
      </div>

      <div class="col-sm-6">
        <p class="text">
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam
          eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
          rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed
          ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
          lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
          ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci
          eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet
          nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum
          sodales, augue velit cursus nunc,
        </p>
        <div class="icon">
          <i class="fas fa-cart-plus"></i>

          <h3 class="cart">+ add to cart</h3>
        </div>
      </div>
    </div>

    <div class="title">
      <h1> Similar Product</h1>
    </div>
    <matchedProduct/>

     <div class="title">
      <h1> New Product</h1>
    </div>

    <newProduct/>

  </div>
</template>
<script>
import matchedProduct from '@/components/matchedProduct.vue'
import newProduct from '@/components/newProduct.vue'
export default {
  components:{
    matchedProduct,
    newProduct
  }
}
</script>
<style scoped>
.title h1 {
  margin-bottom: 1.5em;
  margin-top: 1.5em;
  text-shadow: 1px 1px 1px #000;
}
img {
  width: 100%;
}
.price {
  text-align: right;
  margin-left: 70%;
  box-shadow: 12px 12px 16px 0 rgba(255, 255, 255, 0.3) inset,
    -8px -8px 12px 0 rgba(0, 0, 0, 0.25) inset;
  background-color: white;
  padding: 6%;
  margin-top: -10em;
}
.name h3 {
  margin-top: 3%;
}
.row {
  background: transparent;
  box-shadow: 6px 6px 14px 0 rgba(0, 0, 0, 0.2),
    -8px -8px 18px 0 rgba(255, 255, 255, 0.55);
  border-radius: 18px;
  padding: 4px 30px 20px;
  min-height: 380px;
}
p {
  padding: 1.5em;
  font-size: 1em;
}
.icon {
  text-align: center;
  font-size: 3em;
}
.fas {
  background-color: black;
  padding: 0.6em;
  color: white;
  border-radius: 30%;
}
h3.cart {
  padding: 2em;
  background-color: #f6f5f1;
  border-radius: 1.5em;
  margin-top: -1.5em;
}
</style>
