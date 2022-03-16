<template>
    <div>
       <div class="mainBox">
            <div class="box_header">
                <p>Description</p>
            </div>
            <div class="box_content">

            <h3> Advantages of NAGARAKU Eyelash Extensions:</h3>

            <p>NAGARAKU's specially designed materials have three primary features: light, natural and soft.</p>

            <p>Eyelashes remain unchanged for 12 months or longer.</p>

            <p>Attached to foils paper, our eyelashextensions are convenient to pick up and transfer, and not easy to deform or break.</p>

            <p>With solid packaging, eyelashes bear no damage during transportation.</p>

            <p>We are manufacturetherefore we secure the fastest delivery and most favorable price.</p>

            <p>ertified by MSDS and SDS, NAGARAKU eyelashes are handmade in whole, which it cruelty free. We use environment-friendly materials only.</p>

            <p>Bulk price and customized label are negotiable.</p>
            </div>
       </div>
    </div>    
</template>

<script>


export default {
    name: 'DescriptionBox',
}

</script>

<style scoped>

    .mainBox{
        width: 900px;
        height: auto;
        margin: 30px auto;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        margin-top: 50px;
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
        }
    }
</style>