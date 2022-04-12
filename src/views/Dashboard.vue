<template>
  <v-sheet height="100%">
    <v-container style="margin-left:300px; width:90%" width="90%">
        <router-view></router-view>
    </v-container>

    <v-navigation-drawer absolute permanent left style="position:fixed; top=0" >
      <template v-slot:prepend>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-account</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Admin Panel</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list>
          <v-list-item-group>
        <v-list-item @click="$router.push('/dashboard/orders')">
          <v-list-item-icon>
            <v-icon>mdi-table-large</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Orders</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push('/dashboard/addproducts')">
          <v-list-item-icon>
            <v-icon>mdi-card-plus</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Register Products</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push('/dashboard/manageproducts')">
          <v-list-item-icon>
            <v-icon>mdi-card-minus</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Manage Products</v-list-item-title>
          </v-list-item-content>
        </v-list-item >
        <v-list-item @click="$router.push('/dashboard/manageusers')">
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Manage Users</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
      }
    },
  }
</script>

<style scoped>

</style>