<template>
  <ul class="menu">
    <li class="menu__li">
      <router-link to="/" class="menu__a">
        Главная
      </router-link>
    </li>
    <li class="menu__li">
      <router-link to="/news" class="menu__a">
        Новости
      </router-link>
    </li>
    <li class="menu__li">
      <router-link to="/contacts" class="menu__a">
        Контакты
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
  .menu {
    display: flex;
    list-style: none;
    padding: 20px 0;
  }
  .menu--main .menu__a {
    color: #000;
  }
  .menu__li {
    margin-left: 30px;
  }
  .menu__li:first-child {
    margin-left: 0;
  }
  .menu__a {
    color: #fff;
    text-decoration: none;
  }
  .menu__a.router-link-exact-active {
    color: #F54352;
  }
</style>