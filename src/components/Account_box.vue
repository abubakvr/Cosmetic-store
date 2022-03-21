<template>
    <v-container width="100%" height="100%" class="my-6">
        <v-col>
            <v-row justify="center" >
                <v-sheet color="white" elevation="4" width="600px" height="480px" class="my-6">
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
                       
                    </v-sheet>
                </v-sheet>
            </v-row>
        </v-col>
    </v-container>
</template>

<script>
export default {
    name: "accountBox",
}
</script>

<style scoped>

</style>