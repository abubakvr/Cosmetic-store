<template>
    <div class="my-3">
        <v-row class="pa-0">
            <v-col cols="7">
            <h2>Orders</h2>
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
                        <th>Order ID</th>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Date Ordered</th>
                        <th>Delivery Date</th>
                        <th>Receiver Name</th>
                        <th>Receiver Address</th>
                        <th>Receiver No.</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>11</td>
                        <td>Abubakar</td>
                        <td>Ibrahim</td>
                        <td>909162222</td>
                        <td>Boskitechh@gmail.com</td>
                        <td>Boskitechh@gmail.com</td>
                        <td>Boskitechh@gmail.com</td>
                        <td>Boskitechh@gmail.com</td>
                        <td>Boskitechh@gmail.com</td>
                        <td><v-btn color="green white--text">Uncompleted</v-btn></td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Abubakar</td>
                        <td>Ibrahim</td>
                        <td>909162222</td>
                        <td>Boskitechh@gmail.com</td>
                        <td>Boskitechh@gmail.com</td>
                        <td>Boskitechh@gmail.com</td>
                        <td>Boskitechh@gmail.com</td>
                        <td>Boskitechh@gmail.com</td>
                        <td><v-btn color="green white--text">Uncompleted</v-btn></td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Abubakar</td>
                        <td>Ibrahim</td>
                        <td>909162222</td>
                        <td>Boskitechh@gmail.com</td>
                        <td>Boskitechh@gmail.com</td>
                        <td>Boskitechh@gmail.com</td>
                        <td>Boskitechh@gmail.com</td>
                        <td>Boskitechh@gmail.com</td>
                        <td><v-btn color="green white--text">Uncompleted</v-btn></td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Abubakar</td>
                        <td>Ibrahim</td>
                        <td>909162222</td>
                        <td>Boskitechh@gmail.com</td>
                        <td>Boskitechh@gmail.com</td>
                        <td>Boskitechh@gmail.com</td>
                        <td>Boskitechh@gmail.com</td>
                        <td>Boskitechh@gmail.com</td>
                        <td><v-btn color="green white--text">Uncompleted</v-btn></td>
                    </tr>
                </tbody>
            </table>
        </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "ViewOrders",
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