//plugin
const Vue         = require("vue/dist/vue.js");
const VueResource = require("vue-resource");
const VueRouter   = require("vue-router");

//register plugin
Vue.use(VueResource);
Vue.use(VueRouter);

//component
const main     = require("./site/layout/main.vue");
const blog     = require("./site/layout/blog.vue");
const notFound = require("./site/error/template.vue");

//config console log
Vue.config.devtools = false
Vue.config.productionTip = false

//routes
const routes = [
  { name: "Главная", isActive: true, path: "/", component: main,},
  { name: "Блог", isActive: true, path: "/blog", component: blog },
  { name: "", isActive: true, path: "/contacts", component: notFound },
  { name: "Страница не найдена", isActive: false, path: "*", component: notFound },
]

//init router
const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach(function (to, from, next) {
  NProgress.start();
  next()
})

router.afterEach(function (to, from) {
  NProgress.done();
  window.document.title = to.name != "" ? to.name : "Страница не найдена";
})

//init vue
new Vue({
  router,
  data: {
    isActiveGrid: true
  }
}).$mount("#app")