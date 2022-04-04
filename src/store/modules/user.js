import axios from 'axios'
import router from '../../router'

const state = {
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    profile: [],
    usr: []
}

const getters = {
    getId: state => state.user._id,
    getProfile: state => state.profile,
    currentUser: state => state.token,
    getUsr: (state) => state.usr,
}

const mutations = {
    setProfile: (state, profile) => (state.profile = profile),
    setUser: (state, user) => (state.user = user),
    setUsr: (state, usr) => (state.usr = usr),
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
        await axios.post('http://localhost:5200/api/users/login/',data, {withCredentials:true})
        .then((response) => {
            if(response.data.message === 'success'){
                commit('setUsr', response.data.user)
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                router.push('/')
                .catch(() => {
                    console.log("Error")
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
        await axios.post('http://localhost:5200/api/users/register/',data, {})
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
    logOut({ commit }) {
        this.$router.push('/')
        commit('signOut')
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}