<template>
    <div class="px-12 lg:py-20 py-12 bg-black">

        <div class="flex flex-col justify-center items-center lg:pb-24 pb-14 lg:px-80 px-10">
            <h1 class="text-white font-semibold text-3xl text-center">

                {{ brands.text }}
            </h1>

        </div>

        <div class="py-5 w-full">
            <carousel :perPage="5" :navigationEnabled="true">
                <slide v-for="(item, index) in items" :key="index">
                    <nuxt-link class="block w-24 h-24" :to="`/shop?brands=${item.slug}`">
                        <nuxt-img class="w-full h-full object-cover p-2"
                            :src="item.imageSrc ? item.imageSrc : $store.state.defaults.brandImage"
                            alt="brand image" />
                    </nuxt-link>

                </slide>
            </carousel>
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            brands: this.$settings.sections.brands,
            items: []

        };
    },

    async fetch() {

        await this.getBrands();
    },
    methods: {

        async getBrands() {
            this.loading = true;
            try {
                if (this.$settings.sections.brands.brands.items && this.$settings.sections.brands.brands.items.length > 0) {
                    this.items = this.$settings.sections.brands.brands.items;
                    console.log("Brands", this.items)
                } else {
                    const { data } = await this.$storeino.brands.search({})
                    this.items = data.results
                }
            } catch (e) {
                console.log({ e });
            }

        }
    },


}
</script>

<style>
.bg {
    background-color: #f7f7f7;
}
</style>