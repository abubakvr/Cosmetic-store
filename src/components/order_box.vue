<template>
    <div class="mainBox">
        <div class="box_header">
            <p>My orders({{getUserOrders.length}})</p>
        </div>
        <div class="box_content">
        <div class="buy_item" v-for="orderItem in getUserOrders" :key="orderItem._id" >
            <div class="cart_checkbox">
            </div>
            <div class="product_side" @click="$router.push(`/viewitem/${orderItem.itemID}`)">
                <img :src="'https://shoppeefy.herokuapp.com' + orderItem.itemImage" style="cursor: pointer;">
            </div>
            <div class="def_side">
                <span style="font-size: 17px">{{orderItem.itemName}}</span>
                <hr style="border-bottom: 1px  solid #dfdfdf; border-top:-0px; margin-top:7px">
                    <span style="font-size: 18px; margin-top:15px" ><b>₦{{orderItem.itemPrice}}</b></span>
                    <br>
                    <span style="font-size: 15px; margin-top:10px" >{{orderItem.itemQuantity}} ordered</span>
                    <br>
                    <span style="font-size: 15px; margin-top:10px" >Undelivered</span>
                    <br>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "orderBox",
    data(){
        return{
        }
    },
    methods:{
        ...mapActions(['fetchOrders']),
    },
    computed: mapGetters(['getUserOrders']),
    created(){
        this.fetchOrders()
    }
}
</script>

<style scoped>
    .mainBox{
        width: 1050px;
        margin: auto;
        margin-bottom: 250px;
        margin-top: 80px;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        overflow: none;
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
        height: 180px;
        width: 100%;
    }

    .product_side{
        width: 150px;
        height: auto;
        padding: 15px;   
        margin: auto; 
    }   

    .product_side img{
        width: 100px;
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


   @media only screen and (max-width: 1100px) {
        .mainBox{
            width: 70%;
            margin: 70px auto;
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
    }


    @media only screen and (max-width: 800px) {
       .mainBox{
            width: 85%;
            margin-bottom: 280px;
            margin-top: 70px;
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
    }

     @media only screen and (max-width: 500px) {
        .mainBox{
            width: 94%;
            margin-bottom: 400px;
            margin-top: 70px;
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
        
    }
</style>