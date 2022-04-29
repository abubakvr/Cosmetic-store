<template>
    <div class="cart_items">
        <v-btn v-if="getUserItems.length > 0" class="mobileCheckout" fab color="orange" @click="openMobileSummay">
            <v-badge
            color="#333333"
            overlap
            :content="getUserItems.length"
            >
            <v-icon color="white">mdi-cart</v-icon></v-badge>
        </v-btn>
        <!--Added Items Dialog-->
        <v-dialog
        v-model="checkout_dialog"
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
                     <v-btn
                    plain
                    color="#141414"
                    @click="$router.push('/orders')"
                >
                    View orders
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    plain
                    color="#141414"
                    @click="checkout_dialog = false"
                >
                    Continue Shopping
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

         <!--Moblie summary Dialog-->
        <v-dialog
        v-model="summary_dialog"
        transition="dialog-top-transition"
        style="background-color: #ffffff; box-shadow:none"
        width="500"
        >
            <!---Summary Box--->
            <div class="mobile_summary" >
                <div class="box_header">
                    <p>Order Summary</p>
                </div>
                <div class="box_content">
                    <p style="font-size: 15px;" >Subtotal: <span style="float:right" >N{{getSubTotal}}</span></p>
                    <p style="font-size: 15px;" >Shipping: <span style="float:right" >N{{getShipping}}</span></p>
                    <br>
                    <p style="font-size: 20px;" >Total: <span style="float: right" >N{{getTotal }}</span></p>
                    <paystack
                        :amount="parseInt(this.getTotal * 100)"
                        :email="this.getUser.email"
                        paystackkey="pk_test_f56f0dd5c762870e327443055e2896f81a028443"
                        :reference="reference"
                        :callback="processPayment"
                        :close="close"
                        style="width:100%"
                    >
                        <v-btn @click="closeMobileDialog" color="orange white--text" width="100%" :disabled="getUserItems.length == 0">
                                Buy({{getUserItems.length}})
                        </v-btn>
                    </paystack>
                </div>
            </div>
        </v-dialog>
        <!---Cart empty display--->
        <div v-if="getUserItems.length == 0" style="text-align:center; margin-top:160px; color:#333333">
            <h2>Cart is empty :)</h2>
        </div>
        <!---Cart Main Box--->
        <div class="mainBox" v-if="getUserItems.length > 0">
            <div class="box_header">
                <p>Cart Items({{getUserItems.length}})</p>
            </div>
            <div class="box_content">
                <!--Delete Items Dialog---->
                <v-dialog v-model="dialog" transition="dialog-top-transition" persistent :retain-focus="false" width="500" >
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
                        <v-btn  plain color="#141414 white--text" @click="confirmDelete()"  >
                            Yes
                        </v-btn>
                        <v-btn plain color="#141414" @click="dialog = false" >
                            No
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <!--- Cart Items array---->
               <div class="buy_item" v-for="cartItem in getUserItems" :key="cartItem._id" >
                    <div class="cart_checkbox">
                    </div>
                    <div class="product_side" @click="$router.push(`/viewitem/${cartItem.itemID}`)">
                        <img :src="'https://shoppeefy.herokuapp.com' + cartItem.cartItemImage" style="cursor: pointer;">
                    </div>
                    <div class="def_side">
                        <span style="font-size: 15px">{{cartItem.cartItemName}}</span>
                        <hr style="border-bottom: 1px  solid #dfdfdf; border-top:-0px; margin-top:7px">
                            <span style="font-size: 20px; margin-top:15px" ><b>₦{{cartItem.cartItemPrice}}</b></span>
                            <br>
                            <span style="font-size: 12px; margin-top:10px" >18 available</span>
                            <br>
                            <span style="font-size: 12px; margin-top:5px" >Shipping ₦{{cartItem.itemShippingPrice}}</span>
                            <br>
                        <div class="choose_option">
                            <div class="add-btn">
                                <v-btn icon small dark color="white" style="background-color:#555555" @click="minusFunc(cartItem)" :disabled="cartItem.cartItemQuantity == 1">
                                    <v-icon>mdi-minus</v-icon>
                                </v-btn>
                                    {{cartItem.cartItemQuantity}}
                                <v-btn icon small dark color="white" style="background-color:#555555" @click="plusFunc(cartItem)">
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                            </div>
                            <div class="del-btn">
                                <v-btn icon text color="red darken--5" style="padding-bottom:15px" @click="removeItem(cartItem._id)">
                                    <v-icon>mdi-trash-can</v-icon>
                                </v-btn>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>  
        <!---Summary Box--->
        <div v-if="getUserItems.length > 0" class="order_summary" position="fixed" top="0">
            <div class="box_header">
                <p>Order Summary</p>
            </div>
            <div class="box_content">
                <p style="font-size: 15px;" >Subtotal: <span style="float:right" >N{{getSubTotal}}</span></p>
                <p style="font-size: 15px;" >Shipping: <span style="float:right" >N{{getShipping}}</span></p>
                <br>
                <p style="font-size: 20px;" >Total: <span style="float: right" >N{{getTotal }}</span></p>
                <paystack
                    :amount="parseInt(this.getTotal * 100)"
                    :email="this.getUser.email"
                    paystackkey="pk_test_f56f0dd5c762870e327443055e2896f81a028443"
                    :reference="reference"
                    :callback="processPayment"
                    :close="close"
                    style="width:100%"
                >
                    <v-btn color="orange white--text" width="100%" :disabled="getUserItems.length == 0">
                            Buy({{getUserItems.length}})
                    </v-btn>
                </paystack>
            </div>
            
        </div>
        <!---Delete Item Snackbar----->
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
import paystack from 'vue-paystack';
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'CartBox',
    components: {
        paystack
    },
    data(){
        return{
            quantity: [],
            id: '',
            deleteProduct:'',
            headerMessage:'',
            contentMessage:'',  
            dialog: false,
            checkout_dialog:false,
            summary_dialog:false,
            snackbar:false,
            // 82522403296
        }
    },
    methods:{
        ...mapActions(['fetchByUser', 'setOrders']),
        //Open Mobile summay box
        openMobileSummay(){
            this.summary_dialog = true
        },

        //Close Mobile summay box
        closeMobileDialog(){
            this.summary_dialog = false
        },

        //Adding quantity in cart
        plusFunc(cartItem){
            this.id = cartItem._id
            this.quantity = parseInt(cartItem.cartItemQuantity) + 1
            const meta = {
                quantity: this.quantity
            }
            axios.patch(`https://shoppeefy.herokuapp.com/api/cart/quantity/${this.id}`, meta, {})
            .then(() => this.fetchByUser(this.getId))
            console.log(this.quantity)
        },

        //Subtacting quantity in cart
        minusFunc(cartItem){
            this.id = cartItem._id
            this.quantity = parseInt(cartItem.cartItemQuantity) - 1
            const meta = {
                quantity: this.quantity
            }
            axios.patch(`https://shoppeefy.herokuapp.com/api/cart/quantity/${this.id}`, meta, {})
            .then(() => this.fetchByUser(this.getId))
            console.log(this.quantity)
        },

        //Remove item modal
        removeItem(id){
            this.dialog = true;
            this.deleteProduct = id
        },

        //Confirm delete
        confirmDelete(){
            const id = this.deleteProduct
            this.$store.dispatch("deleteFromCart", id);
            this.dialog = false;
            this.snackbar = true
        },

        //CheckOut
        addOrder(){
            let Arr = []
            this.getUserItems.forEach(element => {
                console.log(element)
                Arr.push({ 
                    userID:element.userID, 
                    itemID:element.itemID, 
                    itemImage:element.cartItemImage, 
                    itemName:element.cartItemName, 
                    itemQuantity:element.cartItemQuantity, 
                    itemPrice:element.cartItemPrice, 
                    dateOrdered:Date.now(),
                    receiverName:this.getUser.firstname + ' ' + this.getUser.lastname, 
                    receiverAddress:this.getUser.address, 
                    receiverNo:this.getUser.telephone, 
                    completed:"False"
                })
            });    
            
            //Post Items To the server
            axios.post('https://shoppeefy.herokuapp.com/api/orders/',Arr, {})
                .then((res) =>{
                    if(res.data.message === "success"){
                        axios.delete(`https://shoppeefy.herokuapp.com/api/cart/clearcart/${this.getId}`)
                        .then((res) => {
                            if(res.data.message === "success"){
                                this.headerMessage = "Success"
                                this.contentMessage = "You've successfully placed your order"
                                this.checkout_dialog = true
                                this.fetchByUser(this.getId)
                                this.setOrders()
                            }else{
                                this.headerMessage = "Error"
                                this.contentMessage = "Unsuccessful. Try again later"
                                this.checkout_dialog = true
                            }
                        })
                    }else{
                        this.headerMessage = "Error"
                        this.contentMessage = "Unsuccessful. Try again later"
                        this.checkout_dialog = true
                    }
                })
                .catch(() => { 
                    this.headerMessage = "Error"
                    this.contentMessage = "Unsuccessful. Try again later"
                    this.checkout_dialog = true
                })
            console.log(Arr)
        },

        //Paystack Process payment bar
        processPayment(){
                this.addOrder()
        },
        
        //Patstack close dialog bar
        close: () => {
            console.log("You closed checkout page")
        },

    },
    computed:{ 
        ...mapGetters(['getUserItems', 'getId', 'getTotal', 'getShipping', 'getSubTotal', 'getQuantity', 'getUser']),
        //Paystack validation
        reference() {
            let text = "";
            let possible =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (let i = 0; i < 10; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }
    },
    mounted(){
        //Fetch user details
        this.fetchByUser(this.getId)
    }
}
</script>

