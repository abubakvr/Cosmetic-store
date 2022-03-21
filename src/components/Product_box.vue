<template>
    <div class="mainbox">
        <div class="box_header">
            <p>Shop All</p>
        </div>
        <div class="productbox">
            <div class="inBox" >
                <div @click="$router.push('/viewitem')">
                    <img src="../assets/img/favpng_pencil-eye-liner-color-black.png">
                    <br>
                    <br>
                    <p>Black Powder Pencil with abity draw itself on demand
                    <br><b>$150</b>
                    <br>150 orders</p>
                </div>
            </div>
        </div>
        <div class="productbox">
            <div class="inBox" @click="$router.push('/viewitem')">
                <img src="../assets/img/kindpng_2387099.png">
                <br>
                <br>
                <p>Black Powder Pencil with abity draw itself on demand
                <br><b>$150</b>
                <br>150 orders</p>
            </div>
        </div>
        <div class="productbox">
            <div class="inBox" @click="$router.push('/viewitem')">
                <img src="../assets/img/pngwing.com.png">
                <br>
                <br>
                <p>Black Powder Pencil with abity draw itself on demand
                <br><b>$150</b>
                <br>150 orders</p>
            </div>
        </div>
        <div class="productbox">
            <div class="inBox" >
                <img src="../assets/img/kindpng_2386942.png">
                <br>
                <br>
                <p>Black Powder Pencil with abity draw itself on demand
                <br><b>$150</b>
                <br>150 orders</p>
            </div>
        </div>
        <div class="productbox">
            <div class="inBox" >
                <img src="../assets/img/—Pngtree—liquid foundation_5649017.png">
                <br>
                <br>
                <p>Black Powder Pencil with abity draw itself on demand
                <br><b>$150</b>
                <br>150 orders</p>
            </div>
        </div>
        <div class="productbox">
            <div class="inBox" >
                <img src="../assets/img/pngwing.com.png">
                <br>
                <br>
                <p>Black Powder Pencil with abity draw itself on demand
                <br><b>$150</b>
                <br>150 orders</p>
            </div>
        </div>
        <div class="productbox">
            <div class="inBox" >
                <img src="../assets/img/—Pngtree—liquid foundation_5649017.png">
                <br>
                <br>
                <p>Black Powder Pencil with abity draw itself on demand
                <br><b>$150</b>
                <br>150 orders</p>
                <v-btn color="orange white--text" class="cart-btn" id="cart-btn7" width="100%" style="display: none;">Add to cart</v-btn>
            </div>
        </div>
        <div class="productbox">
            <div class="inBox" >
                <img src="../assets/img/kindpng_2387099.png">
                <br>
                <br>
                <p>Black Powder Pencil with abity draw itself on demand
                <br><b>$150</b>
                <br>150 orders</p>
            </div>
        </div>
        <div class="productbox">
            <div class="inBox" >
                <img src="../assets/img/favpng_pencil-eye-liner-color-black.png">
                <br>
                <br>
                <p>Black Powder Pencil with abity draw itself on demand
                <br><b>$150</b>
                <br>150 orders</p>
            </div>
        </div>
        <div class="productbox">
            <div class="inBox" >
                <img src="../assets/img/pngwing.com.png">
                <br>
                <br>
                <p>Black Powder Pencil with abity draw itself on demand
                <br><b>$150</b>
                <br>150 orders</p>
            </div>
        </div>
    </div>
</template>

<script>
export default{
        name:"ProductBox",
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
        height: 400px;
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
        width: 75%;
        height: 220px;
        margin-left: 10%;
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