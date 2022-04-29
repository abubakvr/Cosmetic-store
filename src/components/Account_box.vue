<template>
    <v-container width="100%" height="100%" class="my-6" style="margin-bottom:500px">
        <v-col>
            <v-row justify="center" >
                <v-sheet color="white" elevation="4" width="600px" height="480px" class="my-12">
                    <v-toolbar flat style="border-bottom:1px solid #dfdfdf;">
                        <v-toolbar-title>My account</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn icon fab large v-bind="attrs" v-on="on" >
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                            </template>
                            <span>Edit account</span>
                        </v-tooltip>
                    </v-toolbar>
                    <v-sheet class="pa-8">
                       <p><b>Name:</b> {{getUser.firstname + ' ' + getUser.lastname}}</p>
                       <p><b>Email:</b> {{getUser.email}}</p>
                       <p><b>Phone:</b> {{getUser.telephone}}</p>
                       <p><b>Address:</b> {{getUser.address}}</p>
                       <p><b>Gender:</b> {{getUser.gender}}</p>
                    </v-sheet>
                </v-sheet>
            </v-row>
        </v-col>
    </v-container>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: "accountBox",
    data(){
        return{

        }
    },
    methods:{},
    computed: mapGetters(['getUser'])
}
</script>

<style scoped>

</style>