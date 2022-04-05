<template>
    <div class="cart_items">
        <div class="mainBox">
            <div class="box_header">
                <p>Cart Items</p>
            </div>
            <div class="box_content">
                <div class="cart_checkbox">
                    <v-checkbox label="Select All" v-model="allItem" color="orange black--text" :value="getUserItems(getId)" @click="getAllPrice()"></v-checkbox>
                </div>
                <v-dialog
                    v-model="dialog"
                    transition="dialog-top-transition"
                    persistent
                    :retain-focus="false"
                    width="500"
                >


                    <v-card>
                        <v-card-title class="text-h5 lighten-2 white--text" style="background-color:#222222">
                        Warning
                        </v-card-title>

                        <v-card-text class="py-4">
                            Are you sure you want to Delete this item?
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            plain
                            color="#141414 white--text"
                            @click="confirmDelete()" 
                        >
                            Yes
                        </v-btn>
                        <v-btn
                            plain
                            color="#141414"
                            @click="dialog = false"
                        >
                            No
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
               <div class="buy_item" v-for="cartItem in getUserItems(getId)" :key="cartItem._id" >
                    <div class="cart_checkbox">
                        <v-checkbox color="orange" v-model="item" :value="cartItem" @change="getPrices()"></v-checkbox>
                    </div>
                    <div class="product_side" @click="$router.push(`/viewitem/${cartItem.itemID}`)">
                        <img :src="'http://localhost:5200' + cartItem.cartItemImage" style="cursor: pointer;">
                    </div>
                    <div class="def_side">
                        <span style="font-size: 15px">{{cartItem.cartItemName}}</span>
                        <v-btn fab small plain style="float:right; padding-bottom:15px" @click="removeItem(cartItem._id)">
                            <v-icon>mdi-trash-can</v-icon>
                        </v-btn>
                        <hr style="border-bottom: 1px  solid #dfdfdf; border-top:-0px; margin-top:7px">
                            <span style="font-size: 20px; margin-top:15px" ><b>₦{{cartItem.cartItemPrice}}</b></span>
                            <br>
                            <span style="font-size: 12px; margin-top:10px" >18 available</span>
                            <br>
                            <span style="font-size: 12px; margin-top:5px" >Shipping ₦{{cartItem.itemShippingPrice}}</span>
                            <br>
                            <br>

                        <div class="choose_option">
                            <v-row>
                                <v-btn icon small dark color="white" style="background-color:#555555" @click="minusFunc()" :disabled="quantity == 1">
                                    <v-icon>mdi-minus</v-icon>
                                </v-btn>
                                {{cartItem.cartItemQuantity}}
                                <v-btn icon small dark color="white" style="background-color:#555555" @click="plusFunc()">
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>  
                                <span class="btn-buy">
                                    <v-btn color="orange white--text">Buy Now</v-btn>
                                </span>
                            </v-row>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>  
        <div class="order_summary">
            <div class="box_header">
                <p>Order Summary</p>
            </div>
            <div class="box_content">
                <p style="font-size: 15px;" >Subtotal: <span style="float:right" >N{{subTotal}}</span></p>
                <p style="font-size: 15px;" >Shipping: <span style="float:right" >N{{shipping}}</span></p>
                <br>
                <p style="font-size: 20px;" >Total: <span style="float: right" >N{{totalPrice}}</span></p>
                <v-btn color="orange white--text" width="100%">Buy({{prods}})</v-btn>
            </div>
        </div>
        <v-snackbar v-model="snackbar" >
            Item Deleted
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
import {mapActions, mapGetters } from 'vuex'

export default {
    name: 'CartBox',
    data(){
        return{
            quantity:1,
            item: [],
            allItem:[],
            prods:0,
            subTotal:"0.00",
            shipping: "0.00",
            totalPrice:"0.00",
            deleteProduct:'',
            dialog: false,
            snackbar:false
            // 82522403296
        }
    },
    methods:{
        ...mapActions(['fetctCartItems']),
        plusFunc(){
            this.quantity++
        },

        minusFunc(){
            this.quantity--
        },

        getAllPrice(){
            let  myprice = this.allItem.slice(0, -1);
            this.subTotal = myprice.reduce((n, {cartItemPrice}) => n + parseFloat(cartItemPrice), 0);
            this.shipping = myprice.reduce((n, {itemShippingPrice}) => n + parseFloat(itemShippingPrice), 0);

            this.totalPrice = this.subTotal + this.shipping;

            this.prods = myprice.length;
        },

        getPrices() {
            const price = this.item;
            this.subTotal = price.reduce((n, {cartItemPrice}) => n + parseInt(cartItemPrice), 0);
            this.shipping = price.reduce((n, {itemShippingPrice}) => n + parseInt(itemShippingPrice), 0);

            this.totalPrice = this.subTotal + this.shipping;
            this.prods = price.length;
        },

        removeItem(id){
            this.dialog = true;
            this.deleteProduct = id
        },

        confirmDelete(){
            const id = this.deleteProduct
            this.$store.dispatch("deleteFromCart", id);
            this.dialog = false;
            this.snackbar = true
        },

    },
    computed:{ 
        ...mapGetters(['getUserItems', 'getId']),

    },
    mounted(){
        this.fetctCartItems()
    }
}
</script>

