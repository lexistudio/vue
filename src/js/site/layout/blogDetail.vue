<template>
  <div>
    <app-head></app-head>
    <div class="page">
      <h1>Blog Detail</h1>
    </div>
  </div>
</template>

<script>
  var header = require("../header/template.vue");

  module.exports = {
    components: {
      appHead: header
    }
  }
</script>

<style scoped>
  .news {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
    padding: 15px 0;
  }
  .news__item {
    width: 25%;
    box-sizing: border-box;
    padding: 15px;
    display: flex;
  }
  .news__content {
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 0 0 1px #ccc inset;
    padding: 15px;
  }
  .news__img {
    height: 200px;
    background: #35495E;
    margin: -15px;
    margin-bottom: 15px;
  }
  .news__title {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.2;
    text-transform: capitalize;
  }
  p {
    font-size: 16px;
    line-height: 1.2;
    padding-top: 12px;
  }
  @media screen and (max-width: 1200px) {
    .news {
      margin: 0 -10px;
    }
    .news__item {
      padding: 10px;
    }
  }
  @media screen and (max-width: 980px) {
    .news__item {
      width: 50%;
    }
  }
  @media screen and (max-width: 765px) {
    .news__item {
      width: 100%;
    }
  }
</style>