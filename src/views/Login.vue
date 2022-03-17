<template>
    <div>
        <Navbar/>
        <loginBox/>
    </div>
</template>

<script>

import Navbar from "../components/Navbar.vue"
import loginBox from "../components/Login_box.vue";

export default {
    name: 'Login',
    components: {
        Navbar,
        loginBox,
    }
}
</script>

<style scoped>

</style>