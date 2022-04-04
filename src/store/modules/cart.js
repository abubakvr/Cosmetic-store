import axios from 'axios'
import router from '../../router'

const state = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    cart: [],
    myCart: []
}

const getters = {
    allCartItems: state => state.cart,
    getUserItems: (state) => (id) => {
        return state.cart.filter(items => items.userID === id);
     }
}

const mutations = {
    setCart: (state, cart) => (state.cart = cart),
    removeFromCart: (state, id) => state.cart = state.cart.filter(item => item._id !== id),
}

const actions = {
    async fetctCartItems({commit}){
        const response = await axios.get('http://localhost:5200/api/cart/');
        commit('setCart', response.data)
    },

    async addToCart({commit}, payload){
        const data = {
            userID: payload.userID,
            itemID: payload. itemID,
            cartItemName: payload.cartItemName,
            cartItemPrice: payload.cartItemPrice,
            itemShippingPrice: payload.itemShippingPrice,
            cartItemQuantity: payload.cartItemQuantity,
            cartItemImage: payload.cartItemImage
        }

        await axios.post('http://localhost:5200/api/cart/', data, {})
        .then(router.push('/cart'))
        .catch(err => console.log(err));
        commit('setCart')

    },

    async deleteFromCart({commit}, id){
        await axios.delete(`http://localhost:5200/api/cart/${id}`)
        commit('removeFromCart', id)
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}
