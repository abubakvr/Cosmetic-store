<template>
    <div class="my-3">
        <h2>Register Product</h2>
        <v-row>
            <v-col cols="5">
                <div class="mainbox pa-7">
                    <v-row>
                        <v-col cols="6">
                            <v-text-field filled label="Product Name" v-model="product.name"></v-text-field>
                        </v-col>    
                        <v-col cols="6">
                            <v-text-field filled label="Price" v-model="product.price"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field filled label="Brand" v-model="product.brand"></v-text-field>
                        </v-col>    
                        <v-col cols="6">
                            <v-text-field filled label="Quantity" v-model="product.quantity"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">    
                            <template>
                                <v-file-input
                                    label="Product Image"
                                    filled
                                    prepend-icon="mdi-camera"
                                    v-model="product.image"
                                ></v-file-input>
                            </template>
                        </v-col>
                        <v-col cols="6">
                            <v-select :items="items" filled label="Category" v-model="product.category"></v-select>
                        </v-col>  
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-textarea filled label="Description" v-model="product.description"></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-btn align="right" style="float:right;" color="orange white--text" @click="submit()">Register Product</v-btn>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
        </v-row>
        
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name:"AddProducts",
    data(){
        return{
            items:["Face", "Lips", "Eyes", "Body"],
            product:{
                name:'',
                price:'',
                brand:'',
                category:'',
                quantity:'',
                image:[],
                description:''
            }
        }
    },
    methods: {
        submit(){
            const formData = new FormData()
            const meta = {
                productName: this.product.name,
                productPrice:this.product.price,
                productBrand: this.product.brand,
                productCategory: this.product.category,
                productQuantity: this.product.quantity,
                productImage: '',
                productDescription: this.product.description
            }

            formData.append('productImage', this.product.image)
            formData.append('meta', JSON.stringify(meta))
        
            axios.post('http://localhost:5200/api',formData, {}).
                then((res) => console.log(res))
                .catch(err => console.log(err));

            }
            
    }
}
</script>

<style scoped>
.mainbox{
        width: 100%;
        height: auto;
        margin: 30px 0;
        margin-bottom: 250px;
        overflow: none;
        float: left;
        border: 1px solid #cfcfcf;
    }
</style>