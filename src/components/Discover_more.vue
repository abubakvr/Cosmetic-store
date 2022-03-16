<template>
    <section class="e">
        <div style="text-align: center; margin-top:90px">
        <h1><b>Discover</b> <i>More</i></h1>
        </div>
        <div class="e_section_products">
        <div class ="img_1" data-aos="fade-up">
            <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
            <img src="../assets/img/Beautiful-woman-face-makeup-artist-applies-eyeshadow-Stock-Photo-02.png" v-bind="attrs" v-on="on">
            <h1 class="bottom-left">Shop Face</h1>
            </template>
            <span>Shop Face</span>
        </v-tooltip>
        </div >
        <div data-aos="zoom-in">
            <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
            <img src="../assets/img/maxresdefault2.jpg" v-bind="attrs" v-on="on">
            <h1 class="bottom-left">Shop Eyes</h1>
            </template>
            <span>Shop Eyes</span>
        </v-tooltip>
        </div>
        <div data-aos="fade-up">
            <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
                <img src="../assets/img/Colour-Cosmetics-Blonde-Female-Wearing-Bright-Red-Lipstick.png" v-bind="attrs" v-on="on">
                <h1 class="bottom-left">Shop Lips</h1>
            </template>
            <span>Shop Lips</span>
            </v-tooltip>
        </div>
        </div>
        <div class="footer" style="color: white; text-align:center">
        <div style>
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

            <v-divider></v-divider>

            {{ new Date().getFullYear() }} — <strong>SHOPPEE</strong>
        </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'DiscoverMore',
}
</script>

<style scoped>

.e{
    width: 100%;
}

.e_section_products{
  width: 75%;
  margin: auto;
}

.e_section_products div{
  height: 300px;
  text-align: center;
  float: right;
  display: inline;
  margin-top: 30px;
  width: 30%;
  margin: 30px 25px 30px 0px;
  height: 400px;
}

.e_section_products img{
  height: 100%;
  transition: transform .2s; /* Animation */
  border-radius: 1%;
  width: 100%;
}

.footer{
  width: 100%;
  background-color: black;
  margin-top: 300px;
  padding-top: 200px;
}

.e_section_products h1{
    z-index: 9999; text-align: center; margin-top: -40px; font-size: 40px; color: white;
}

@media only screen and (max-width: 800px) {
.e_section_products{
  width: 80%;
}

.e_section_products div{
  width: 30%;
  float: left;
  margin: 30px 20px 0px 0px;
  height: 300px;
}

.footer{
  width: 100%;
  background-color: black;
  margin-top: 250px;
  padding: 170px 15px 0px 15px;
}

.e_section_products h1{
    z-index: 9999; text-align: center; margin-top: -30px;  font-size: 30px;  color: white; text-shadow: 2px 2px #141414;
}

}

@media only screen and (max-width: 500px) {
.e_section_products{
  width: 80%;
}

.e_section_products div{
  width: 100%;
  float: none;
  display: block;
  margin: auto;
  height: 300px;
  padding-top:30px;
}

.footer{
  width: 100%;
  background-color: black;
  margin-top: 50px;
  padding: 20px;
}

}

</style>