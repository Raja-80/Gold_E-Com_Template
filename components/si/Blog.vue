<template>

    <div>
        <div v-if="item" :style="{ height: '400px' }"
            class="flex flex-row justify-center items-center px-6 w-full overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">

            <div class="flex flex-col justify-between items-center w-1/2 h-full p-4">
                <nuxt-link :to="`/posts/${item.slug}`" class="flex justify-start pb-6 font-semibold w-full h-1/5">

                    <div class=" lg:text-lg text-base text-black w-full ">

                        {{ item.title }}

                    </div>

                </nuxt-link>

                <nuxt-link :to="`/posts/${item.slug}`" class="font-light leading-loose w-full overflow-hidden text-ellipsis h-3/5" v-html="item.content">

                </nuxt-link>

                <div v-if="this.$settings.sections.posts.show_btn" class="flex justify-start items-end w-full h-1/5">
                    
                    <nuxt-link :to="`/posts/${item.slug}`"
                        class="button text-xs font-extralight text-center py-2 px-3 border border-black hover:bg-black hover:border-black hover:shadow hover:text-white">
                        
                        {{ this.$settings.sections.posts.read_more }}
                    </nuxt-link>
                </div>
            </div>

            <div class="flex justify-center items-center w-1/2 h-full">

                <nuxt-img :to="`/posts/${item.slug}`" class=" object-contain h-full"
                    :src="item.image.url != null ? item.image.url : 'https://storeno.b-cdn.net/stores/6-2024/1718430695110.png'"
                    alt="Post Image" />

            </div>

        </div>

    </div>

</template>

<script>
export default {
    props: {
        item: Object
    },
    methods: {

    },
}
</script>

<style></style>