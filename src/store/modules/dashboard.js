import axios from 'axios'

const state = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    orders:[],
    userOrders:[]
}

const getters = {
    getOrders: state => state.orders,
    getUserOrders: state => state.userOrders
}

const mutations = {
    setOrders:(state, orders) => (state.orders = orders),
    setUserOrders: (state) => state.userOrders = state.orders.filter(item => item.userID === state.user._id),
}

const actions = {
    async fetchOrders({commit}){
        const response =  await axios.get('http://localhost:5200/api/orders/')
        commit('setOrders', response.data)
        commit('setUserOrders')
    },

    setOrders({commit}){
        commit('setUserOrders')
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}