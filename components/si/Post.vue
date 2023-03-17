<template>
    <div>
        <div v-if="page=='collections'" class="flex flex-wrap items-center">
            <div class="w-full lg:w-2/3 px-2 lg:px-3">
                <div class="pb-full-res-cartegory relative">
                    <nuxt-link :to="`/posts/${item.slug}`" :aria-label="item.title">
                        <si-image width="400" height="400" class="h-full w-full absolute inset-0 object-cover" :src="item.image ? item.image.url : null" :alt="item.title"/>
                    </nuxt-link>
                </div>
            </div>
            <div class="w-full lg:w-1/3 px-2 lg:px-3 mt-8 lg:mt-0">
                <div class="flex flex-col justify-center items-center text-black">
                    <h3 class="text-base text-center ml-font-bold">{{ item.title }}</h3>
                    <p class="mt-2 text-sml text-center ">{{ item.excerpt }}</p>
                    <nuxt-link class="mt-4 h-12 px-12 flex justify-center items-center border border-gray-300 rounded-full hover:border-black transition-all ease-linear delay-75" :to="`/posts/${item.slug}`"  :aria-label="item.title">
                        <span class="text-sml">{{ $settings.sections.posts.button.text }}</span>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div v-else-if="page=='blog'" class="flex flex-wrap items-center">
            <div class="w-full">
                <div class="pb-full-res-blog relative">
                    <nuxt-link :to="`/posts/${item.slug}`" :aria-label="item.title">
                        <si-image width="400" height="400" class="h-full w-full absolute inset-0 object-cover" :src="item.image ? item.image.url : null" :alt="item.title"/>
                    </nuxt-link>
                </div>
            </div>
            <div class="w-full flex flex-col items-center lg:items-start">
                <div class="flex mt-3">
                    <div v-for="(category, i) in item.categories"  :key="i" >
                        <span class="text-sml primary-text mr-2">{{ category.name}} </span>
                    </div>
                </div>
                <div class="mt-2">
                    <nuxt-link :to="`/posts/${item.slug}`" :aria-label="item.title">
                        <h3 class="text-lg lg:text-xl">{{ item.title }}</h3>
                    </nuxt-link>
                </div>
                <div class="mt-3">
                    <nuxt-link class="ml-font-bold-hover w-max h-12 px-12 flex justify-center items-center border border-black rounded-full" :to="`/posts/${item.slug}`"  :aria-label="item.title">
                        <span class="text-sml text-black">{{ $settings.sections.posts.button.text }}</span>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div v-else class="w-full flex flex-col h-full">
            <div class="pb-full-res-post relative ">
                <nuxt-link :to="`/posts/${item.slug}`" :aria-label="item.title">
                    <si-image width="400" height="400" class="h-full w-full absolute inset-0  object-cover" :src="item.image ? item.image.url : null" :alt="item.title"/>
                </nuxt-link>
            </div>
            <div class="py-3 w-full flex flex-col ">
                <div v-if="item.categories.length > 0" class="flex mb-2">
                    <div  v-for="(category, i) in item.categories"  :key="i" >
                        <span class="text-sml mr-2">{{ category.name}} </span>
                    </div>
                </div>
                <div class="mb-2">
                    <nuxt-link :to="`/posts/${item.slug}`" :aria-label="item.title">
                        <h3 class="text-lg lg:text-xl">{{ item.title }}</h3>
                    </nuxt-link>
                </div>
                <nuxt-link :to="`/posts/${item.slug}`" :aria-label="item.title">
                    <p class="text-sml primary-text">{{ item.excerpt.length > 150? item.excerpt.slice(0, 150) + '...' : item.excerpt }}</p>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object,
        page: { type: String,required: false}
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