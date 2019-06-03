<template>
  <div>
    <div
      class='row product-list'
      style='background-color: whitesmoke; padding-top: 100px; padding-bottom: 100px;'
    >
      <div class='col-lg-2'></div>
      <div class='col-lg-10'>
        <div class='row'>
          <div class='col-lg-4'>
            <h4>Lorem of Lorem Ipsum</h4>
          </div>
          <div id='search' class='col-lg-6'>
            <form>
              <input
                type='text'
                placeholder='Search..'
                name='search'
                id='search-input'
                class='form-control'
              >
            </form>
          </div>
        </div>
        <div class='row' style='margin-top: 30px;'>
          <app-product v-for='i in content' :key='num[i]'>
            <div v-if='i.author'>
              <label style='margin-right:5px; font-size:14px;'>{{i.author.by}}</label>
              <b style='font-size:14px; color: grey;'>{{i.author.lorem}}</b>
            </div>
            <p>{{i.text}}</p>
            <div v-if='i.format' style='margin-bottom:10px;'>
              <b>Format</b>
              {{i.format}}
            </div>
            <button type='button' class='btn btn-outline-info'>{{i.button}}</button>
          </app-product>
        </div>
      </div>
      <div class='col-lg-2'></div>
    </div>
  </div>
</template>
<script>
import Product from "./Product.vue";
export default {
  data: function() {
    return {
      content: {
        1: {
          button: "Public",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        2: {
          format: "csv",
          button: "Public",
          author: { by: "Lorem by", lorem: "Lorem upsum Dolor" },
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        3: {
          format: "csv",
          button: "Open",
          author: { by: "Lorem by", lorem: "Lorem upsum Dolor" },
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      },
      num: [1, 2, 3],
      commonText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    };
  },
  components: {
    appProduct: Product,
  },
};
</script>
<style>
#search-input {
  background: url(../assets/search.svg) no-repeat;
  background-size: 8%;
  text-indent: 30px;
  width: 92%;
  background-color: white;
}
.product-list {
  margin-top: 100px;
}
</style>