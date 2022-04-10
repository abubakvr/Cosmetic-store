<template>
    <section class="c">
            <div class="right_div" data-aos="zoom-in" >
              <div class="right_div_text">
                <p>HOT & SPICY</p>
                <h2>Most <i>Vibrant</i><br> Lips in Town</h2>
                <br>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.<br> 
                  Pariatur, velit veniam. Nemo ab veniam sunt maiores id <br>
                  reprehenderit dicta laboriosam ut tempora explicabo eos <br> quaerat,
                  vel vitae dolore? Iste, mollitia!
                </p>
                <br>
                <v-btn color="white" @click="$router.push('/lipsproducts')">Shop Now</v-btn>
              </div>
            </div>
            <div class="left_div" data-aos="fade-left">
              <div class="inner_div"> 
              </div>
            </div>
        </section>
</template>

<script>
export default {
    name: 'BoxView',
}
</script>

<style scoped>
.c{
  margin: 60px auto;
  width: 100%;
}

.c div{
  float: left;
  display: inline;
}

.inner_div{
  width: 100%;
  height: 420px;
  margin-top: 40px;
  margin-left: -50px;
  background-image: url("../assets/img/intro-1615517693.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}

.right_div_text{
  color: white;
  margin-left: 25%;
  margin-top: 80px;
}

.right_div{
  background-color: black;
  height: 500px;
  width: 50%;
}

.left_div{
  background-color: white;
  height: 500px;
  width: 50%;

}

@media only screen and (max-width: 500px) {
.c div{
  float: none;
  display: block;
  margin-bottom: 0px;
}

.right_div{
  height: 450px;
  width: 100%;
}

.right_div_text{
  color: white;
  padding: 20px;
  margin: 0px;
}

.inner_div{
  visibility: hidden;
  height: 0px;
}

.left_div{
  height: 0px;
}
}

</style>