<template>
  <div class="">
    <div class="row">
      <div class="col-sm-3" v-for="item in items" :key="item.id">
        <cards :item="item" />
      </div>
    </div>
  </div>
</template>
<script>
import cards from "@/shared/cards.vue";
export default {
  props: ["items"],
  components: {
    cards,
  },
};
</script>

<style scoped>
.col-sm-3 {
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>
