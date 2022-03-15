<template>
<div>
    <Navbar/>
    <ItemContainer/>
    <DescriptionBox/>
    <Footer/>
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ItemContainer from '../components/Item_container.vue';
import DescriptionBox from "../components/Desciption_box.vue";
import Footer from "../components/Footer.vue";

export default {
    name: 'ViewItem',
    components: {
        Navbar,
        ItemContainer,
        DescriptionBox,
        Footer
    }
}
</script>

<style scoped>

</style>