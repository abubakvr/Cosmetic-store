<template>
    <section class="a">
          <div>
               <p>NEW RELEASE</p>
              <h1>Metallics</h1>
              <h1><i>Shine</i> on</h1>
              <br>
              <p>Get to know our new eyeshadow <br>palette with a glossy fresh finish, smooth <br>lightweight feel and 10 hour stay on.</p>
              <br>
              <v-btn outlined color="white" @click="$router.push('/shopall')">Shop</v-btn>
          </div>
        </section>
</template>

<script>
export default {
    name: 'WelcomeBanner',
}
</script>

<style scoped>
.a {
  /*clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50% );*/
  /*clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 50%);*/
  background: black;
  background-image: url("../assets/img/model-tiomnaia-devushka-chiornyi-fon-zoloto-makeup-portret.jpg");
  background-position: right;
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: fixed;
  color: white;
  height: 600px;
  width: 100%;
  overflow: hidden;
}

.a div{
  float: left;
  margin-top: 150px;
  margin-left: 13%;
}

@media only screen and (min-width: 1500px) {
        .a {
            background-position: left;
            height: 700px;
        }
}


@media only screen and (max-width: 768px) {
    .a {
        background-image: url("../assets/img/model-tiomnaia-devushka-chiornyi-fon-zoloto-makeup-portret.jpg");
        background-position: top;
        background-repeat: no-repeat;
        background-size: 100%;
        background-attachment: auto;
        height: 500px;
        width: 100%;
    }

    .a div{
        float: left;
        display: inline;
        margin-top: 80px;
        margin-left: 13%;
    }
}

@media only screen and (max-width: 500px) {
    .a {
        background: black;
        background-image: url("../assets/img/model-tiomnaia-devushka-chiornyi-fon-zoloto-makeup-portret.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        background-attachment: auto;
        color: white;
        height: 400px;
        width: 100%;
    }

    .a div{
        margin-top: 50px;
        margin-left: 10%;
    }
}

</style>