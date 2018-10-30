<template>
  <div class="page">
    <app-nav class="menu--main"></app-nav>
    <h1>404</h1>
  </div>
</template>

<script>
  var nav = require("./app-nav.vue");

  module.exports = {
    components: {
      appNav: nav
    }
  }
</script>