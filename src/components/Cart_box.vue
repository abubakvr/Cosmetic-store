<template>
<div class="cart_items">
        <div class="mainBox">
            <div class="box_header">
                <p>Cart Items</p>
            </div>
            <div class="box_content">
                    <div class="cart_checkbox">
                        <v-checkbox label="Select All" color="orange black--text"></v-checkbox>
                    </div>
                <div class="buy_item">
                    <div class="cart_checkbox">
                        <v-checkbox color="orange"></v-checkbox>
                    </div>
                    <div class="product_side">
                        <img src="../assets/img/Beautiful-woman-face-makeup-artist-applies-eyeshadow-Stock-Photo-02.png">
                    </div>
                    <div class="def_side">
                        <span style="font-size: 15px">Black Powder Pencil with abity draw itself on demand</span>
                        <hr style="border-bottom: 1px  solid #dfdfdf; border-top:-0px; margin-top:7px">
                            <span style="font-size: 20px; margin-top:15px" ><b>₦16,000</b></span>
                            <br>
                            <span style="font-size: 12px; margin-top:10px" >18 available</span>
                            <br>
                            <span style="font-size: 12px; margin-top:5px" >Shipping ₦1,200</span>
                            <br>
                            <br>

                        <div class="choose_option">
                            <v-row>
                                <p>
                                <v-btn icon small dark color="white" style="background-color:#555555">
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                                15
                                <v-btn icon small dark color="white" style="background-color:#555555">
                                    <v-icon>mdi-minus</v-icon>
                                </v-btn>  
                                <span class="btn-buy">
                                    <v-btn color="orange white--text">Buy Now</v-btn>
                                </span>
                                </p>
                            </v-row>
                        </div>
                    </div>
                </div>
               <div class="buy_item">
                    <div class="cart_checkbox">
                        <v-checkbox color="orange"></v-checkbox>
                    </div>
                    <div class="product_side">
                        <img src="../assets/img/Beautiful-woman-face-makeup-artist-applies-eyeshadow-Stock-Photo-02.png">
                    </div>
                    <div class="def_side">
                        <span style="font-size: 15px">Black Powder Pencil with abity draw itself on demand</span>
                        <hr style="border-bottom: 1px  solid #dfdfdf; border-top:-0px; margin-top:7px">
                            <span style="font-size: 20px; margin-top:15px" ><b>₦16,000</b></span>
                            <br>
                            <span style="font-size: 12px; margin-top:10px" >18 available</span>
                            <br>
                            <span style="font-size: 12px; margin-top:5px" >Shipping ₦1,200</span>
                            <br>
                            <br>

                        <div class="choose_option">
                            <v-row>
                                <p>
                                <v-btn icon small dark color="white" style="background-color:#555555">
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                                15
                                <v-btn icon small dark color="white" style="background-color:#555555">
                                    <v-icon>mdi-minus</v-icon>
                                </v-btn>  
                                <span class="btn-buy">
                                    <v-btn color="orange white--text">Buy Now</v-btn>
                                </span>
                                </p>
                            </v-row>
                        </div>
                    </div>
                </div>
                <div class="buy_item">
                    <div class="cart_checkbox">
                        <v-checkbox color="orange"></v-checkbox>
                    </div>
                    <div class="product_side">
                        <img src="../assets/img/Beautiful-woman-face-makeup-artist-applies-eyeshadow-Stock-Photo-02.png">
                    </div>
                    <div class="def_side">
                        <span style="font-size: 15px">Black Powder Pencil with abity draw itself on demand</span>
                        <hr style="border-bottom: 1px  solid #dfdfdf; border-top:-0px; margin-top:7px">
                            <span style="font-size: 20px; margin-top:15px" ><b>₦16,000</b></span>
                            <br>
                            <span style="font-size: 12px; margin-top:10px" >18 available</span>
                            <br>
                            <span style="font-size: 12px; margin-top:5px" >Shipping ₦1,200</span>
                            <br>
                            <br>

                        <div class="choose_option">
                            <v-row>
                                <p>
                                <v-btn icon small dark color="white" style="background-color:#555555">
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                                15
                                <v-btn icon small dark color="white" style="background-color:#555555">
                                    <v-icon>mdi-minus</v-icon>
                                </v-btn>  
                                <span class="btn-buy">
                                    <v-btn color="orange white--text">Buy Now</v-btn>
                                </span>
                                </p>
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
                <p style="font-size: 15px;" >Subtotal: <span style="float:right" >N0.00</span></p>
                <p style="font-size: 15px;" >Shipping: <span style="float:right" >N0.00</span></p>
                <br>

                <p style="font-size: 20px;" >Total: <span style="float: right" >N0.00</span></p>
                <v-btn color="orange white--text" width="100%">Buy</v-btn>
            </div>

        </div>
    </div>
</template>

<script>


export default {
    name: 'CartBox',
    components: {

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