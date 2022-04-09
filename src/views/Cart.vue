<template>
    <div>
        <Navbar/>
            <CartBox :key="$route.fullPath"/>
        <Footer/>
    </div>
</template>

<script>

import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import CartBox from "../components/Cart_box.vue";

export default {
    name: 'Cart',
    components: {
        Navbar,
        Footer,
        CartBox
    }
}
</script>

<style scoped>

</style>