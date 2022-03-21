<template>
    <div class="">
        <Navbar/>
        <orderBox/>
        <Footer/>
        
    </div>    
</template>

<script>

import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import orderBox from '../components/order_box.vue';

export default {
    name: "Orders",  
    components:{
        Navbar,
        Footer,
        orderBox
    }  
}
</script>

<style scoped>

</style>