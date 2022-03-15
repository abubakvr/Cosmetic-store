<template>
  <div>
    <Navbar/>
    <WelcomeBanner/>
    <BestSellers/>
    <BoxView/>
    <Trending/>
    <DiscoverMore/>
  </div> 
</template>

<script>

import Navbar from "../components/Navbar.vue";
import WelcomeBanner from "../components/Welcome_banner.vue";
import BoxView from "../components/Black_box.vue";
import BestSellers from "../components/Best_sellers.vue";
import Trending from "../components/Trending.vue";
import DiscoverMore from "../components/Discover_more.vue";

export default {  
  name: 'Home',
  components: {
    Navbar,
    WelcomeBanner,
    BoxView,
    BestSellers,
    Trending,
    DiscoverMore
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
