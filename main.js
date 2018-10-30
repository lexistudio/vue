//plugin
var Vue =         require("vue/dist/vue.js");
var VueResource = require("vue-resource");
var VueRouter =   require("vue-router");

//register plugin
Vue.use(VueResource);
Vue.use(VueRouter);

//component
var header =   require("./www/js/components/app-head.vue");
var nav =      require("./www/js/components/app-nav.vue");
var main =     require("./www/js/components/app-main.vue");
var news =     require("./www/js/components/app-news.vue");
var notFound = require("./www/js/components/app-not-found.vue");

//config console log
Vue.config.devtools = false
Vue.config.productionTip = false

//routes
var routes = [
  { name: "Главная", isActive: true, path: "/", component: main },
  { name: "Новости", isActive: true, path: "/news", component: news },
  { name: "Контакты", isActive: true, path: "/contacts", component: notFound },
  { name: "Страница не найдена", isActive: false, path: "*", component: notFound },
]

//init router
var router = new VueRouter({
  mode: "history",
  routes
});

//init vue
new Vue({
  router,
  components: {
    appHead: header,
    appNav: nav,
  }
}).$mount("#app")