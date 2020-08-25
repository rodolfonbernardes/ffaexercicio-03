<template>
  <b-table-simple>
    <b-thead>
      <b-th>Produto</b-th>
      <b-th>Qtde</b-th>
      <b-th>Valor unitário</b-th>
      <b-th>Valor Total do item</b-th>
    </b-thead>
    <b-tbody>
      <b-tr v-for="product in products" v-bind:key="product.name" cols="5">
        <ProductItem :product="product" />
      </b-tr>
    </b-tbody>
  </b-table-simple>
</template>

<script>
import ProductItem from "./ProductItem";

export default {
  name: "ProductsList",
  components: {
    ProductItem,
  },
  props: {
    products: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>