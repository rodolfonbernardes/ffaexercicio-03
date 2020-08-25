<template>
  <div class="header">
    <img class="brand" alt="Vue logo" src="../assets/logo.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  height: 250px;
    border-top: 10px solid #383f5d;
    background:#FFEDE1;
}
.header h1{
  display:inline-block;
}
.clear{
  clear: both;
  }
</style>
