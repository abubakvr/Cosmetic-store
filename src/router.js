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
import Register from "./views/Register.vue";
import Account from "./views/Account.vue";
import Orders from "./views/Orders.vue";
import Dashboard from "./views/Dashboard.vue";
import ViewOrders from "./views/View_orders.vue";
import ManageProducts from "./views/Manage_products.vue";
import AddProducts from "./views/Add_products.vue";
import ManageUsers from "./views/Manage_users.vue";


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
            path: '/register',
            name: 'Register',
            component: Register
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
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            children: [
                {
                  // UserProfile will be rendered inside User's <router-view>
                  // when /user/:id/profile is matched
                  path: '',
                  component: ViewOrders,
                },
                {
                  // UserPosts will be rendered inside User's <router-view>
                  // when /user/:id/posts is matched
                  path: 'orders',
                  component: ViewOrders,
                },
                {
                    // UserProfile will be rendered inside User's <router-view>
                    // when /user/:id/profile is matched
                    path: 'manageproducts',
                    component: ManageProducts,
                },
                {
                    // UserPosts will be rendered inside User's <router-view>
                    // when /user/:id/posts is matched
                    path: 'addproducts',
                    component: AddProducts,
                },
                {
                    // UserProfile will be rendered inside User's <router-view>
                    // when /user/:id/profile is matched
                    path: 'manageusers',
                    component: ManageUsers,
                }
              ],
        },
    ]
})