<style scoped>
    .mainBox{
        width: 750px;
        margin: 30px;
        margin-bottom: 250px;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        overflow: none;
        float: left;
    }

    .box_header{
        height: 50px;
        width: 100%;
        border-bottom: 1px solid #e0dfdf;
        padding: 13px;
        font-size: 20px;
        color: #141414;
    }

    .box_content{
        padding: 15px;
    }

    .buy_item div{
        float: left;
        display: inline;
    }

    .buy_item{
        height: 270px;
        width: 100%;
    }

    .product_side{
        width: 230px;
        height: auto;
        padding: 15px;   
        margin: auto; 
    }   

    .product_side img{
        width: 200px;
        height: auto;
        margin: auto;
    }

    .def_side{
        width: 400px;
        height: auto;
        padding: 15px;
    }

    .price_div{
        width: 100%;
        height: 120px;
        border: 1px solid #4b4b4b;
        margin-top: 00px;
    }

    .price_header{
        width: 100%;
        height: 40px;
        background-color: #494949;
        color: white;
        padding: 5px;
    }

    .price_content{
        width: 100%;
        padding: 7px;
    }

    .choose_option{
        height: auto;
        width: 100%;
        padding: 15px;
    }

    .cart_items{
        width: 1300px;
        margin: auto;
    }

    .btn-buy{
        margin-left: 170px;
    }

    .order_summary {
        float: right;
        display: inline;;
        position: relative;
        top: 0px;
        width: 450px;
        height: 270px;
        margin: 30px auto;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    }

    @media only screen and (max-width: 1450px) {
        .cart_items{
            width: 80%;
            margin: auto;
        }

        .mainBox{
            width:65%;
            margin: 30px auto;
            padding: 0px;
            box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
            padding: 0px;
        }

        .order_summary {
            float:left;
            display: inline;;
            top: 0px;
            width: 33%;
            height: 270px;
            margin: 30px auto;
            box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
            margin-left: 2%;
        }

        .product_side{
            width: 30%;
            height: auto;
            padding: 15px;   
            margin: auto; 
        }   

        .product_side img{
            width: 100%;
            height: auto;
            margin: auto;
        }

        .share_div{
            margin-top: 10px;
        }

        .def_side{
            width: 63%;
            height: auto;
            padding: 15px;
        }

         .btn-buy{
            margin-left: 100px;
            float: right;
        }
    }

    @media only screen and (max-width: 800px) {
        .cart_items{
            width: 100%;
            margin: auto;
        }

        .mainBox{
            width:96%;
            margin: 30px auto;
            padding: 0px;
            box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
            margin-left: 2%;
            padding: 0px;
        }

        .order_summary {
            float:left;
            display: inline;;
            top: 0px;
            width: 96%;
            height: 270px;
            margin: 30px auto;
            box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
            margin-left: 2%;
        }

        
    }

    @media only screen and (max-width: 700px) {
        .cart_items{
            width: 95%;
            margin: auto;
        }

        .cart_items div{
            float: none;
            display: inline;;
        }

        .mainBox{
            width:90%;
            margin: 30px auto;
            padding: 0px;
            box-shadow: none;
            padding: 0px;
        }

        .buy_item{
            height: auto;
            width: 100%;
            padding: 0px;
            margin: 10px auto;
        }

        .buy_item div{
            float: none;
            display: block;
        }

        .product_side{
            width: 100%;
            height: auto;
            padding: 5px;   
            margin: auto; 
        }   

        .product_side img{
            width: 100%;
            height: auto;
            margin: auto;
        }

        .cart_checkbox{
            margin-left: 0px;
        }

        .def_side{
            width: 100%;
            height: auto;
            padding: 5px;
            margin: auto;
        }

        .choose_option{
            height: auto;
            width: 100%;
            padding: 15px;
        }
   
        .order_summary{
            height: unset;
            width: unset;
            visibility: collapse;
            display: none;
            overflow: hidden;
        }

        .btn-buy{
            float: right;
            margin-left: 0px;
        }
    }
</style>