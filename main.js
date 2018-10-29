//plugin
var Vue = require("vue/dist/vue.js");
var VueRouter = require("vue-router");

//component
var header = require("./www/js/components/app-head.vue");
var news = require("./www/js/components/app-news.vue");
var notFound = require("./www/js/components/app-not-found.vue");

//register plugin
Vue.use(VueRouter);

var router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: header },
    { path: "/news", component: news },
    { path: "*", component: notFound },
  ]
});

new Vue({
  router
}).$mount("#app")