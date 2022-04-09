<template>
    <section class="b">
        <br>
        <br>
        <div style="text-align: center">
        <p> MUST HAVES</p>
        <h1>BEST <i>Sellers</i></h1>
        </div>
        <div class="section_products">
        <div class="inner_divv">
            <img src="../assets/img/favpng_pencil-eye-liner-color-black.png">
            <p>Black Powder Pencil <br>$150</p>
        </div>
        <div class="inner_divv">
            <img src="../assets/img/kindpng_2387099.png">
            <p>Glossy Rose<br>$100</p>
        </div>
        <div class="inner_divv">
            <img src="../assets/img/pngwing.com.png">
            <p>Mad Lip Gloss<br>$300</p>
        </div>
        <div class="inner_divv">
            <img src="../assets/img/—Pngtree—liquid foundation_5649017.png">
            <p>Slick Rui Foundation <br>$450</p>
        </div>
        <div class="inner_divv">
            <img src="../assets/img/face_powder_PNG76465.png">
            <p>Mirror Powder <br>$80</p>
        </div>
        <div class="inner_divv">
            <img src="../assets/img/kindpng_2386942.png">
            <p>Duzzle eyeshadow <br>$200</p>
        </div>
        <br>
        <br>
        <br>
        <p class="shop_btn"><router-link to="/bestsellers" style="text-decoration:none">
        <v-btn outlined color="black">Shop Best Sellers</v-btn></router-link></p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BestSellers',
}
</script>

<style scoped>
.b{
  /*clip-path: polygon(0 0, 100% 50%, 100% 100%, 0 100%);*/
  background: White;
  margin: auto;
  width: 80%;
  text-align: center;
}

.section_products img{
  height: 150px;
}

.shop_btn{
  margin-top:220px
}

.section_products div{
  height: 200px;
  text-align: center;
  float: left;
  display: inline;
  margin-top: 30px;
  width: 16.5%;
}

.section_products :hover{
        transform: scale(1.06); 
        cursor: pointer;
}

.inner_divv :hover{
        box-shadow: none;
        transform: none; 
}

@media only screen and (max-width: 800px) {
.b{
  /*clip-path: polygon(0 0, 100% 50%, 100% 100%, 0 100%);*/
  width: 90%;
}

.section_products img{
  height: 170px;
  width: 100%;
}


.section_products div{
  height: 200px;
  width: 16%;
}
}

@media only screen and (max-width: 500px) {
.b{
  /*clip-path: polygon(0 0, 100% 50%, 100% 100%, 0 100%);*/
  width: 80%;
}

.section_products img{
  height: 220px;
  width: 80%;
  margin: auto;
}


.section_products div{
  height: 300px;
  margin: auto;
  float: none;
  width: 80%;
}

.shop_btn{
  margin-top:0px
}
}

</style>