<template>
    <div class="px-12 lg:py-20 py-12">

        <div class="flex flex-col justify-center items-center lg:pb-24 pb-14 lg:px-80 px-10">
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
                class="button underline text-center py-4 px-8 border border-black hover:bg-black hover:border-black hover:shadow hover:text-white">
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
            /* tags: this.sections.products.tags,
            collections: this.sections.products.collections, */
            items: []

        };
    },

    async fetch() {
        let filter = { status: 'PUBLISH', productType: 'PHYSICAL' };
        /* if (this.collections.length > 0) filter['collections._id-in'] = this.collections.map(c => c._id);
        if (this.tags.length > 0) filter['tags._id-in'] = this.tags.split(','); */
        await this.getProducts(filter);
    },
    methods: {

        async getProducts(filter) {
            this.loading = true;
            try {
                /* if (this.$settings.sections.products.items && this.$settings.sections.products.items.length > 0) {
                    this.items = this.$settings.sections.products.items.filter(item => item.productType === 'PHYSICAL');
                    console.log("Physical Products From Customizer", this.items);
                } else { */
                const { data } = await this.$storeino.products.search(filter)
                this.items = data.results
                /* } */
            } catch (e) {
                console.log({ e });
            }
            this.loading = false;
        }
    },


}
</script>

<style>
.bg {
    background-color: #f7f7f7;
}
</style>