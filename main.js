//plugin
var Vue = require("vue/dist/vue.js");
var VueRouter = require("vue-router");

//component
var header = require("./www/js/components/app-head.vue");
var news = require("./www/js/components/app-news.vue");

//register plugin
Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    { path: "/", component: header },
    { path: "/news", component: news },
  ]
});

new Vue({
  router
}).$mount("#app")