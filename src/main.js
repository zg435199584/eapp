// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './APP';
import VueResource from 'vue-resource';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
    {path: '/goods', component: goods },
    {path: '/ratings', component: ratings },
    {path: '/seller', component: seller }
]

const router = new VueRouter({
    linkActiveClass:'active',
    routes
})

new Vue({
    el:'#app',
    router,
    components:{App},
    template:'<App/>'
})

/* router.push('/goods'); */