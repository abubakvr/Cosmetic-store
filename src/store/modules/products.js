import axios from 'axios'

const state = {
    products: [],
    product: []
}

const getters = {
    allProducts: state => state.products,
    oneProduct: state => state.product
}

const mutations = {
    setProducts: (state, products) => (state.products = products),
    setProduct: (state, product) => (state.product = product),
    newProduct: (state, product) => (state.products.unshift(product)),
    updateTodo: (state, updateProduct) => {
        const index = state.products.findIndex(product => product.id === updateProduct.id);
        if(index !== -1){
            state.products.splice(index, 1, updateProduct)
        }
    },
    removeProduct: (state, id) => state.products = state.products.filter(product => product.id !== id),

}

const actions = {
    async fetchProducts({commit}){
        const response = await axios.get('http://localhost:5200/api');
        commit('setProducts', response.data)
    },

    async fetchOneProduct({commit}, id){
        const response =  await axios.get(`http://localhost:5200/api${id}`)
        commit('setProduct', response.data)
    },

    async addProducts({commit}, payload){
        const response = await axios.post('http://localhost:5200/api', {payload, completed: false});
        commit('newProduct', response.data)
    },

    async deleteProduct({commit}, id){
        await axios.delete(`http://localhost:5200/api${id}`)
        commit('removeProduct')
    },
    async updateProduct({ commit }, updateProduct){
        const response =  await axios.put(`http://localhost:5200/api/${updateProduct.id}`, updateProduct);
        commit('updateTodo', response.data)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}