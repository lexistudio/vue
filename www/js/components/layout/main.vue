<template>
  <div>
    <header class="head">
      <div class="page">
        <app-nav></app-nav>
        <div class="content" v-on:click="tx">
          <div class="span">
            <span>V</span>
            <span>u</span>
            <span>e</span>
          </div>
          <div>
            <span>P</span>
            <span>r</span>
            <span>o</span>
            <span>j</span>
            <span>e</span>
            <span>c</span>
            <span>t</span>
            <span>s</span>
          </div>
        </div>
      </div>
    </header>

    <div class="page">
      <div class="preim">
        <div class="preim__item">tset</div>
        <div class="preim__item">tset</div>
        <div class="preim__item">tset</div>
        <div class="preim__item">tset</div>
      </div>
    </div>
  </div>
</template>

<script>
  var nav = require("../menu/template.vue");

  module.exports = {
    methods: {
      tx: function (e) {
        document.querySelector(".content").classList.toggle("active")
      }
    },
    components: {
      appNav: nav
    }
  }
</script>

<style scoped>
  .head {
    height: 700px;
    background: #35495E;
  }

  .content {
    color: #fff;
    height: 541px;
    line-height: 1;
    font-weight: bold;
    display: flex;
    text-transform: uppercase;
    flex-direction: column;
    justify-content: center;
    font-size: 0;
    user-select: none;
  }

  .content .span {
    color: #41B883;
  }

  .content span {
    display: inline-block;
    font-size: 80px;
    letter-spacing: .05em;
    opacity: 1;
    transform: translateX(0) scale(1);
    transition: opacity .2s, transform .2s;
  }

  .content.active span {
    opacity: 0;
    transform: translateX(20px) scale(.2);
  }

  .content span:nth-child(2) {
    transition-delay: .1s;
  }

  .content span:nth-child(3) {
    transition-delay: .2s;
  }

  .content span:nth-child(4) {
    transition-delay: .3s;
  }

  .content span:nth-child(5) {
    transition-delay: .4s;
  }

  .content span:nth-child(6) {
    transition-delay: .5s;
  }

  .content span:nth-child(7) {
    transition-delay: .6s;
  }

  .content span:nth-child(8) {
    transition-delay: .7s;
  }

  .preim {
    display: flex;
    justify-content: space-between;
    margin-top: -100px;
  }
  .preim__item {
    box-shadow: 0 5px 30px rgba(0,0,0,.2);
    width: 315px;
    height: 200px;
    background: #fff;
    box-sizing: border-box;
    padding: 20px;
  }
</style>