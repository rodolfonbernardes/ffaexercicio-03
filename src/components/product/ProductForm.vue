<template>
  <div>
    <b-form @submit="onFormSubmit">
      <b-form-group label="Produto" label-for="product-name" :description="product.nameError">
        <b-form-input v-model="product.name" type="text" required placeholder="Digite o nome do produto"></b-form-input>
      </b-form-group>
      <b-form-group label="Qtde" label-for="product-qtde" :description="product.qtdeError">
        <b-form-input v-model="product.qtde" type="number" min="1" required placeholder="Digite a qtde do produto"></b-form-input>
      </b-form-group>
      <b-form-group label="Valor unitário" label-for="product-value" :description="product.valueError">
        <b-form-input v-model="product.value" type="number" min="1" required placeholder="Digite o valor unitário do produto"></b-form-input>
      </b-form-group>
      <b-button type="submit">Gravar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "ProductForm",
  data() {
    return {
      product: {
        name: "",
        nameError: "",
        value: "",
        valueError: "",
      },
      isNameLimitExceeded: false,
      isPriceLessThanZero: false,
    };
  },
  props: {
    storeProduct: Function,
  },
  watch: {
    "product.name"() {
      if (this.product.name.length > 30) {
        this.isNameLimitExceeded = true;
        this.product.nameError = "Nome não pode ser superior a 30 caracteres.";
      } else {
        this.isNameLimitExceeded = false;
        this.product.nameError = "";
      }
    },
    "product.value"() {
      if (this.product.value < 0) {
        this.isValueLessThanZero = true;
        this.product.valueError = "Valor não pode ser menor que zero";
      } else {
        this.isValueLessThanZero = false;
        this.product.valueError = "";
      }
    },
  },
  methods: {
    onFormSubmit(e) {
      e.preventDefault();
      let newProduct = {
        name: this.product.name,
        qtde: this.product.qtde,
        value: this.product.value,
      };
      this.$store.dispatch("storeProduct", newProduct);
      this.cleanForm();
    },
    cleanForm() {
      this.product.name = "";
      this.product.qtde = "";
      this.product.value = "";
    },
  },
};
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }
</style>