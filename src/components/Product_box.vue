<template>
    <div class="mainbox">
        <div class="box_header">
            <p>Shop All</p>
        </div>
        <!-- <div class="productbox">
            <div class="inBox">
                <div @click="$router.push('/viewitem')">
                    <img src="../assets/img/78aaf2734c731e2b8231ae6f65a7ef39.jpg">
                    <br>
                    <br>
                    <h4 style="height:45px">Black Powder Pencil with abity draw itself on demand</h4>
                    <hr style="border-bottom: 1px  solid #dfdfdf; border-top:-0px; margin-top:14px">
                    <h3>$150</h3>
                    <hr style="border-bottom: 1px  solid #dfdfdf; border-top:-0px; margin-top:7px">
                    <p>150 available</p>
                </div>
                <v-btn outlined color="orange" width="100%" style="z-index:999" @click="$router.push('/dashboard')">Add to cart</v-btn>
            </div>
        </div> -->
        <div class="productbox"  v-for="product in allProducts" :key="product._id">
            <div class="inBox">
                <div @click="$router.push('/viewitem')">
                    <img :src="'http://localhost:5200' + product.productImage">
                    <br>
                    <br>
                    <h4 style="height:45px">{{ product.productName }}</h4>
                    <hr style="border-bottom: 1px  solid #dfdfdf; border-top:-0px; margin-top:14px">
                    <h3>₦{{ product.productPrice }}</h3>
                    <hr style="border-bottom: 1px  solid #dfdfdf; border-top:-0px; margin-top:7px">
                    <p>{{ product.productQuantity}} available</p>
                </div>
                <v-btn outlined color="orange" width="100%" @click="$router.push('/dashboard')">Add to cart</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters } from 'vuex'

export default{
        name:"ProductBox",
        data(){
            return{
                
            }
        },
        methods:{
            ...mapActions(['fetchProducts'])
        },
        computed: mapGetters(['allProducts']),
        mounted(){
            this.fetchProducts()
        }
    }
</script>

<style scoped>
    .mainbox{
        width: 70%;
        height: auto;
        margin: 30px auto;
        margin-bottom: 250px;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        overflow: auto;
    }

    .box_header{
        height: 70px;
        width: 100%;
        border-bottom: 1px solid #e0dfdf;
        padding: 17px;
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
        height: 450px;
        padding: 7px;
    }

    .productbox .inBox{
        width: 100%;
        height: 100%;
        padding: 5px;
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

    /*Media Display */
    @media only screen and (max-width: 1450px) {
        .mainbox{
            width: 75%;
            margin: 30px auto;
            box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        }

        .productbox div img{
            width: 75%;
            height: 150px;
            margin-left: 10%;
        }

         .productbox{
            height: 340px;
        }
    }

   @media only screen and (max-width: 1100px) {
        .mainbox{
            width: 90%;
            margin: 30px auto;
            box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        }

        .productbox div img{
            width: 75%;
            height: 150px;
            margin-left: 10%;
        }

         .productbox{
            height: 340px;
        }
    }


    @media only screen and (max-width: 800px) {
        .mainbox{
            width: 90%;
            margin: 30px auto;
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
            padding: 10px;
        }

        .productbox div img{
            width: 75%;
            height: 150px;
            margin-left: 10%;
        }

        .class_btn{
            display: none;
        }
    }

     @media only screen and (max-width: 500px) {
        .mainbox{
            width: 90%;
            margin: 30px auto;
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
            padding: 10px;
        }

        .productbox div img{
            width: 75%;
            height: 150px;
            margin-left: 10%;
        }

        .class_btn{
            display: none;
        }
    }

</style>