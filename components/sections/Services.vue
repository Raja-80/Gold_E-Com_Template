<template>
    <div class="px-12 pb-4 pt-4 w-full " style="background-color: #1f1f1f;">

        <!-- Services -->

        <!-- <div v-if="services.items" class="container flex flex-wrap flex-row justify-center w-full">

            <div v-for="(key, i) in Object.keys(services.items)" :key="i"
                class="flex flex-row items-center gap-3 lg:gap-5 w-full md:w-1/2 lg:w-4/5 py-6">

                <nuxt-img v-if="services.items[key].show_icon" class=" h-11 mb-6 pr-2 "
                    :src="services.items[key].icon != null ? services.items[key].icon.src : 'https://storeno.b-cdn.net/stores/6-2024/1719032501065.png'"
                    alt="company logo" />

                <div class="w-full">
                    <h2 v-if="services.items[key].show_title" class="text-white text-sm font-normal ">
                        {{ services.items[key].title }}
                    </h2>
                </div>


            </div>

        </div> -->

        <div class=" flex flex-wrap justify-between">
            <div class="w-full sm:w-1/3 md:w-1/5 p-3" v-for="(item, index) in items" :key="index">
                <div class="flex w-full flex-row justify-center items-center">
                    <div class="w-1/2 p-2">
                        <img class="w-full" :src="item.image ? item.image.src : 'https://storeno.b-cdn.net/stores/6-2024/1719032501065.png'"
                            :alt="item.text" >
                    </div>
                    <div class="text-cenrter px-3 text-sm text-white font-normal w-1/2">
                        <h2>{{ item.text }}</h2>
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
            /* services: this.$settings.sections.services, */

            items: [
                {
                    image: { src: 'https://storeno.b-cdn.net/stores/6-2024/1719032501065.png' },
                    text: 'FREE SHIPPING',
                    
                },
                {
                    image: { src: 'https://storeno.b-cdn.net/stores/6-2024/1719032501065.png' },
                    text: 'ALWAYS 14K SOLID GOLD',
                },
                {
                    image: { src: 'https://storeno.b-cdn.net/stores/6-2024/1719032501065.png' },
                    text: 'LIFETIME GUARANTEE',
                    
                },
                {
                    image: { src: 'https://storeno.b-cdn.net/stores/6-2024/1719032501065.png' },
                    text: 'MADE IN LOS ANGELS',
                },
                {
                    image: { src: 'https://storeno.b-cdn.net/stores/6-2024/1719032501065.png' },
                    text: 'SUSTAINABLE & ECO FRIENDLY',
                    
                }
            ]

        }
    }
}
</script>

<style scoped>
/* No custom styles needed, all handled by Tailwind CSS */
</style>