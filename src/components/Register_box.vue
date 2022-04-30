<template>
    <v-container width="100%" height="100%" class="my-9">
        <v-col>
            <v-row justify="center" >
                <v-sheet color="white" elevation="2" width="600px" height="auto" class="my-9">
                    <v-toolbar flat color="#fff" class="black--text px-0">
                        <v-toolbar-title>Register</v-toolbar-title>
                    </v-toolbar>
                    <v-sheet class="px-3 py-2">
                        <v-form ref="form">
                            <v-row>
                                <v-col cols="6">
                                    <v-text-field type="text" v-model="firstname" outlined label="Firstname"></v-text-field>
                                    <v-text-field type="email" v-model="email" outlined label="Email"></v-text-field><v-spacer></v-spacer>
                                    <v-text-field type="number" v-model="telephone" outlined label="Phone"></v-text-field><v-spacer></v-spacer>
                                    <v-text-field type="password" v-model="password" outlined label="Password"></v-text-field><v-spacer></v-spacer>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field type="text" v-model="lastname" outlined label="Lastname"></v-text-field>
                                    <v-text-field type="text" v-model="address" outlined label="Address"></v-text-field>
                                    <v-select v-model="gender" :items="genderItems" outlined label="Gender"></v-select>
                                    <v-text-field type="password" v-model="confPass" outlined label="Confirm Password"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                        <v-row>
                            <v-col cols="12">
                                <v-btn color="orange" width="100%" height="50px" class="white--text h3--text" style="font-size:19px" @click="submit()">Register</v-btn>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-btn plain color="blue darken-3" justify="start" class="px- my-2" @click="$router.push('/login')">Already have an account? Login</v-btn>
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
            form: false,
            rules: {
                email: (v) => !!(v || "").match(/@/) || "Please enter a valid email",
                length: (len) => (v) =>
                    (v || "").length >= len || `Invalid character length, required ${len}`,
                required: (v) => !!v || "This field is required",
                password: (value) =>
                    (value && value.length >= 5) || "Minimum length is 5 characters",
            },
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

            axios.post('https://shoppeefy.herokuapp.com/api/users/register/',meta, {}).
                then(this.$router.push('/login'))
                .catch(err => console.log(err));


            // this.$store.dispatch("signUp", meta);
            }
        }
    }
</script>

<style scoped>

</style>