import axios from 'axios'

const state = {
    products: [],
    product: [],
    category: [],
    loader:false,
}

const getters = {
    allProducts: state => state.products,
    prodCategory: state => state.category,
    oneProduct: state => state.product,
    getLoader: state => state.loader
}

const mutations = {
    setProducts: (state, products) => (state.products = products),
    setCategory: (state, category) => (state.category = category),
    setProduct: (state, product) => (state.product = product),
    newProduct: (state, product) => (state.products.unshift(product)),
    updateTodo: (state, updateProduct) => {
        const index = state.products.findIndex(product => product.id === updateProduct.id);
        if(index !== -1){
            state.products.splice(index, 1, updateProduct)
        }
    },
    removeProduct: (state, id) => state.products = state.products.filter(product => product.id !== id),
    startLoader:(state) => state.loader = true,
    stopLoader:(state) => state.loader = false
}

const actions = {
    async fetchProducts({commit}){
        const response = await axios.get('https://shoppeefy.herokuapp.com/api/product');
        commit('setProducts', response.data)
    },


    async fetchOneProduct({commit}, id){
        const response =  await axios.get(`https://shoppeefy.herokuapp.com/api/product/getone/${id}`)
        commit('setProduct', response.data)
    },

    async fetchByCategory({commit}, category){
        const response =  await axios.get(`https://shoppeefy.herokuapp.com/api/product/category/${category}`)
        commit('setCategory', response.data)
    },

    async addProducts({commit}, payload){
        const response = await axios.post('https://shoppeefy.herokuapp.com/api/product/', {payload, completed: false});
        commit('newProduct', response.data)
    },

    async deleteProduct({commit}, id){
        await axios.delete(`https://shoppeefy.herokuapp.com/api/product${id}`)
        commit('removeProduct')
    },
    async updateProduct({ commit }, updateProduct){
        const response =  await axios.put(`https://shoppeefy.herokuapp.com/api/product/${updateProduct.id}`, updateProduct);
        commit('updateTodo', response.data)
    },

    startLoader: ({commit}) => (
        commit('startLoader')
    ),

    stopLoader: ({commit}) => (
        commit('stopLoader')
    )
}

export default {
    state,
    getters,
    mutations,
    actions
}