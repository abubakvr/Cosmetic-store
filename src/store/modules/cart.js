import axios from 'axios'
// import router from '../../router'

const state = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    price: [],
    myCart: [],
    shipping: [],
    subTotal: [],
    total: [],
    items:[],
    itemNo:[]
}

const getters = {
    getUserItems: state => state.myCart,
    getSubTotal: state => state.subTotal,
    getShipping: state => state.shipping,
    getTotal: state => state.total,
    getItemNo: state => state.itemNo = state.myCart.length,
    Deet: (state) => (id) => {
        return state.cart.filter(items => items.userID === id);
    },
}

const mutations = {
    setCart: (state, cart) => (state.myCart = cart),
    removeFromCart: (state, id) => state.myCart = state.myCart.filter(item => item._id !== id),
    setSubTotal: (state) => state.subTotal = state.myCart.reduce((n, {cartItemPrice}) => n + parseFloat(cartItemPrice), 0),
    setShipping: (state) => state.shipping = state.myCart.reduce((n, {itemShippingPrice}) => n + parseFloat(itemShippingPrice), 0),
    setTotal: (state) => state.total = state.subTotal + state.shipping,
    setBadge:(state, cartt) => state.myCart.push(cartt),
}

const actions = {
    async fetctCartItems({commit}){
        const response = await axios.get('http://localhost:5200/api/cart/');
        commit('setCart', response.data)
    },

    async fetchByUser({commit}, user){
        const response =  await axios.get(`http://localhost:5200/api/cart/user/${user}`)
        commit('setCart', response.data)
        commit('setSubTotal')
        commit('setShipping')
        commit('setTotal')
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

        commit('setBadge', data)
    },

    async deleteFromCart({commit}, id){
        await axios.delete(`http://localhost:5200/api/cart/${id}`)
        .catch(err => console.log(err));
        commit('removeFromCart', id)
        commit('setSubTotal')
        commit('setShipping')
        commit('setTotal')
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}
