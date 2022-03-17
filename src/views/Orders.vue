<template>
    <div class="">
        <Navbar/>
        <Footer/>
        
    </div>    
</template>

<script>

import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "Orders",  
    components:{
        Navbar,
        Footer
    }  
}
</script>

<style scoped>

</style>