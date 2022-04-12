<template>
    <div class="my-3">
        <v-row class="pa-0">
            <v-col cols="7">
            <h2>Manage Product</h2>
            </v-col>
            <v-col cols="2">
                <v-text-field :items="items" label="Search" ></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-select :items="items" label="Filter By"  ></v-select>
            </v-col>
            
        </v-row>
        <v-row>
            <v-col cols="11">
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>S/No</th>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Brand.</th>
                        <th>Category</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in allProducts" :key="product._id">
                        <td>{{index + 1 }}</td>
                        <td>{{product._id}}</td>
                        <td>{{product.productName}}</td>
                        <td>{{product.productPrice}}</td>
                        <td>{{product.productQuantity}}</td>
                        <td>{{product.productBrand}}</td>
                        <td>{{product.productCategory}}</td>
                         <td>
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn fab small color="green white--text" v-bind="attrs" v-on="on" >
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                            </template>
                            <span>Add Product</span>
                        </v-tooltip>
                        </td>
                        <td>
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn fab small color="orange white--text" v-bind="attrs" v-on="on" >
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                            </template>
                            <span>Edit</span>
                        </v-tooltip>
                        </td>
                        <td>
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn fab small color="red white--text" v-bind="attrs" v-on="on" >
                                    <v-icon>mdi-trash-can</v-icon>
                                </v-btn>
                            </template>
                            <span>Remove Product</span>
                        </v-tooltip>
                        </td>
                    </tr>
                </tbody>
            </table>
        </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "ManageProducts",
    data(){
        return{
        }
    },
    methods:{
        ...mapActions(['fetchProducts']),
        
    },
    computed: mapGetters(['allProducts']),
    created(){
        this.fetchProducts();
    }
}
</script>

<style scoped>
.styled-table {
    border-collapse: collapse;
    margin: 5px 0;
    font-size: 14px;
    font-family: sans-serif;
    width: 100%;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
    background-color: #333333;
    color: #ffffff;
    text-align: left;
}

.styled-table th, .styled-table td {
    padding: 12px 15px;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #333333;
}
</style>