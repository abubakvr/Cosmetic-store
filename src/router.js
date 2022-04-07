import Vue from 'vue';
import Router from 'vue-router';

import Home from "./views/Home.vue"
import Shopall from "./views/Shopall.vue";
import Newitems from "./views/Newitems.vue";
import Eyes from "./views/Eyes.vue";
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
import store from "./store/index";


Vue.use(Router)

const routes = [
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
            path: '/eyeproducts',
            name: 'Eyes',
            component: Eyes
        },
        {
            path: '/faceproducts',
            name: 'Face',
            component: Face
        },
        {
            path: '/lipsproducts',
            name: 'Lips',
            component: Lips
        },
        {
            path: '/viewitem/:id',
            name: 'ViewItem',
            component: ViewItem
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart,
            meta: {
                requiresAuth: true
            }
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
            component: Account,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/orders',
            name: 'Orders',
            component: Orders,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/dashboard',
            component: Dashboard,
            children: [
                {
                  path: '',
                  component: ViewOrders,
                },
                {
                  path: 'orders',
                  component: ViewOrders,
                },
                {
                    path: 'manageproducts',
                    component: ManageProducts,
                },
                {
                    path: 'addproducts',
                    component: AddProducts,
                },
                {
                    path: 'manageusers',
                    component: ManageUsers,
                }
              ],
        },
    ]

const router = new Router({
    routes
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  
    if (requiresAuth && !store.state.user.token) {
      next("/login");
    } else {
      next();
    }
});

export default router