<style scoped>
    .mainBox{
        width: 750px;
        position: relative;
        margin-top: 80px;
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

    .product_side img:hover{
        transform: scale(1.05);
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
        padding-top: 17px;
    }

    .del-btn {
        float: right;
        margin-left: 100%;
        margin-top: -30px;
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
        margin: 80px auto;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    }

    .mobile_summary {
        visibility: hidden;
    }

    .mobileCheckout{
        visibility: hidden;
    }

    @media only screen and (max-width: 1450px) {
        .cart_items{
            width: 90%;
            margin: auto;
        }

        .mainBox{
            width:65%;
            margin: 30px auto;
            margin-bottom: 250px;
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
            width: 95%;
            margin: 70px auto;
            float: none;
            margin-bottom: 350px;
        }     

        .product_side{
            width: 25%;
        }   

        .product_side img{
            width: 100%;
            height: auto;
            margin: auto;
        }

        .def_side{
            width: 70%;
        }

        .order_summary{
            display: none;
        }

        .mobile_summary {
            visibility: visible;
            width: 100%;
            background-color: #fff;
            margin: 0px auto;
        }

        .mobileCheckout{
            visibility: visible;
            position:fixed; 
            bottom:30px; 
            right:20px; 
            z-index:999
        }
    }

     @media only screen and (max-width: 500px) {
         .cart_items{
            width: 100%;
            margin: auto;
        }
        .mainBox{
            width: 94%;
            margin: 70px auto;
            float: none;
            margin-bottom: 400px;

        }     

        .product_side{
            width: 25%;
        }   

        .product_side img{
            width: 100%;
            height: auto;
            margin: auto;
        }

        .def_side{
            width: 70%;
        }

        .order_summary{
            display: none;
        }

        .mobile_summary {
            visibility: visible;
            width: 100%;
            background-color: #fff;
            margin: 0px auto;
        }

        .mobileCheckout{
            visibility: visible;
            position:fixed; 
            bottom:20px; 
            right:15px; 
            z-index:999;
        }
        
    }

    @media only screen and (max-width: 350px) {
        .mainBox{
            margin-bottom: 420px;

        }     
    }

     @media only screen and (max-width: 300px) {
        .mainBox{
            margin-bottom: 519px;

        }     
    }
</style>