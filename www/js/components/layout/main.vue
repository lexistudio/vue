<template>
  <div>
    <header class="head">
      <div class="page">
        <app-nav></app-nav>
      </div>
    </header>
    <div class="page">
      <h1>Main</h1>
    </div>
  </div>
</template>

<script>
  var nav = require("../menu/template.vue");

  module.exports = {
    components: {
      appNav: nav
    }
  }
</script>

<style scoped>
  .head {
    height: 700px;
    background: #333;
  }
</style>