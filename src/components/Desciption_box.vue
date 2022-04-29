<template>
    <div>
       <div class="mainBox">
            <div class="box_header">
                <p>Description</p>
            </div>
            <div class="box_content">
                <p>{{oneProduct.productDescription}}</p>
            </div>
       </div>
    </div>    
</template>

<script>

import{ mapActions, mapGetters } from 'vuex'

export default {
    name: 'DescriptionBox',
    data(){
        return{
            id: this.$route.params.id,
        }
    },
    methods: {
        ...mapActions(['fetchOneProduct']),

        plusfunc(){
            this.quantity++;
        },

        minusfunc(){
            this.quantity--;
        },

    },
    computed:mapGetters(['oneProduct']),
    mounted(){
        this.fetchOneProduct(this.id)
    }
}

</script>

<style scoped>

    .mainBox{
        width: 900px;
        height: auto;
        margin: 30px auto;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        margin-top: 0px;
        margin-bottom: 250px;
    }

    .box_header{
        height: 50px;
        width: 100%;
        border-bottom: 1px solid #e0dfdf;
        padding: 13px;
        font-size: 20px;
        color: #141414;
    }

    .box_content{
        padding: 15px;
    }

    @media only screen and (min-width: 1500px) {
        .mainBox{
            width: 50%;
        }
    }

     @media only screen and (min-width: 1200px) {
        .mainBox{
            width: 900px;
        }
    }

    @media only screen and (max-width: 700px) {
        .mainBox{
            width: 95%;
            margin: 30px auto;
            padding: 10px;
            margin-bottom: 400px;
        }
    }
</style>