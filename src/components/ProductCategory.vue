<template>
    <div class="mainbox">
        <div class="box_header">
            <p v-if="category !== 'Body'">{{category}}</p>
            <p v-else>New Items</p>
        </div>
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
                    Continue Shopping
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <div class="productbox"  v-for="prod in prodCategory" :key="prod._id" style="cursor: pointer;">
            <div class="inBox">
                <div @click="$router.push(`/viewitem/${prod._id}`)" >
                    <img :src="'http://localhost:5200' + prod.productImage">
                    <br>
                    <br>
                    <p v-if="prod.productName.length < 35" class="nameTag" >{{ prod.productName }}</p>
                    <p v-else class="nameTag">{{ prod.productName.substring(0,32)+'...'  }}</p>
                    <hr style="border-bottom: 1px  solid #dfdfdf; border-top:-0px; margin-top:14px">
                    <h3>₦{{ prod.productPrice }}</h3>
                    <hr style="border-bottom: 1px  solid #dfdfdf; border-top:-0px; margin-top:7px">
                    <p>{{ prod.productQuantity}} available</p>
                </div>
                <v-btn outlined color="orange" width="100%" @click="addToCart(prod)">Add to cart</v-btn>
            </div>
        </div>
         <v-snackbar v-model="snackbar">
            Item Added to cart
            <template v-slot:action="{ attrs }">
                <v-btn
                color="pink"
                text
                v-bind="attrs"
                @click="snackbar = false"
                >
                Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
import axios from "axios";

import {mapActions, mapGetters } from 'vuex'

export default{
        props: ['category'],
        name:"ProductCategory",
        data(){
            return{
                snackbar: false,
                headerMessage:'',
                contentMessage:'',
                dialog: false,
            }
        },
        methods:{
            ...mapActions(['fetchByCategory']),

            addToCart(product){
                const meta = {
                    userID: this.getId,
                    itemID: product. _id,
                    cartItemName: product.productName,
                    cartItemPrice: product.productPrice,
                    itemShippingPrice: product.productShipping,
                    cartItemQuantity: 1,
                    cartItemImage: product.productImage
                }
                    
                axios.post('http://localhost:5200/api/cart/',meta, {})
                .then((res) =>{
                    if(res.data.message === "success"){
                        this.$store.dispatch("addToCart", meta);
                        this.headerMessage = "Success"
                        this.contentMessage = "Item successfully added to cart"
                        this.dialog = true
                    }else{
                        this.headerMessage = "Error"
                        this.contentMessage = "Item not added. Try again later"
                        this.dialog = true
                    }
                })
                .catch(() => { 
                    this.headerMessage = "Error"
                    this.contentMessage = "Item not added. Try again later"
                    this.dialog = true
                })


                // this.$store.dispatch("addToCart", meta);

            },
        },
        computed: mapGetters(['prodCategory', 'getId']),
        mounted(){
            this.fetchByCategory(this.category)
        }
    }
</script>

<style scoped>
    .mainbox{
        width: 70%;
        height: auto;
        margin: 80px auto;
        margin-bottom: 250px;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        overflow: auto;
    }

    .box_header{
        height: 70px;
        width: 100%;
        border-bottom: 1px solid #e0dfdf;
        padding: 10px;
        font-size: 25px;
        color: #141414;
    }

    .productbox{
        float: left;
        display: inline;
        margin: auto;
        margin-bottom: 10px;
        margin-right: 0.1%;
        width: 19.9%;
        height: 500px;
        padding: 17px;
    }

    .productbox .inBox{
        width: 100%;
        height: 100%;
        padding: 10px;
        margin: auto;
    }

    .inBox{
        width: 100%;
        margin: auto;
        transition: transform .08s; /* Animation */
    }
    
    .cart-btn{
        display: none;
    }
    
    .productbox :hover{
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        transform: scale(1.01); 
    }

    .inBox :hover{
        box-shadow: none;
        transform: scale(1.00); 
    }

    .productbox div img{
        width: 100%;
        height: 220px;
    }

    .nameTag{
        height:60px; 
        font-size: 15px
    }

    @media only screen and (max-width: 1450px) {
        .mainbox{
            width: 75%;
            height: auto;
            margin: 30px auto;
            margin-bottom: 250px;
            box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        }

        .productbox div img{
            width: 100%;
            height: 180px;
        }

         .productbox{
            height: 445px;
        }
    }

   @media only screen and (max-width: 1100px) {
        .mainbox{
            width: 90%;
            margin: 30px auto;
            margin-bottom: 250px;
            box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        }

        .productbox div img{
            width: 100%;
            height: 200px;
            margin-left: 10%;
        }

         .productbox{
            height: 470px;
        }
    }


    @media only screen and (max-width: 800px) {
        .mainbox{
            width: 90%;
            margin: 30px auto;
            margin-bottom: 300px;
            box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        }

        .mainbox .productbox{
            float: left;
            display: inline;
            margin: auto;
            margin-bottom: 10px;
            margin-right: 0.1%;
            height: auto;

        }

        .productbox{
            width: 33.2%;
        }

        .productbox div img{
            width: 100%;
            height: 150px;
        }

        .class_btn{
            display: none;
        }
    }

     @media only screen and (max-width: 500px) {
        .mainbox{
            width: 90%;
            margin: 30px auto;
            margin-bottom: 450px;
            box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        }

        .mainbox .productbox{
            float: left;
            display: inline;
            margin: auto;
            margin-bottom: 10px;
            margin-right: 0.1%;
            height: auto;

        }

        .productbox{
            width: 49.8%;
        }

        .productbox div img{
            width: 100%;
            height: 150px;
        }

        .class_btn{
            display: none;
        }

        .nameTag{
            height:70px; 
            font-size: 15px;
            overflow:hidden
        }
    }


</style>