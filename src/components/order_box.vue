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
                         <div class="todos">
                            <div 
                            class="todo" v-for="product in allProducts" 
                            :key="product._id"
                            >
                            {{ product.productName }}
                            {{ product._id }}
                            </div>
                        </div>
                        <div class="todos">
                            <div 
                            class="todo" v-for="product in oneProduct" 
                            :key="product._id"
                            >This is one fetch
                            {{ product.productName }}
                            {{ product._id }}
                            </div>
                        </div>
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
            id: ``
        }
    },
    methods:{
        ...mapActions(['fetchProducts']),
    },
    computed: mapGetters(['allProducts', 'oneProduct']),
    created(){
        this.fetchProducts()
        this.fetchOneProduct(`623f79e56febd0e24b03c9ed`)
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