<template>
    <div>
        <div v-if="page=='collections'" class="flex flex-wrap items-center">
            <div class="w-full lg:w-2/3 px-2 lg:px-3">
                <div class="pb-full-res relative">
                    <nuxt-link :to="`/posts/${item.slug}`" :aria-label="item.title">
                        <si-image width="400" height="400" class="h-full w-full absolute inset-0 object-cover" :src="item.image ? item.image.url : null" :alt="item.title"/>
                    </nuxt-link>
                </div>
            </div>
            <div class="w-full lg:w-1/3 px-2 lg:px-3 mt-8 lg:mt-0">
                <div class="flex flex-col justify-center items-center text-black">
                    <h3 class="text-base text-center Century-bold">{{ item.title }}</h3>
                    <p class="mt-2 text-sm text-center ">{{ item.excerpt }}</p>
                    <nuxt-link class="mt-4 h-12 px-12 flex justify-center items-center border border-gray-300 rounded-full hover:border-black transition-all ease-linear delay-75" :to="`/posts/${item.slug}`"  :aria-label="item.title">
                        <span class="text-sm">{{ $settings.sections.posts.button.text }}</span>
                    </nuxt-link>
                </div>

            </div>
        </div>
        <div v-else class="h-full flex relative">
            <div class="w-full flex flex-col h-full bg-white shadow">
                <div class="w-100 pb-2/3 relative">
                    <nuxt-link :to="`/posts/${item.slug}`" :title="item.title" :aria-label="item.title">
                        <si-image width="400" height="400" class="h-full w-full absolute inset-0  object-cover" :src="item.image ? item.image.url : null" :alt="item.title"/>
                    </nuxt-link>
                </div>
                <div class="text-center h-full">
                    <nuxt-link :to="`/posts/${item.slug}`" :title="item.title" :aria-label="item.title">
                        <h3 class="p-2 text-xl">{{ item.title }}</h3>
                    </nuxt-link>
                    <nuxt-link :to="`/posts/${item.slug}`" :title="item.title" :aria-label="item.title">
                        <p>{{ item.excerpt }}</p>
                    </nuxt-link>
                </div>
                <nuxt-link :to="`/posts/${item.slug}`" class="flex ai-c p-2 justify-center bg-primary text-white" :title="item.title" :aria-label="item.title">
                    <svg class="h-5 w-5 pt-1 translate" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><g xmlns="http://www.w3.org/2000/svg"><path d="m22.5 9h-21c-.827 0-1.5-.673-1.5-1.5v-6c0-.827.673-1.5 1.5-1.5h21c.827 0 1.5.673 1.5 1.5v6c0 .827-.673 1.5-1.5 1.5zm-21-8c-.275 0-.5.224-.5.5v6c0 .276.225.5.5.5h21c.275 0 .5-.224.5-.5v-6c0-.276-.225-.5-.5-.5z" fill="#ffffff" data-original="#ffffff" style="" class=""></path></g><g xmlns="http://www.w3.org/2000/svg"><path d="m9.5 18h-8c-.827 0-1.5-.673-1.5-1.5v-4c0-.827.673-1.5 1.5-1.5h8c.827 0 1.5.673 1.5 1.5v4c0 .827-.673 1.5-1.5 1.5zm-8-6c-.275 0-.5.224-.5.5v4c0 .276.225.5.5.5h8c.275 0 .5-.224.5-.5v-4c0-.276-.225-.5-.5-.5z" fill="#ffffff" data-original="#ffffff" style="" class=""></path></g><g xmlns="http://www.w3.org/2000/svg"><path d="m23.5 12h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z" fill="#ffffff" data-original="#ffffff" style="" class=""></path></g><g xmlns="http://www.w3.org/2000/svg"><path d="m23.5 15h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z" fill="#ffffff" data-original="#ffffff" style="" class=""></path></g><g xmlns="http://www.w3.org/2000/svg"><path d="m23.5 18h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z" fill="#ffffff" data-original="#ffffff" style="" class=""></path></g><g xmlns="http://www.w3.org/2000/svg"><path d="m23.5 21h-23c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h23c.276 0 .5.224.5.5s-.224.5-.5.5z" fill="#ffffff" data-original="#ffffff" style="" class=""></path></g><g xmlns="http://www.w3.org/2000/svg"><path d="m23.5 24h-23c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h23c.276 0 .5.224.5.5s-.224.5-.5.5z" fill="#ffffff" data-original="#ffffff" style="" class=""></path></g></g></svg>
                    <span class="w-full text-center">{{ $settings.sections.posts.button.text }}</span>
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