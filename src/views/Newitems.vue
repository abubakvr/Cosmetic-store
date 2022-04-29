<template>
    <div>
        <Navbar/>
        <ProductCategory category="Body"/>
        <Footer/>
    </div>
</template>

<script>

import Navbar from "../components/Navbar.vue";
import ProductCategory from"../components/ProductCategory.vue"
import Footer from "../components/Footer.vue"

export default {
    name: 'NewItems',
    components: {
        Navbar,
        ProductCategory,
        Footer
    }
}
</script>

<style scoped>

</style>