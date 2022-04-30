<template>
    <div class="">
        <Navbar/>
        <accountBox/>
        
    </div>    
</template>

<script>

import Navbar from "../components/Navbar.vue";
import accountBox from '../components/Account_box.vue';

export default {
    name: "Account",  
    components:{
        Navbar,
        accountBox
    }  
}
</script>

<style scoped>

</style>