import axios from 'axios'
import router from '../../router'

const state = {
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    profile: [],
    usr: [],
    users: []
}

const getters = {
    getId: state => state.user._id,
    getProfile: state => state.profile,
    getToken: state => state.token,
    getUser: (state) => state.user,
    getUsers:state => state.users
}

const mutations = {
    setToken: (state, token) => (state.token = token),
    setUser: (state, user) => (state.user = user),
    setUsr: (state, usr) => (state.usr = usr),
    setUsers: (state, users) => (state.users = users),
    signOut(state) {
        state.user = null
        state.token = null
        localStorage.clear()
    },
}

const actions = {
    async signIn({commit}, payload){
        let data = {
            email: payload.email,
            password: payload.password
        }
        await axios.post('https://shoppeefy.herokuapp.com/api/users/login/',data, {withCredentials:true})
        .then((response) => {
            if(response.data.message === 'success'){
                commit('setToken', response.data.token)
                commit('setUser', response.data.user)
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                router.push('/')
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
    async signUp({commit}, payload){
        const data = {
            firstname: payload.firstname,
            lastname: payload.lastname,
            country: payload.country,
            email: payload.email,
            gender: payload.gender,
            password: payload.password
        }
        await axios.post('https://shoppeefy.herokuapp.com/api/users/register/',data, {})
        .then((response) => {
            if(response.data.message === 'success'){
                router.push('/login')
                .catch(error => {
                    console.info(error.message)
                });
            }else{
                console.log("Sign In Error")
                commit('setUsr')
        }
            
        })
        .catch((error) => {
            console.log('Error>>> ', error)
        });
    },

    async fetchUsers({commit}){
        const response = await axios.get('https://shoppeefy.herokuapp.com/api/users/getusers');
        commit('setUsers', response.data)
    },

    logOut({ commit }) {
        router.push('/login')
        commit('signOut')
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}