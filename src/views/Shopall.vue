<template>
<div>
    <Navbar/>
    <ProductBox/>
    <Footer/>
</div>
</template>

<script>

import Navbar from "../components/Navbar.vue";
import ProductBox from "../components/Product_box.vue";
import Footer from "../components/Footer.vue";

export default {
    name: 'ShopAll',
    components: {
        Navbar,
        ProductBox,
        Footer
    }
}
</script>

<style scoped>

</style>