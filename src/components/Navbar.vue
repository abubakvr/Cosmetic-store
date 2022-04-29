<template>
    <div>
    <!------Web nav----------->
    <div class="normalNav">
    <v-app-bar absolute color="#141414" class="navbar" style="position: fixed; top: 0; color: white;" >

      <router-link to="/" style="text-decoration:none;">
        <v-btn text color="white">
          SHOPPEE
        </v-btn>
      </router-link>

      <v-spacer></v-spacer>

        <router-link to="/shopall" style="text-decoration:none">
          <v-btn text color="white">
              SHOP ALL
          </v-btn>
        </router-link>

      <router-link to="/newitems" style="text-decoration:none">
        <v-btn text color="white">
          NEW
        </v-btn>
      </router-link>

        <v-btn text color="white" @click="$router.push('/eyeproducts')"> 
          EYES
        </v-btn>

        <v-btn text color="white" @click="$router.push(`/faceproducts`)" >
          FACE 
        </v-btn>

        <v-btn text color="white" @click="$router.push(`/lipsproducts`)">
          LIPS 
        </v-btn>

      <v-spacer></v-spacer>
  

      <!---Cart Button--------------------->
      <router-link to="/cart" style="text-decoration:none">
      <v-btn text color="white lighten-5">
        <v-badge
        color="orange"
        overlap
        :content="getItemNo"
        v-if="getItemNo > 0"
        >
        <v-icon>mdi-cart</v-icon></v-badge>
        <v-icon  v-if="getItemNo < 1">mdi-cart</v-icon> Cart
      </v-btn>
      </router-link>

    <!---Account Button---------------->
    <v-menu offset-y max-width="300px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn  
          color="white"
          text
          v-bind="attrs"
          v-on="on"
        >
         <v-icon>mdi-account-circle</v-icon>Account
        </v-btn>
      </template>
      <v-list width="250px">
           <v-list-item-group color="primary">
        <v-list-item v-if="loginBtn">
          <v-list-item-content>
            <v-btn color="orange white--text" @click="$router.push('/login')">
              Login
            </v-btn> 
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push('/account')">
          <v-list-item-icon>
            <v-icon >mdi-account-circle-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>My Account</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push('/orders')">
          <v-list-item-icon>
            <v-icon >mdi-store-check-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>My orders</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="!loginBtn">
          <v-list-item-content>
            <v-btn color="orange white--text" @click="logout()">
              logout
            </v-btn> 
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      </v-list>
    </v-menu>

    </v-app-bar>
    </div>


    <!---Mobile Nav-------------------------->
    <div class="mobileNav">
        <v-app-bar
      ccolor="#141414"
      dark style="position:fixed; top: 0; margin-bottom:30px; color: white; z-index:999 "
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>SHOPPEE</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon color="white lighten-5" @click="$router.push('/cart')">
        <v-badge
        color="orange"
        overlap
        :content="getItemNo"
        v-if="getItemNo > 0"
        >
        <v-icon>mdi-cart</v-icon></v-badge>
        <v-icon  v-if="getItemNo < 1">mdi-cart</v-icon> 
      </v-btn>

       <!---Account Button---------------->
    <v-menu offset-y max-width="300px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn  
          color="white"
          icon
          v-bind="attrs"
          v-on="on"
        >
         <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </template>
      <v-list width="250px">
           <v-list-item-group color="primary">
        <v-list-item v-if="loginBtn">
          <v-list-item-content>
            <v-btn color="orange white--text" @click="$router.push('/login')">
              Login
            </v-btn> 
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push('/account')">
          <v-list-item-icon>
            <v-icon >mdi-account-circle-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>My Account</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push('/orders')">
          <v-list-item-icon>
            <v-icon >mdi-store-check-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>My orders</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="!loginBtn">
          <v-list-item-content>
            <v-btn color="orange white--text" @click="logout()">
              logout
            </v-btn> 
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      </v-list>
    </v-menu>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      color="#333333" 
      style="z-index:9999; position:fixed; color:white"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          style="margin-top:10px; color:white"
        >
          <v-list-item @click="$router.push('/')" >
            <v-list-item-title style="color:#fff" ><v-icon color="#7e181b">mdi-arrow-right-thin</v-icon><b>HOME</b></v-list-item-title>
          </v-list-item>
            <hr style="border-bottom: 1px  solid #dfdfdf; border-top:-0px; width:90%; margin:-5px auto 0px auto">
          <v-list-item @click="$router.push('/shopall')">
            <v-list-item-title style="color:#fff"><v-icon color="#7e181b">mdi-arrow-right-thin</v-icon>SHOP ALL</v-list-item-title>
          </v-list-item>
            <hr style="border-bottom: 1px  solid #dfdfdf; border-top:-0px; width:90%; margin:-5px auto 0px auto">
          
          <v-list-item @click="$router.push('/newitems')">
            <v-list-item-title style="color:#fff"><v-icon color="#7e181b">mdi-arrow-right-thin</v-icon>NEW</v-list-item-title>
          </v-list-item >
            <hr style="border-bottom: 1px  solid #dfdfdf; border-top:-0px; width:90%; margin:-5px auto 0px auto">

          <v-list-item @click="$router.push('/eyeproducts')">
            <v-list-item-title style="color:#fff"><v-icon color="#7e181b">mdi-arrow-right-thin</v-icon>EYES</v-list-item-title>
          </v-list-item>
            <hr style="border-bottom: 1px  solid #dfdfdf; border-top:-0px; width:90%; margin:-5px auto 0px auto">

          <v-list-item @click="$router.push('/faceproducts')">
            <v-list-item-title style="color:#fff"><v-icon color="#7e181b">mdi-arrow-right-thin</v-icon>FACE</v-list-item-title>
          </v-list-item>
            <hr style="border-bottom: 1px  solid #dfdfdf; border-top:-0px; width:90%; margin:-5px auto 0px auto">

          <v-list-item @click="$router.push('/lipsproducts')">
            <v-list-item-title style="color:#fff"><v-icon color="#7e181b">mdi-arrow-right-thin</v-icon>LIPS</v-list-item-title>
          </v-list-item>
            <hr style="border-bottom: 1px  solid #dfdfdf; border-top:-0px; width:90%; margin:-5px auto 0px auto">

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
    export default{
        name: 'Navbar',
        data: () => ({
          drawer: false,
          group: null,
          selectedItem: 1,
          chkToken: localStorage.getItem('token'),
          loginBtn: false,
        }),
        methods:{
          ...mapActions(['fetchByUser']),
          logout(){
              this.$store.dispatch("logOut");
              this.$store.dispatch("clearCart");

          }
        },
        computed:mapGetters(['getItemNo', 'getId']),
        created(){
        },
        mounted(){
          if(this.chkToken){
            this.loginBtn = false
            this.fetchByUser(this.getId)

          }else{
            this.loginBtn = true
          }
          
        }
    }
</script>

<style scoped>

.menu_item:hover {
    background-color: green;;
  }
.mobileNav{
    color: white;
    visibility: hidden;
    text-decoration: none;
  }


@media only screen and (max-width: 790px) {
  .mobileNav{
    color: white;
    visibility: visible;

  }

  .normalNav{
    visibility: hidden;
    }
}

</style>
