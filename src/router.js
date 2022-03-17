import Vue from 'vue';
import Router from 'vue-router';

import Home from "./views/Home.vue"
import Shopall from "./views/Shopall.vue";
import Newitems from "./views/Newitems.vue";
import Bestsellers from "./views/Bestsellers.vue";
import Face from "./views/Face.vue";
import Lips from "./views/Lips.vue";
import ViewItem from "./views/View_item.vue";
import Cart from "./views/Cart.vue";
import Login from "./views/Login.vue";
import Account from "./views/Account.vue";
import Orders from "./views/Orders.vue";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/shopall',
            name: 'ShopAll',
            component: Shopall
        },
        {
            path: '/newitems',
            name: 'NewItems',
            component: Newitems
        },
        {
            path: '/bestsellers',
            name: 'BestSellers',
            component: Bestsellers
        },
        {
            path: '/shopface',
            name: 'Face',
            component: Face
        },
        {
            path: '/shoplips',
            name: 'Lips',
            component: Lips
        },
        {
            path: '/viewitem',
            name: 'ViewItem',
            component: ViewItem
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/account',
            name: 'Account',
            component: Account
        },
        {
            path: '/orders',
            name: 'Orders',
            component: Orders
        },
    ]
})