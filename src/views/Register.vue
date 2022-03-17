<template>
    <div>
        <Navbar/>
        <registerBox/>
    </div>
</template>

<script>

import registerBox from "../components/Register_box.vue";
import Navbar from "../components/Navbar.vue";
export default {
    name: 'Register',
    components: {
        registerBox,
        Navbar
    }
}
</script>

<style scoped>

</style>