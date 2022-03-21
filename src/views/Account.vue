<template>
    <div class="">
        <Navbar/>
        <accountBox/>
        <Footer/>
        
    </div>    
</template>

<script>

import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import accountBox from '../components/Account_box.vue';

export default {
    name: "Account",  
    components:{
        Navbar,
        Footer,
        accountBox
    }  
}
</script>

<style scoped>

</style>