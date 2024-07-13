<template>
    <div class="px-12 lg:py-10 py-8 bg-black">

        <div class="flex flex-col justify-center items-center pb-12 lg:px-40 px-0">
            <h1 v-if="brands.show_text" class="text-white font-semibold lg:text-3xl md:text-2xl sm:text-xl text-xl text-center">

                {{ brands.text }}

            </h1>

        </div>

        <div class="w-full">

            <carousel v-if=" items.length > 0 " 
                :perPageCustom="[[240, 1], [480, 2], [768, 3], [1024, 4]]"
                :autoplay="true"
                :autoplayTimeout="8000"
                :autoplayHoverPause="true"
                :navigationEnabled= "false"
                :paginationActiveColor="'#949fa8'"
                :paginationColor="'#ffffff'"
                >

                <slide v-for="(item, index) in items" :key="index">
                    <si-brand :item="item"></si-brand>
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

    async mounted() {
        await this.fetchData();
    },

    async fetchData() {

        await this.getBrands();
    },

    methods: {

        async getBrands() {

            try {
                if (this.$settings.sections.brands.items && this.$settings.sections.brands.items.length > 0) {
                    this.items = this.$settings.sections.brands.items;
                    console.log("Brands", this.items)
                } else {
                    const { data } = await this.$storeino.brands.search({})
                    this.items = data.results
                }
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
