<template>
    <!-- v-if="reviews_section.show_reviews_section"  -->
    <div class="px-12 lg:py-32 py-16 " style="background-color: #f7f4ef;">
        <div class="flex flex-col justify-center items-center w-full">
            <h1 class="text-black font-semibold text-3xl text-center w-full lg:pb-24 pb-14">

                <!-- {{ reviews_section.title }} -->
                  All Reviews

            </h1>

            <!-- v-if="reviews.results.length > 0" -->
        

            <div class="w-full">
                <carousel :perPage="3" :navigationEnabled="true">
                <slide v-for="(item, index) in items" :key="index">
                    <review :item="item"></review>
                </slide>
            </carousel>
            </div>

        </div>

    </div>
</template>

<script>
import review from '~/components/si/review.vue';

export default {
    components: {
        review,
    },
    data() {
        return {
            reviews: { paginate: { page: 0 }, results: [] },
            /* reviews_section: this.$settings.sections.reviews, */
        }
    },

    async fetch() {
        const { data } = await this.$storeino.reviews.search({ published: true })
        this.reviews = data;

    },
}
</script>

<style></style>
