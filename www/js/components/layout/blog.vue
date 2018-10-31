<template>
  <div>
    <app-head></app-head>
    <div class="page">
      <div class="news">
        <div class="news__item" v-for="(item, index) in list" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var header = require("../header/template.vue");

  module.exports = {
    data: function () {
      return {
        url: "https://jsonplaceholder.typicode.com/posts",
        list: []
      }
    },
    methods: {
      post: function () {
        this.$http.get(this.url).then(function (e) {
          this.list = e.data
        }, function () {
          console.log("Error");
        })
      }
    },
    created: function () {
      this.post()
    },
    components: {
      appHead: header
    }
  }
</script>