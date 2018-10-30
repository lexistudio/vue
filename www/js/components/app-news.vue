<template>
  <div>
    <app-head></app-head>
    <div class="page">
      <div class="news">
        <div class="news__item" v-for="(item, index) in list" :key="index">
          {{ item.id }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var header = require("./app-head.vue");

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

<style>
  .news {
    border: 1px solid #000;
    display: flex;
    flex-wrap: wrap;
  }
  .news__item {
    border: 1px solid #000;
    padding: 10px;
    box-sizing: border-box;
    width: 20%;
  }
</style>