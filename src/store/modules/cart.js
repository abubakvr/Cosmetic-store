import axios from 'axios'

const state = {
    cart: [],
}

const getters = {
    allItems: state => state.cart,
}

const mutations = {
    setProducts: (state, cart) => (state.cart = cart),
    removeProduct: (state, id) => state.products = state.products.filter(product => product.id !== id),
}

const actions = {
    async fetctCartItem({commit}){
        const response = await axios.get('http://localhost:5200/api/cart/');
        commit('setCart', response.data)
    },

    async addToCart({commit}, payload){
        const response = await axios.post('http://localhost:5200/api/cart/', {payload, completed: false});
        commit('newCartItem', response.data)
    },

    async deleteFromCart({commit}, id){
        await axios.delete(`http://localhost:5200/api/cart/${id}`)
        commit('removeFromCart')
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}