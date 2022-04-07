<template>
<div>
    <Navbar/>
    <ProductCategory category="Eyes"/>
    <Footer/>
</div>
</template>

<script>

import Navbar from "../components/Navbar.vue";
import ProductCategory from "../components/ProductCategory.vue";
import Footer from "../components/Footer.vue";

export default {
    props:{

    },
    name: 'Eyes',
    components: {
        Navbar,
        ProductCategory,
        Footer
    }
}
</script>

<style scoped>

</style>