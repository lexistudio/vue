//plugin
const Vue         = require("vue/dist/vue.js");
const VueResource = require("vue-resource");
const VueRouter   = require("vue-router");
const NProgress   = require("./nprogress.js");

//register plugin
Vue.use(VueResource);
Vue.use(VueRouter);

//component
const Main            = require("./site/layout/main.vue");
const Blog            = require("./site/layout/blog.vue");
const BlogDetail      = require("./site/layout/blogDetail.vue");
const NotFound        = require("./site/error/template.vue");

//config console log
Vue.config.devtools = false
Vue.config.productionTip = false

//routes
const routes = [
  { name: "Главная", isActive: true, path: "/", component: Main,},
  { name: "Блог", isActive: true, path: "/blog", component: Blog },
  { name: "Блог 1", isActive: true, path: "/blog/*", component: BlogDetail },
  { name: "Контакты", isActive: true, path: "/contacts", component: NotFound },
  { name: "Страница не найдена", isActive: false, path: "*", component: NotFound },
]

//init router
const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeResolve(function (to, from, next) {
  if (to.name) {
    NProgress.start();
    window.document.title = to.name != "" ? to.name : "Страница не найдена";
  }
  next()
})

router.afterEach(function (to, from) {
  setTimeout(function () {
    NProgress.done();
  }, 300)
})

//init vue
new Vue({
  router,
  data: {
    isActiveGrid: false
  }
}).$mount("#app")