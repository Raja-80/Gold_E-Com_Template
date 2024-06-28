<template>
    <div class="px-12 lg:py-10 py-8 bg-black">

        <div class="flex flex-col justify-center items-center pb-12 lg:px-80 px-8">
            <h1 class="text-white font-semibold text-3xl text-center">

                {{ brands.text }}
            </h1>

        </div>

        <div class="w-full">
            <carousel :perPage="5" :navigationEnabled="true">
                <slide v-for="(item, index) in items" :key="index">
                    <nuxt-link class="block w-24 h-20" :to="`/shop?brands=${item.slug}`">
                        <nuxt-img class="w-full h-full p-2 flex justify-center items-center"
                            :src="item.imageSrc ? item.imageSrc : $store.state.defaults.image"
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