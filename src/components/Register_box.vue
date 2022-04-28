<template>
    <v-container width="100%" height="100%" class="my-8">
        <v-col>
            <v-row justify="center" >
                <v-sheet color="white" elevation="4" width="600px" height="auto" class="my-8">
                    <v-toolbar flat color="#222222" class="white--text">
                        <v-toolbar-title>Register</v-toolbar-title>
                    </v-toolbar>
                    <v-sheet class="pa-10">
                        <v-row>
                            <v-col cols="6">
                                <v-text-field v-model="firstname" outlined label="Firstname"></v-text-field>
                                <v-text-field v-model="email" outlined label="Email"></v-text-field><v-spacer></v-spacer>
                                <v-text-field v-model="telephone" outlined label="Phone"></v-text-field><v-spacer></v-spacer>
                                <v-text-field v-model="password" outlined label="Password"></v-text-field><v-spacer></v-spacer>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="lastname" outlined label="Lastname"></v-text-field>
                                <v-text-field v-model="address" outlined label="Address"></v-text-field>
                                <v-select v-model="gender" :items="genderItems" outlined label="Gender"></v-select>
                                <v-text-field v-model="confPass" outlined label="Confirm Password"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                        <v-btn color="orange" width="100%" height="50px" class="white--text h3--text" style="font-size:19px" @click="submit()">Register</v-btn>
                        </v-row>
                        <v-row>
                            <v-btn plain color="blue" justify="start" class="px-0 my-2" @click="$router.push('/login')">Already have an account? Login</v-btn>
                        </v-row>
                    </v-sheet>
                </v-sheet>
            </v-row>
        </v-col>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    name: "registerBox",
    data(){
        return{
            firstname:'',
            lastname: '',
            email:'',
            telephone:'',
            address:'',
            genderItems:['Male', 'Female'],
            gender:'',
            password:'',
            confPass:'',
        }
    },
    methods:{
        submit(){
            const meta = {
                firstname: this.firstname,
                lastname: this.lastname,
                email:this.email,
                telephone:this.telephone,
                address: this.address,
                gender: this.gender,
                password:this.password
            }

            axios.post('http://localhost:5200/api/users/register/',meta, {}).
                then(this.$router.push('/login'))
                .catch(err => console.log(err));


            // this.$store.dispatch("signUp", meta);
            }
        }
    }
</script>

<style scoped>

</style>