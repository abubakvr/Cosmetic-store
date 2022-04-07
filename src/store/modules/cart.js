import axios from 'axios'
// import router from '../../router'

const state = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    cart: [],
    myCart: []
}

const getters = {
    getUserItems: state => state.myCart,
    Deet: (state) => (id) => {
        return state.cart.filter(items => items.userID === id);
    },
}

const mutations = {
    setCart: (state, cart) => (state.myCart = cart),
    setAllCart: (state, cart) => (state.cart = cart),
    removeFromCart: (state, id) => state.cart = state.cart.filter(item => item._id !== id),
}

const actions = {
    async fetctCartItems({commit}){
        const response = await axios.get('http://localhost:5200/api/cart/');
        commit('setCart', response.data)
    },

    async fetchByUser({commit}, user){
        const response =  await axios.get(`http://localhost:5200/api/cart/user/${user}`)
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
        .catch(err => console.log(err));
        commit('setCart')

    },

    async deleteFromCart({commit}, id){
        await axios.delete(`http://localhost:5200/api/cart/${id}`)
        .catch(err => console.log(err));
        commit('removeFromCart', id)
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}
