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
    removeProduct: (state, id) => state.products = state.products.filter(product => product.id !== id),
}

const actions = {
    async fetctCartItems({commit}){
        const response = await axios.get('http://localhost:5200/api/cart/');
        commit('setCart', response.data)
    },

    async signUp(payload){
        let data = {
            firstname: payload.firstname,
            lastname: payload.lastname,
            email: payload.email,
            password: payload.password,
            country: payload.country,
            gender: payload.gender
        }
        await axios.post('http://localhost:5200/api/users/register/',data, {withCredentials:true})
        .then((response) => {
            if(response.data.message === 'success'){
                router.push('/login')
                .catch(error => {
                    console.info(error.message)
                });
            }else{
                console.log("Sign In Error")
            }
            
        })
        .catch((error) => {
            console.log('Error>>> ', error)
        });
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
