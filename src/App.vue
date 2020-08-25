<template>
  <div id="app">
    <Header msg="Lançamentos"/>
    <b-container class="col-md-3">
      <div>
        <ProductForm :storeProduct="storeProduct" :name="name" />
      </div>
      <div class="product-list-container">
        <ProductsList :products="products" />
      </div>
      <div class="qtd-produtos-container">Lançamentos: {{qtdProducts}}</div>
      <div class="qtd-produtos-container">Valor Total: {{totalSumm}}</div>
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ProductForm from "./components/ProductForm.vue";
import ProductsList from "./components/ProductsList.vue";

export default {
  name: "App",
  components: {    
    Header,
    ProductForm,
    ProductsList,
  },
  data() {
    return {
      products: [],
      updated: false,
    };
  },
  computed: {
    qtdProducts() {
      return this.products.length;
    },
  
    totalSumm: function(){
      return this.products.reduce(function(total, item){
        return total + (item.qtde * item.value); 
      },0);
    },

  },
  
  methods: {
    storeProduct(newProduct) {
      this.products.push(newProduct);
    },
  },
};
</script>

<style>
  #app {
    margin-top: 40px;
  }
  .product-list-container {
    margin-top: 50px;
  }
</style>