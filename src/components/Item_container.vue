<template>
    <div>
        <div class="mainBox">
            <div class="buy_item">
                <div class="product_side">
                    <img :src="'http://localhost:5200' + oneProduct.productImage">
                    <div class="share_div">
                        <span style="font-size: 17px">SHARE THIS PRODUCT</span><br>
                        <v-btn icon dark color="black">
                            <v-icon>mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn icon color="black">
                            <v-icon>mdi-twitter</v-icon>
                        </v-btn>
                    </div>
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
                <div class="def_side">
                    <p style="font-size: 22px">{{oneProduct.productName }}</p>
                    <hr style="border-bottom: 1px  solid #dfdfdf; border-top:0px">
                    <v-chip class="my-3 black--text" color="#dfdfdf">{{ oneProduct.productBrand }}</v-chip>
                    <div class="price_div">
                        <div class="price_content">
                            <p style="font-size: 25px"><b>₦{{ oneProduct.productPrice }}</b></p>
                            <p style="font-size: 14px; margin-top:-5px">{{ oneProduct.productQuantity }} available</p>
                        </div>
                    </div>
                    <div class="choose_option">
                        <p style="font-size: 14px; margin-top:10px">Shipping ₦1,200-------ID is {{ getId }}</p>
                        <hr style="border-bottom: 1px  solid #dfdfdf; border-top:0px">
                        <p style="font-size: 17px; margin-top:10px">Quantity</p>
                        <v-btn icon small dark color="white" style="background-color:#444444" @click="minusfunc()" :disabled="quantity == 1">
                            <v-icon>mdi-minus</v-icon>
                        </v-btn>
                        {{quantity}}
                        <v-btn icon small dark color="white" style="background-color:#444444" @click="plusfunc()">
                            <v-icon>mdi-plus</v-icon>
                        </v-btn><br>
                    </div>
                    <div id="#cart-btn" class=" text-center my-3" style="width:100%;">
                       <v-btn
                        color="orange white--text"
                        width="100%" 
                        style="margin-top:5px;"
                        class="cartButton"
                        @click="addToCart(oneProduct)"
                        >
                        Add to cart
                        </v-btn>
                    </div>
                    <div style="width:100%">
                        <hr style="border-bottom: 1px  solid #dfdfdf; border-top:0px; margin-top:10px">
                        <p style="font-size: 12px; margin-top:10px"><v-icon small>mdi-map-marker-outline</v-icon> Ships everywhere within Nigeria</p>
                        <p style="font-size: 12px; margin-top:10px"><v-icon small>mdi-bike-fast</v-icon> Express Delivery</p>
                        <p style="font-size: 12px; margin-top:10px"><v-icon small>mdi-information</v-icon> Full refund on damaged items</p>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import axios from 'axios'

import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'ItemContainer',
    data () {
      return {
        dialog: false,
        quantity: 1,
        minusBtn: false,
        headerMessage:'',
        contentMessage:'',
        id: this.$route.params.id,
      }
    },
    methods: {
        ...mapActions(['fetchOneProduct']),

        plusfunc(){
            this.quantity++;
        },

        minusfunc(){
            this.quantity--;
        },

        addToCart(product){
                const meta = {
                    userID: this.getId,
                    itemID: product. _id,
                    cartItemName: product.productName,
                    cartItemPrice: product.productPrice,
                    itemShippingPrice: product.productShipping,
                    cartItemQuantity: this.quantity,
                    cartItemImage: product.productImage
                }

                axios.post('http://localhost:5200/api/cart/',meta, {})
                .then((res) =>{
                    if(res.data.message === "success"){
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
            }

    },
    computed:mapGetters(['oneProduct', 'getId']),
    mounted(){
        this.fetchOneProduct(this.id)
    }
}

</script>

<style scoped>

    .mainBox{
        width: 900px;
        margin: 30px auto;
        overflow: auto;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    }

    .buy_item div{
        float: left;
        display: inline;
    }

    .product_side{
        width: 350px;
        height: 600px;
        padding: 15px;   
        margin: auto; 
    }   

    .product_side img{
        width: 100%;
        height: 300px;
        margin: auto;
    }

    .share_div{
        margin-top: 10px;
    }

    .def_side{
        width: 550px;
        height: 600px;
        padding: 15px;
    }

    .price_div{
        width: 100%;
        height: 65px;
        margin-top: 0px;
    }

    .price_header{
        width: 100%;
        height: 40px;
        color: white;
        padding: 5px;
    }

    .price_content{
        width: 100%;
    }

    .choose_option{
        height: auto;
        width: 100%;
    }

    @media only screen and (min-width: 1500px) {
        .mainBox{
            width: 50%;
        }
    }

    @media only screen and (min-width: 1200px) {
        .mainBox{
            width: 900px;
        }
    }

    @media only screen and (max-width: 800px) {
        .mainBox{
            width: 90%;
        }

        .product_side{
            width: 37%;
            height: 600px;
            padding: 15px;   
            margin: auto; 
        } 
        
        .def_side{
            width: 63%;
            height: 600px;
            padding: 15px;
        }

        .product_side img{
            width: 100%;
            height: 240px;
        }
    }


    @media only screen and (max-width: 500px) {
        .mainBox{
            width: 95%;
            margin: 30px auto;
            padding: 10px;
        }

        .buy_item div{
            float: none;
            width: 95%;
            margin: auto;
            padding: 0px;
        }

        .share_div{
            visibility:hidden;
            display: none;
        }

        .product_side{
            width: 95%;
            margin: auto;
            height: 300px;
        }   

        .cartButton{
            margin-top: 20px ;
        }

        .product_side img{
            width: 100%;
            height: 300px;
            margin: auto;
        }

    }
</style>