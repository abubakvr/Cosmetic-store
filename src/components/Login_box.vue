<template>
    <v-container width="100%" height="100%" class="my-12">
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
                <v-sheet color="white" elevation="2" width="500px" height="390px" class="my-12">
                    <v-toolbar flat color="#fff" class="black--text px-2">
                        <v-toolbar-title>Login</v-toolbar-title>
                    </v-toolbar>
                    <v-sheet height="10%" class="px-5 py-3" >
                        <v-form ref="form">
                            <v-text-field 
                                v-model="email" 
                                outlined label="Email" 
                                type="email"
                                @keypress.enter="signIn()"
                                append-icon="mdi-email"
                                :rules="[rules.email, rules.required]"
                            >
                            </v-text-field>
                            <v-text-field 
                                v-model="password" 
                                type="password"
                                outlined label="Password" 
                                @keypress.enter="signIn()"
                                append-icon="mdi-lock"
                                :rules="[rules.password, rules.required]"
                            >
                            </v-text-field>
                            <v-btn color="orange" width="100%" height="50px" class="white--text h3--text" style="font-size:19px" @click="submit()">Login</v-btn>
                            <v-row>
                                <v-btn plain color="blue darken-3" justify="start" class="px-4 my-6">Forgot Password</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn plain color="blue darken-3" style="float:right" class="px-3 my-6" @click="$router.push('/register')">Register</v-btn>
                            </v-row>
                        </v-form>
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
            form: false,
            dialog:false,
            rules: {
                email: (v) => !!(v || "").match(/@/) || "Please enter a valid email",
                length: (len) => (v) =>
                    (v || "").length >= len || `Invalid character length, required ${len}`,
                required: (v) => !!v || "This field is required",
                password: (value) =>
                    (value && value.length >= 1) || "Minimum length is 5 characters",
            },
        }
    },
    methods:{
        submit(){
            const meta = {
                email:this.email.toLowerCase(),
                password:this.password
            }

            // axios.post('http://localhost:5200/api/users/login/',meta, {withCredentials:true}).then((res) => {
            //     localStorage.setItem('token', res.data.token);
            //     localStorage.setItem('user', res.data.userId);
            //     this.$router.go(-1)
            // })
            // .catch(err => console.log(err));

            if(this.$refs.form.validate()) {
                this.$store.dispatch("startLoader")
                this.$store.dispatch("signIn", meta)
                    
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