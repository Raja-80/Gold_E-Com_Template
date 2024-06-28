<template>
    <div class="px-12 pb-4 pt-4 w-full " style="background-color: #1f1f1f;">

        <div v-if="services.items" class="flex flex-wrap justify-center ">

            <div v-for="(key, i) in Object.keys(services.items)" :key="i"
                class="flex items-center gap-3 w-full md:w-1/2 lg:w-1/6 lg:mx-4 my-4">

                <div v-if="services.items[key].show_icon" class="w-1/2 p-2">
                    <nuxt-img class="w-full"
                        :src="services.items[key].icon != null ? services.items[key].icon.src : 'https://storeno.b-cdn.net/stores/6-2024/1719032501065.png'"
                        alt="service Image"/>
                </div>

                <div v-if="services.items[key].show_info"
                    class="text-cenrter px-3 text-sm text-white font-normal w-1/2">
                    <h2>{{ services.items[key].info }}</h2>
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
            services: this.$settings.sections.services,

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