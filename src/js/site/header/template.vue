<template>
  <header class="head">
    <div class="page">
      <app-nav></app-nav>
    </div>
  </header>
</template>

<script>
  var nav = require("../menu/template.vue");

  module.exports = {
    components: {
      appNav: nav
    }
  }
</script>

<style>
  .head {
    background: #35495E;
    height: 300px;
  }
</style>