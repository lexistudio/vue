<template>
  <div class="news">
    <div class="news__item" v-for="(item, index) in list" :key="index">
      {{ item }}
    </div>
  </div>
</template>

<script>
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