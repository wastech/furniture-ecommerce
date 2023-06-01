<template>
  <div class="">
    <div class="card">
      <router-link
        v-bind:to="{ name: 'productdetail', params: { id: item._id } }"
      >
        <img :src="item.photo" class="card-img-top" alt="item.name" />
      </router-link>
      <div class="card-body">
        <h5 class="card-title">{{ item.name }}</h5>
        <p class="card-text">
          #{{ item.price }} <span><i class="fas fa-cart-plus"></i></span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
};
</script>
<style scoped>
.card {
  box-shadow: 12px 12px 16px 0 rgba(255, 255, 255, 0.3) inset,
    -8px -8px 12px 0 rgba(0, 0, 0, 0.25) inset;

  margin-bottom: 1.5em;
}
.card-title {
  color: #534b4b;
  font-size: medium;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  font-weight: 700;
  -webkit-box-orient: vertical;
}
.fas {
  font-size: 2em;
  float: right;
  margin-bottom: 0em;
}
img {
  height: 25vh;
  width: 100%;
  object-fit: cover;
}
.card {
  margin-top: 1em;
}
@media only screen and (max-width: 576px) {
  img {
    height: 30vh;
    object-fit: cover;
  }
  .card {
    margin-top: 1em;
  }
}

@media only screen and (min-width: 768px) {
  img {
    height: 20vh;
  }
}
@media only screen and (min-width: 992px) {
  img {
    height: 20vh;
    object-fit: cover;
  }
}
</style>
