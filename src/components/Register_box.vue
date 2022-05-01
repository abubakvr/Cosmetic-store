<template>
    <v-container width="100%" height="100%" class="my-9">
         <v-dialog
            v-model="dialog"
            transition="dialog-top-transition"
            width="500"
            >
                <v-card>
                    <v-card-title class="text-h5 lighten-2 white--text" style="background-color:#222222">
                    {{headerMessage}}
                    </v-card-title>

                    <v-card-text class="py-4">
                        {{contentMessage}}
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        v-if="headerMessage === 'Success'"
                        plain
                        color="#141414 white--text"
                        @click="$router.push('/cart')"
                    >
                        View Cart
                    </v-btn>
                    <v-btn
                        plain
                        color="#141414"
                        @click="dialog = false"
                    >
                        Close
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
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
                                    <v-text-field type="text" :rules="[rules.required]" v-model="firstname" outlined label="Firstname"></v-text-field>
                                    <v-text-field type="email" :rules="[rules.email, rules.required]" v-model="email" outlined label="Email"></v-text-field><v-spacer></v-spacer>
                                    <v-text-field type="number" :rules="[rules.required]" v-model="telephone" outlined label="Phone"></v-text-field><v-spacer></v-spacer>
                                    <v-text-field type="password" :rules="[rules.password, rules.required]" v-model="password" outlined label="Password"></v-text-field><v-spacer></v-spacer>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field type="text" :rules="[rules.required]" v-model="lastname" outlined label="Lastname"></v-text-field>
                                    <v-text-field type="text" :rules="[rules.required]" v-model="address" outlined label="Address"></v-text-field>
                                    <v-select v-model="gender" :rules="[rules.required]" :items="genderItems" outlined label="Gender"></v-select>
                                    <v-text-field type="password" :rules="[rules.password, rules.confirmPassword, rules.required]" v-model="confPass" outlined label="Confirm Password"></v-text-field>
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
            dialog:false,
            headerMessage:'',
            contentMessage:'',
            rules: {
                email: (v) => !!(v || "").match(/@/) || "Please enter a valid email",
                length: (len) => (v) =>
                    (v || "").length >= len || `Invalid character length, required ${len}`,
                required: (v) => !!v || "This field is required",
                password: (value) =>
                    (value && value.length >= 5) || "Minimum length is 5 characters",
                confirmPassword: (value) =>
                    (this.password == value) || "Passwords do not match",
            },
        }
    },
    methods:{
        submit(){
            if(this.$refs.form.validate()) {
                const meta = {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email:this.email.toLowerCase(),
                    telephone:this.telephone,
                    address: this.address,
                    gender: this.gender,
                    password:this.password
                }
                this.$store.dispatch("startLoader")
                axios.post('https://shoppeefy.herokuapp.com/api/users/register/',meta, {})
                   .then((res) =>{
                        if(res.data.message === "success"){
                            this.$router.push('/login')
                        }else{
                            this.headerMessage = "Error"
                            this.contentMessage = "User Not registered. Try again"
                            this.dialog = true
                        }
                    })
                    .catch(() => { 
                        this.headerMessage = "Error"
                        this.contentMessage = "User not registered. Try again later"
                        this.dialog = true
                    })

                // this.$store.dispatch("signUp", meta);
            }
        }
    },
    mounted(){
        this.$store.dispatch("stopLoader")
    }
}
    
        
</script>

<style scoped>

</style>