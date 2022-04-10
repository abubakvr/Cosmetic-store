<template>
    <section class="d">
        <div>
        <p> DON'T MISS OUT</p>
        <h1>Now <i>Trending</i></h1>
        </div>
        <div class="section_products">
        <div class="inner_divv">
            <img src="../assets/img/kindpng_2386942.png">
        </div>
        <div class="inner_divv">
            <img src="../assets/img/kindpng_2386897.png">
        </div>
        <div class="inner_divv">
            <img src="../assets/img/favpng_pencil-eye-liner-color-black.png">
        </div>
        <div class="inner_divv">
            <img src="../assets/img/—Pngtree—liquid foundation_5649017.png">
        </div>
        <div class="inner_divv">
            <img src="../assets/img/face_powder_PNG76465.png">
        </div>
        <br>
        <br>
        <br>
        <p style=""><v-btn outlined color="black" @click="$router.push('/shopall')">SEE MORE</v-btn></p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Trending',
}
</script>

<style scoped>
.d{
    text-align: center;
    margin-top: 620px;
}

.section_products{
  width: 80%;
  text-align: center;
  margin: auto;
}

.d .section_products div{
  height: 200px;
  text-align: center;
  float: left;
  display: inline;
  margin-top: 30px;
  width: 20%;
}


.section_products img{
  height: 150px;
}

.inner_divv :hover{
    transform: scale(1.06); 
    cursor: pointer;
}

.inner_divv :hover{
        box-shadow: none;
        transform: none; 
}

@media only screen and (max-width: 500px) {  
.d{
    text-align: center;
    margin-top: 0px;
}

.d .section_products div{
  height: 220px;
  float: none;
  display: block;
  margin: auto;
  width: 100%;
  padding-top: 30px;
}
}
</style>