<template>
  <fragment>
    <b-td>{{product.name}}</b-td>
    <b-td>{{product.qtde}}</b-td>
    <b-td>{{product.value}}</b-td>
    <b-td>{{product.qtde * product.value}}</b-td>
  </fragment>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: Object,
  },
};
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }
</style>