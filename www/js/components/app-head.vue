<template>
  <header class="head">
    <div class="page">
      <app-nav></app-nav>
    </div>
  </header>
</template>

<script>
  var nav = require("./app-nav.vue");

  module.exports = {
    components: {
      appNav: nav
    }
  }
</script>

<style>
  .head {
    background: #212529;
  }
</style>