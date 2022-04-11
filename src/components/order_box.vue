<template>
    <v-container width="100%" height="100%" class="my-6">
        <v-col>
            <v-row justify="center" >
                <v-sheet color="white" elevation="4" width="600px" height="480px" class="my-6">
                    <v-toolbar flat style="border-bottom:1px solid #dfdfdf;">
                        <v-toolbar-title>My orders</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-sheet class="pa-8">
                        
                    </v-sheet>
                </v-sheet>
            </v-row>
        </v-col>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "orderBox",
    data(){
        return{
        }
    },
    methods:{
        ...mapActions(['fetchProducts', 'fetchOneProduct']),
    },
    computed: mapGetters(['allProducts', 'oneProduct']),
    created(){
    }
}
</script>

<style scoped>
    .todos{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1em;
    }

    .todo{
        border: 1px solid #ccc;
        background: #41b883;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }
</style>