<template>
  <div class='container'>
    <app-header></app-header>
    <app-middle></app-middle>
    <app-product-grid></app-product-grid>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Middle from "./components/Middle.vue";
import ProductGrid from "./components/Products.vue";
export default {
  components: {
    appHeader: Header,
    appMiddle: Middle,
    appProductGrid: ProductGrid,
  },
};
</script>
<style>
.myWidth {
  max-width: 1700px;
}
</style>
