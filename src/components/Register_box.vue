<template>
    <v-container width="100%" height="100%" class="my-12">
        <v-col>
            <v-row justify="center" >
                <v-sheet color="white" elevation="4" width="600px" height="480px" class="my-12">
                    <v-toolbar flat color="#222222" class="white--text">
                        <v-toolbar-title>Register</v-toolbar-title>
                    </v-toolbar>
                    <v-sheet class="pa-10">
                        <v-row>
                            <v-text-field outlined label="Firstname"></v-text-field><v-spacer></v-spacer>
                            <v-text-field outlined label="Lastname"></v-text-field>
                        </v-row>
                        <v-row>
                            <v-text-field outlined label="Email"></v-text-field><v-spacer></v-spacer>
                            <v-text-field outlined label="Username"></v-text-field>
                        </v-row>
                        <v-row>
                            <v-text-field outlined label="Password"></v-text-field><v-spacer></v-spacer>
                            <v-text-field outlined label="Confirm Password"></v-text-field>
                        </v-row>
                        <v-row>
                        <v-btn color="orange" width="100%" height="50px" class="white--text h3--text" style="font-size:19px" >Register</v-btn>
                        </v-row>
                        <v-row>
                            <v-btn plain color="blue" justify="start" class="px-0 my-2" @click="$router.push('/login')">Already have an account? Login</v-btn>
                        </v-row>
                    </v-sheet>
                </v-sheet>
            </v-row>
        </v-col>
    </v-container>
</template>

<script>
export default {
    name: "registerBox",
}
</script>

<style scoped>

</style>