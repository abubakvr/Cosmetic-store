<template>
    <div class="my-3">
        <v-row class="pa-0">
            <v-col cols="7">
            <h2>Orders</h2>
            </v-col>
            <v-col cols="2">
                <v-text-field label="Search" ></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-select label="Filter By"  ></v-select>
            </v-col>
            
        </v-row>
        <v-row>
            <v-col cols="11">
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Date Ordered</th>
                        <th>Receiver Name</th>
                        <th>Receiver Address</th>
                        <th>Receiver No.</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="orders in getOrders" :key="orders._id">
                        <td>{{orders._id}}</td>
                        <td>{{orders.itemID}}</td>
                        <td>{{orders.itemName}}</td>
                        <td>{{orders.itemQuantity}}</td>
                        <td>{{orders.itemPrice}}</td>
                        <td>{{orders.dateOrdered}}</td>
                        <td>{{orders.receiverName}}</td>
                        <td>{{orders.receiverAddress}}</td>
                        <td>{{orders.receiverNo}}</td>
                         <td>
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn fab small color="blue white--text" v-bind="attrs" v-on="on" >
                                    <v-icon>mdi-view-list</v-icon>
                                </v-btn>
                            </template>
                            <span>View Order</span>
                        </v-tooltip>
                        </td>
                        <td>
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn fab small color="indigo white--text" v-bind="attrs" v-on="on" >
                                    <v-icon>mdi-clock</v-icon>
                                </v-btn>
                            </template>
                            <span>Completed</span>
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
import { mapGetters, mapActions} from 'vuex'
export default {
    name: "ViewOrders",
    data(){
        return{
        }
    },
    methods:{
        ...mapActions(['fetchOrders']),
        showOrders(){
            console.log(this.getOrders)
        }
    },
    computed: mapGetters(['getOrders']),
    created(){
        this.fetchOrders();
        console.log(this.getOrders)
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