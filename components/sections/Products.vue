<template>
    <div class="container pb-20 pt-20 ">

        <div class="flex flex-col justify-center items-center lg:pb-28 lg:px-80 px-10">
            <h1 class="text-black font-semibold text-3xl text-center">
                All that GLITTERS is SOLID 14K GOLD.
                <!-- {{ products.title }} -->
            </h1>


        </div>


        <div class="py-5">
            <si-carousel component="si-product" :list="items"></si-carousel>
        </div>

        <div class="flex flex-col justify-center items-center">
            <router-link to="/shop"
                class="button text-center py-4 px-8 border border-black hover:bg-black hover:border-black hover:shadow hover:text-white">
                View All Products
                <!-- {{ products.view_products }} -->
            </router-link>
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
        /* products: this.$settings.sections.products */
            items: []
        };
    },

    async fetch() {

        try {

            /* if (this.$settings.sections.products.items && this.$settings.sections.products.items.length > 0) {
                this.items = this.$settings.sections.products.items.filter(item => item.productType === 'PHYSICAL');
                console.log("Physical Products From Customizer", this.items);
            } else { */
            const { data } = await this.$storeino.products.search({});

            this.items = data.results

            /* } */

        } catch (e) {

            console.log({ e });

        }

    }

}
</script>

<style>
.bg {
    background-color: #f7f7f7;
}
</style>