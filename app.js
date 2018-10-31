//plugin
var Vue =         require("vue/dist/vue.js");
var VueResource = require("vue-resource");
var VueRouter =   require("vue-router");

//register plugin
Vue.use(VueResource);
Vue.use(VueRouter);

//component
var main =     require("./www/js/components/layout/main.vue");
var blog =     require("./www/js/components/layout/blog.vue");
var notFound = require("./www/js/components/error/template.vue");

//config console log
Vue.config.devtools = false
Vue.config.productionTip = false

//routes
var routes = [
  { name: "Главная", isActive: true, path: "/", component: main, },
  { name: "Блог", isActive: true, path: "/blog", component: blog },
  { name: "", isActive: true, path: "/contacts", component: notFound },
  { name: "Страница не найдена", isActive: false, path: "*", component: notFound },
]

//init router
var router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach(function (to, from, next) {
  next()
})

router.afterEach(function (to, from) {
  window.document.title = to.name != "" ? to.name : "Страница не найдена";
})

//init vue
new Vue({
  router,
  data: {
    isActiveGrid: true
  }
}).$mount("#app")