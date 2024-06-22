<template>
    <div class="container pb-20 pt-20">
        <div class="flex flex-wrap justify-between">
            <div class="w-full sm:w-1/3 md:w-1/5 p-2" v-for="(promo, index) in promos" :key="index">
                <div class="text-center bg-white shadow-md rounded-lg p-4">
                    <figure class="mb-4">
                        <img :src="promo.imgSrc" :alt="promo.altText" class="mx-auto">
                    </figure>
                    <div class="text-lg font-semibold">
                        <p v-html="promo.text"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'PromoSection',
    data() {
        return {
            promos: [
                {
                    imgSrc: "//www.babygold.com/cdn/shop/files/Group_10330_large.png?v=1697108484",
                    altText: "Free Shipping",
                    text: "Free Shipping"
                },
                {
                    imgSrc: "//www.babygold.com/cdn/shop/files/Group_10340_large.png?v=1697108626",
                    altText: "ALWAYS 14K Solid Gold",
                    text: "ALWAYS 14K <br>Solid Gold"
                },
                {
                    imgSrc: "//www.babygold.com/cdn/shop/files/Group_10320_large.png?v=1697108626",
                    altText: "Lifetime Guarantee",
                    text: "Lifetime <br>Guarantee"
                },
                {
                    imgSrc: "//www.babygold.com/cdn/shop/files/Group_10323_large.png?v=1697108626",
                    altText: "MADE IN LOS ANGELS",
                    text: "MADE IN <br>LOS ANGELS"
                },
                {
                    imgSrc: "//www.babygold.com/cdn/shop/files/Group_10337_large.png?v=1697108881",
                    altText: "SUSTAINABLE & ECO FRIENDLY",
                    text: "SUSTAINABLE &<br>ECO FRIENDLY"
                }
            ]
        }
    }
}
</script>

<style scoped>
/* No custom styles needed, all handled by Tailwind CSS */
</style>