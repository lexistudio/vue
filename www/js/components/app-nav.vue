<template>
  <ul class="menu">
    <li class="menu__li" v-for="(item, index) in list" :key="index" v-if="item.isActive">
      <router-link :to="item.path" class="menu__a">
        {{ item.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
  module.exports = {
    props: ["list"]
  }
</script>

<style>
  .menu {
    display: flex;
    list-style: none;
  }
  .menu__li {
    margin-left: 30px;
  }
  .menu__li:first-child {
    margin-left: 0;
  }
  .menu__a {
    color: #fff;
    height: 70px;
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 1;
  }
  .menu__a.router-link-exact-active {
    border-bottom: 4px solid #0067F4;
  }
</style>