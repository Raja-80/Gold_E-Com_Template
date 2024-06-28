<template>
    <div class="px-12 lg:py-32 py-16">
        <!-- v-if="posts_info.show_section" -->
        <div class="flex flex-col justify-center items-center lg:pb-24 pb-14 px-5 ">

            <h1 class="text-black font-semibold text-3xl text-center ">

                Our POSTS

                <!-- {{ posts_info.title }} -->

            </h1>

        </div>

        <!-- v-if="items.length > 0" -->

        <div>
            <carousel :perPage="3" :navigationEnabled="true" :paginationEnabled="false" :autoplay="true">
                <slide v-for="(item, index) in items" :key="index">
                    <blog :item="item"></blog>
                </slide>
            </carousel>
        </div>

    </div>
</template>

<script>
import Blog from '~/components/si/Blog.vue';

export default {
    components: {
        Blog,
    },
    data() {
        return {
            /* posts_info: this.$settings.sections.posts, */
            items: [],

        }
    },
    async fetch() {

        try {
            const filter = {};
            const { data } = await this.$storeino.pages.search({ type: 'POST', status: 'PUBLISH' })
            this.items = data.results
        } catch (e) {
            console.log({ e });
        }

    }
}
</script>

<style></style>