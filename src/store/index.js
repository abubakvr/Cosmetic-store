import Vue from "vue"
import Vuex from "vuex"

import cart from './modules/cart';
import products from './modules/products'
import dashboard from './modules/dashboard'
import user from './modules/user'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        cart,
        products,
        dashboard,
        user
    }
})