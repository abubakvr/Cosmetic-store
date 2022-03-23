<template>
    <div class="my-3">
        <h2>Register Product</h2>
        <v-row>
            <v-col cols="5">
                <div class="mainbox pa-7">
                    <v-row>
                        <v-col cols="6">
                            <v-text-field filled label="Product Name"></v-text-field>
                        </v-col>    
                        <v-col cols="6">
                            <v-text-field filled label="Price"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field filled label="Brand"></v-text-field>
                        </v-col>    
                        <v-col cols="6">
                            <v-text-field filled label="Quantity"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <template>
                                <v-file-input
                                    label="Product Image"
                                    filled
                                    prepend-icon="mdi-camera"
                                ></v-file-input>
                            </template>
                        </v-col>
                        <v-col cols="6">
                            <v-select :items="items" filled label="Category"></v-select>
                        </v-col>  
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-textarea filled label="Description"></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-btn align="right" style="float:right;" color="orange white--text">Register Product</v-btn>
                        </v-col>
                    </v-row>

                </div>
            </v-col>
        </v-row>
        
    </div>
</template>


<script>
export default {
    name:"AddProducts",
    data(){
        return{
            items:["Face", "Lips", "Eyes", "Body"],
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