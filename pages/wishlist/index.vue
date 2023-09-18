<template>
    <div>
        <!-- loader -->
        <div v-if="loading.wishlist" class="flex items-center justify-center my-5">
            <si-loader></si-loader>
        </div>
        <!-- empty -->
        <div v-if="!loading.wishlist && items.length == 0" class="flex justify-center p-5">
            <div class="flex flex-col items-center">
                <h2 class="w-full mb-3 text-lg text-center">{{ $settings.sections.wishlist.empty_text }}</h2>
                <nuxt-link to="/shop" class="flex items-center justify-center px-4 py-2 border rounded-full border-primary">
                    <span class="w-full text-sml ml-font-bold-hover">{{ $settings.sections.wishlist.buttons.back_to_shop_text }}</span>
                </nuxt-link>
            </div>
        </div>
        <!-- empty design -->
        <!-- Content -->
        <div class="mb-16" v-if="items.length > 0">
                <!-- title -->
                <div class="px-5 my-5 xl:px-10">
                    <h2 class="text-lg ml-font-bold">{{ $settings.sections.wishlist.title }}</h2>
                </div>
                <!-- title -->
                <!--  -->
                <div class="flex flex-wrap mx-1 xl:mx-5">
                    <div v-for="(item, i) in items" :key="i" class="w-1/2 px-4 mb-4 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:px-5 lg:mb-8">
                        <si-product :item="item" page="wishlist" ></si-product>
                    </div>
                </div>
                <!--  -->
        </div>
        <!-- Content -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: { wishlist: true },
            items: []
        }
    },
    async fetch() {
        this.$store.state.seo.title = this.$settings.sections.wishlist.title + ' - ' + this.$settings.store_name;
        this.$store.state.seo.description = this.$settings.sections.wishlist.description || this.$settings.store_description;
        await this.initWishlist();
    },
    mounted() {
        // All Pixels
        this.$storeino.fbpx('PageView');
        // Fb Pixels
        this.$tools.call('PAGE_VIEW');
    },
    watch: {
        async "$store.state.wishlist"() {
            await this.initWishlist();
        }
    },
    methods: {
        async initWishlist() {
            this.items = [];
            const ids = this.$store.state.wishlist.map(item => item._id);
            this.loading.wishlist = true;
            if (ids.length > 0) {
                try {
                    const response = await this.$storeino.products.search({ '_id-in': ids, limit: 1000 });
                    this.items = response.data.results;
                } catch (err) {
                    this.$sentry.captureException(err);
                }
            }
            this.loading.wishlist = false;
        },
        async remove(item) {
            this.$tools.call('REMOVE_FROM_WISHLIST', item);
        }
    },
}
</script>