<template>
  <v-sheet height="100%">
    <v-container style="margin-left:300px">
        <v-row>
         <v-col cols="3">
            <v-card
                color="#385F73"
                dark
                >
                <v-card-title class="text-h5">
                    Unlimited music now
                </v-card-title>

                <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

                <v-card-actions>
                    <v-btn text>
                    Listen Now
                    </v-btn>
                </v-card-actions>
            </v-card>
         </v-col>
         <v-col cols="3">
            <v-card
                color="#385F73"
                dark
                >
                <v-card-title class="text-h5">
                    Unlimited music now
                </v-card-title>

                <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

                <v-card-actions>
                    <v-btn text>
                    Listen Now
                    </v-btn>
                </v-card-actions>
            </v-card>
         </v-col>
         <v-col cols="3">
            <v-card
                color="#385F73"
                dark
                >
                <v-card-title class="text-h5">
                    Unlimited music now
                </v-card-title>

                <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

                <v-card-actions>
                    <v-btn text>
                    Listen Now
                    </v-btn>
                </v-card-actions>
            </v-card>
         </v-col>
        </v-row>
        <v-row>
         <v-col cols="3">
            <v-card
                color="#385F73"
                dark
                >
                <v-card-title class="text-h5">
                    Unlimited music now
                </v-card-title>

                <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

                <v-card-actions>
                    <v-btn text>
                    Listen Now
                    </v-btn>
                </v-card-actions>
            </v-card>
         </v-col>
         <v-col cols="3">
            <v-card
                color="#385F73"
                dark
                >
                <v-card-title class="text-h5">
                    Unlimited music now
                </v-card-title>

                <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

                <v-card-actions>
                    <v-btn text>
                    Listen Now
                    </v-btn>
                </v-card-actions>
            </v-card>
         </v-col>
         <v-col cols="3">
            <v-card
                color="#385F73"
                dark
                >
                <v-card-title class="text-h5">
                    Unlimited music now
                </v-card-title>

                <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

                <v-card-actions>
                    <v-btn text>
                    Listen Now
                    </v-btn>
                </v-card-actions>
            </v-card>
         </v-col>
        </v-row>
    </v-container>

    <v-navigation-drawer
      absolute
      permanent
      left
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-icon>mdi-account</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Admin Panel</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
          <v-list-item-group>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-table-large</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Orders</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-card-plus</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Add Products</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-card-minus</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Delete Products</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
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