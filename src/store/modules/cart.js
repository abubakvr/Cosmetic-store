import axios from 'axios'
// import router from '../../router'

const state = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    myCart: [],
    shipping: 0,
    subTotal: 0,
    total: 0,
    itemNo: 0,
    quantity: ''
}

const getters = {
    getUserItems: state => state.myCart,
    getSubTotal: state => state.subTotal,
    getShipping: state => state.shipping,
    getTotal: state => state.total,
    getQuantity: state => state.quantity,
    getItemNo: state => state.itemNo = state.myCart.length
}

const mutations = {
    setCart: (state, cart) => (state.myCart = cart),
    removeFromCart: (state, id) => state.myCart = state.myCart.filter(item => item._id !== id),
    setSubTotal(state) {
        const pricesArray = state.myCart.map(product => product.cartItemPrice * product.cartItemQuantity)
        state.subTotal = pricesArray.flat().reduce((acc, sum) => acc + sum)
    },
    setShipping(state) {
        const priceArray = state.myCart.map(product => product.itemShippingPrice * product.cartItemQuantity)
        state.shipping = priceArray.flat().reduce((acc, sum) => acc + sum)
    },
    //setShipping: (state) => state.shipping = state.myCart.reduce((n, {itemShippingPrice}) => n + parseFloat(itemShippingPrice), 0),
    setQuantity: (state) => state.quantity = state.myCart.reduce((n, { cartItemQuantity }) => n + parseFloat(cartItemQuantity), 0),
    setTotal: (state) => state.total = state.subTotal + state.shipping,
    setBadge: (state, cartt) => state.myCart.push(cartt),
    clearBadge(state) {
        state.myCart = [],
        state.subTotal = 0,
        state.shipping = 0,
        state.total = 0
    },
}

const actions = {
    async fetctCartItems({ commit }) {
        const response = await axios.get('http://localhost:5200/api/cart/');
        commit('setCart', response.data)
    },

    async fetchByUser({ commit }, user) {
        const response = await axios.get(`http://localhost:5200/api/cart/user/${user}`)
        commit('setCart', response.data)
        commit('setSubTotal')
        commit('setShipping')
        commit('setTotal')
        commit('setQuantity')
    },

    async addToCart({ commit }, payload) {
        const data = {
            userID: payload.userID,
            itemID: payload.itemID,
            cartItemName: payload.cartItemName,
            cartItemPrice: payload.cartItemPrice,
            itemShippingPrice: payload.itemShippingPrice,
            cartItemQuantity: payload.cartItemQuantity,
            cartItemImage: payload.cartItemImage
        }
        commit('setBadge', data)
    },

    async deleteFromCart({ commit }, id) {
        await axios.delete(`http://localhost:5200/api/cart/${id}`)
            .catch(err => console.log(err));
        commit('removeFromCart', id)
        commit('setSubTotal')
        commit('setShipping')
        commit('setTotal')
        commit('setQuantity')
    },

    clearCart({ commit }) {
        commit('clearBadge')
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
