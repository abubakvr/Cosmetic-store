<template>
    <div>
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
    <div class="mobileNav">
        <v-app-bar
      ccolor="#141414"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>SHOPPEE</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon color="white lighten-5" >
        <v-badge
        color="orange"
        overlap
        dot
        >
        <v-icon>mdi-cart</v-icon></v-badge> 
      </v-btn>

      <v-btn icon color="white">
        <v-icon>mdi-account</v-icon>
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      color="#FFFFFF" style="color: white"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
        >

          <v-list-item>
            <v-list-item-title>SHOP ALL</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>NEW</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>BEST SELLERS</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>FACE</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>LIPS</v-list-item-title>
          </v-list-item>
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
