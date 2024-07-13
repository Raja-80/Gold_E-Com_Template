<template>
    <div>
        <div v-if="page=='collections'" class="flex flex-wrap items-center">
            <div class="w-full px-2 lg:w-2/3 lg:px-3">
                <div class="relative pb-full-res-cartegory">
                    <nuxt-link :to="`/posts/${item.slug}`" :aria-label="item.title">
                        <si-image width="400" height="400" class="absolute inset-0 object-cover w-full h-full" :src="item.image ? item.image.url : null" :alt="item.title"/>
                    </nuxt-link>
                </div>
            </div>
            <div class="w-full px-2 mt-8 lg:w-1/3 lg:px-3 lg:mt-0">
                <div class="flex flex-col items-center justify-center ">
                    <h3 class="text-base text-center ml-font-bold">{{ item.title }}</h3>
                    <p class="mt-2 text-center text-sml ">{{ item.excerpt }}</p>
                    <nuxt-link class="flex items-center justify-center h-12 px-12 mt-4 transition-all ease-linear delay-75 border rounded-full border-primary hover:font-semibold" :to="`/posts/${item.slug}`"  :aria-label="item.title">
                        <span class="text-sml">{{ $settings.sections.posts.button.text }}</span>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div v-else-if="page=='blog'" class="flex flex-wrap items-center">
            <div class="w-full">
                <div class="relative pb-full-res-blog">
                    <nuxt-link :to="`/posts/${item.slug}`" :aria-label="item.title">
                        <si-image width="400" height="400" class="absolute inset-0 object-cover w-full h-full" :src="item.image ? item.image.url : null" :alt="item.title"/>
                    </nuxt-link>
                </div>
            </div>
            <div class="flex flex-col items-center w-full lg:items-start">
                <div class="flex gap-2 mt-3">
                    <div v-for="(category, i) in item.categories"  :key="i" >
                        <span class="text-sml text-primary">{{ category.name}} </span>
                    </div>
                </div>
                <div class="mt-2">
                    <nuxt-link :to="`/posts/${item.slug}`" :aria-label="item.title">
                        <h3 class="text-lg lg:text-xl">{{ item.title }}</h3>
                    </nuxt-link>
                </div>
                <div class="mt-3">
                    <nuxt-link class="flex items-center justify-center h-12 px-12 border rounded-full hover:font-semibold w-max border-primary" :to="`/posts/${item.slug}`"  :aria-label="item.title">
                        <span class="text-sml ">{{ $settings.sections.posts.button.text }}</span>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div v-else class="flex flex-col w-full h-full">
            <div class="relative pb-full-res-post ">
                <nuxt-link :to="`/posts/${item.slug}`" :aria-label="item.title">
                    <si-image width="400" height="400" class="absolute inset-0 object-cover w-full h-full" :src="item.image ? item.image.url : null" :alt="item.title"/>
                </nuxt-link>
            </div>
            <div class="flex flex-col w-full py-3 ">
                <div v-if="item.categories.length > 0" class="flex mb-2">
                    <div  v-for="(category, i) in item.categories"  :key="i" >
                        <span class="mr-2 text-sml">{{ category.name}} </span>
                    </div>
                </div>
                <div class="mb-2">
                    <nuxt-link :to="`/posts/${item.slug}`" :aria-label="item.title">
                        <h3 class="text-lg lg:text-xl">{{ item.title }}</h3>
                    </nuxt-link>
                </div>
                <nuxt-link :to="`/posts/${item.slug}`" :aria-label="item.title">
                    <p class="text-sml text-primary">{{ item.excerpt.length > 150? item.excerpt.slice(0, 150) + '...' : item.excerpt }}</p>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object,
        page: { type: String, required: false }
    },
}
</script>

<style scoped>
.pb-full-res-cartegory,
.pb-full-res-blog,
.pb-full-res-post {
    padding-bottom: 100%;
}

@media (min-width: 1024px) {
    .pb-full-res-cartegory {
        padding-bottom: 55%;
    }

    .pb-full-res-blog {
        padding-bottom: 43%;
    }

    .pb-full-res-post {
        padding-bottom: 80%;
    }
}
</style>