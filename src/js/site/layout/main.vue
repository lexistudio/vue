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

      <div class="video"></div>
    </div>

    <div class="catalog">
      <div class="page">
        <h2 class="title">Catalog</h2>
        <div class="catalog__elem">
          <div class="catalog__elem-item">test</div>
          <div class="catalog__elem-item">test</div>
          <div class="catalog__elem-item">test</div>
        </div>
      </div>
    </div>

    <app-foot></app-foot>
  </div>
</template>

<script>
  var Nav = require("../menu/template.vue");
  var Foot = require("../foot/template.vue");

  module.exports = {
    methods: {
      tx: function (e) {
        document.querySelector(".content").classList.toggle("active")
      }
    },
    components: {
      appNav: Nav,
      appFoot: Foot,
    }
  }
</script>

<style scoped>
  .head {
    height: 700px;
    background: #35495E url(/assets/image/head.jpg) no-repeat center / cover;
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

  @media screen and (max-width: 765px) {
    .preim {
      flex-direction: column;
    }
    .preim__item {
      width: 100%;
      margin-top: 30px;
    }
    .preim__item:first-child {
      margin-top: 0;
    }
  }

  .video {
    height: 500px;
    margin-top: 60px;
    background: #fff;
    box-shadow: 0 5px 30px rgba(0,0,0,.2);
    position: relative;
  }
  .video:before {
    content: "";
    width: 80px;
    height: 80px;
    background: #ccc;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 100%;
  }

  .catalog {
    background: #f6f6f6;
    margin-top: 60px;
    padding: 60px 0;
  }
  .catalog__elem {
    display: flex;
    justify-content: space-between;
  }
  .catalog__elem-item {
    width: calc(33.33333333333333% - 15px);
    background: #fff;
    box-sizing: border-box;
    padding: 20px;
    height: 400px;
  }

  .title {
    text-align: center;
    font-size: 40px;
    line-height: 1;
    padding-bottom: 30px;
  }
</style>