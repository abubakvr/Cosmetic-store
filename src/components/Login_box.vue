<template>
    <v-container width="100%" height="100%" class="my-12">
        <v-col>
            <v-row justify="center" >
                <v-sheet color="white" elevation="4" width="500px" height="390px" class="my-12">
                    <v-toolbar flat color="#222222" class="white--text">
                        <v-toolbar-title>Login</v-toolbar-title>
                    </v-toolbar>
                    <v-sheet height="10%" class="pa-8">
                        <v-text-field v-model="email" outlined label="Email"></v-text-field>
                        <v-text-field v-model="password" outlined label="Password"></v-text-field>
                        <v-btn color="orange" width="100%" height="50px" class="white--text h3--text" style="font-size:19px" @click="submit()">Login</v-btn>
                        <v-row>
                            <v-btn plain color="blue darken-3" justify="start" class="px-4 my-6">Forgot Password</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn plain color="blue darken-3" style="float:right" class="px-3 my-6" @click="$router.push('/register')">Register</v-btn>
                        </v-row>
                    </v-sheet>
                </v-sheet>
            </v-row>
        </v-col>
    </v-container>
</template>

<script>

// import axios from 'axios';

export default {
    name: "LoginBox",
    data(){
        return{
            email: '',
            password: '',
        }
    },
    methods:{
        submit(){
            const meta = {
                email:this.email,
                password:this.password
            }

            // axios.post('http://localhost:5200/api/users/login/',meta, {withCredentials:true}).then((res) => {
            //     localStorage.setItem('token', res.data.token);
            //     localStorage.setItem('user', res.data.userId);
            //     this.$router.go(-1)
            // })
            // .catch(err => console.log(err));

            this.$store.dispatch("signIn", meta);
            console.log(this.$store.state.token)

        }
    },
    mounted(){
 
    }
}
</script>

<style scoped>

</style>