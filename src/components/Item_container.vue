<template>
    <div>
        <div class="mainBox">
            <div class="buy_item">
                <div class="product_side">
                    <img src="../assets/img/Beautiful-woman-face-makeup-artist-applies-eyeshadow-Stock-Photo-02.png">
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
                <div class="def_side">
                    <p style="font-size: 22px">Black Powder Pencil with abity draw itself on demand</p>
                    <hr style="border-bottom: 1px  solid #dfdfdf; border-top:0px">
                    <v-chip class="my-3 black--text" color="#dfdfdf"> Official Store</v-chip>
                    <div class="price_div">
                        <div class="price_content">
                            <p style="font-size: 25px"><b>₦16,000</b></p>
                            <p style="font-size: 14px; margin-top:-5px">18 orders</p>
                        </div>
                    </div>
                    <div class="choose_option">
                        <p style="font-size: 14px; margin-top:10px">Shipping ₦1,200</p>
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
                    <div class="text-center my-3" style="width:100%;">
                        <v-dialog
                        v-model="dialog"
                        transition="dialog-top-transition"
                        width="500"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                color="orange white--text"
                                width="100%" 
                                style="margin-top:5px;"
                                v-bind="attrs"
                                v-on="on"
                                >
                                Add to cart
                                </v-btn>
                            </template>

                            <v-card>
                                <v-card-title class="text-h5 lighten-2 white--text" style="background-color:#222222">
                                Success
                                </v-card-title>

                                <v-card-text class="py-4">
                                    {{quantity}}Item(s) suucessufully added to cart. You can checkout or continue shopping
                                </v-card-text>

                                <v-divider></v-divider>

                                <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
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


export default {
    name: 'ItemContainer',
    data () {
      return {
        dialog: false,
        quantity: 1,
        minusBtn: false
      }
    },
    methods: {
        plusfunc(){
            this.quantity++;
        },

        minusfunc(){
            this.quantity--;
        },

        quantityfunc(){
            if(this.quantity == 1){
               return this.minusBtn = false;
            }
        }
    },
    mounted(){
    }
}

</script>

<style scoped>

    .mainBox{
        width: 900px;
        margin: 30px auto;
        height: 600px;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    }

    .buy_item div{
        float: left;
        display: inline;
    }

    .buy_item{
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

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
        .mainbox{
            width: 55%;
        }
    }
</style>