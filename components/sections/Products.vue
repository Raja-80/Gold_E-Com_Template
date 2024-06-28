<template>
    <div class="px-12 lg:py-20 py-12">

        <div class="flex flex-col justify-center items-center lg:pb-24 pb-14 lg:px-80 px-10">
            <h1 class="text-black font-semibold text-3xl text-center">
                {{ products.title }}
            </h1>


        </div>

        <div class="py-5">
            <carousel :perPage="4" :navigationEnabled="true" :paginationEnabled="false" :autoplay="true">
                <slide v-for="(item, index) in items" :key="index" class="">
                    <product :item="item"></product>
                </slide>
            </carousel>
        </div>

        <div class="flex flex-col justify-center items-center">
            <router-link :to="`/${products.view_products_url}`" 
                class="button underline text-center py-4 px-8 border border-black hover:bg-black hover:border-black hover:shadow hover:text-white">
                {{ products.view_products }}
            </router-link>
        </div>

    </div>
</template>

<script>
import Product from '~/components/si/Product.vue';

export default {
    components: {
        Product,
    },
    data() {
        return {
            products: this.$settings.sections.homepage.products,
            collections: this.$settings.sections.homepage.products.collections,
            items: []
        };
    },

    async fetch() {
        console.log('star async fetch function');
        let filter = { status: 'PUBLISH' };
        if (this.collections.length > 0) filter['collections._id-in'] = this.collections.map(c => c._id);
        await this.getProducts(filter);
        console.log('end async fetch function');
    },

    methods: {
        async getProducts(filter) {

            try {
                if (this.$settings.sections.homepage.products.items && this.$settings.sections.homepage.products.items.length > 0) {
                    this.items = this.$settings.sections.homepage.products.items;
                    console.log("Physical Products From Customizer", this.items);
                } else {
                    console.log('star await.$storeino.products fetch function');
                    const { data } = await this.$storeino.products.search({})
                    console.log('Fetched products:', data.results);
                    this.items = data.results

                }
            } catch (e) {
                console.log({ e });
            }

        }
    },


}
</script>

<style></style>