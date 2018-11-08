<template>
  <div>
    <div class="page">
      <app-nav class="menu--main"></app-nav>
      <h1>404</h1>
    </div>
    <app-foot class="foot--dark"></app-foot>
  </div>
</template>

<script>
  var nav = require("../menu/template.vue");
  var Foot = require("../foot/template.vue");

  module.exports = {
    components: {
      appNav: nav,
      appFoot: Foot
    }
  }
</script>