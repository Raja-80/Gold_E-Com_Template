<template>

    <div class="w-full flex justify-center items-center" :style="{ height: '100px' }">
        <nuxt-link class=" w-20 h-18 flex justify-center items-center" :to="`/shop?brands=${item.slug}`">
            <nuxt-img class="w-full h-full p-2 flex justify-center items-center"
                :src="item.imageSrc ? item.imageSrc : $store.state.defaults.image" alt="brand image" />
        </nuxt-link>
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