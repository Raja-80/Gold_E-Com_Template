<template>
    <div>
        <!-- Loader -->
        <div v-if="loading.subCollections && loading.posts" class="flex items-center justify-center my-5">
            <si-loader></si-loader>
        </div>
        <!-- Loader -->
        <!-- Sub Collections -->
        <div>
            <div v-if="subCollections.length>0" class="flex flex-wrap">
                <div v-for="(item,i) in subCollections" :key="i" class="w-full collections lg:w-1/2">
                    <si-collection :item="item"  page="collections"></si-collection>
                </div>
            </div>
        </div>
        <!-- Sub Collections -->
        <!-- One Blog -->
        <div v-if="posts.length > 0" class="px-3 pb-16 mt-16 lg:px-7 lg:pb-20">
            <div class="">
                <h2 class="text-base text-center ml-font-bold">{{ $settings.sections.posts.title  }}</h2>
            </div>
            <div class="flex flex-wrap">
                <div v-for="(item, i) in posts.slice(0,1)" :key="i" class="w-full mt-8 lg:mt-4">
                    <si-post :item="item" page="collections"></si-post>
                </div>
            </div>

        </div>
        <!-- One Blog -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            subCollections: [],
            collection: null,
            posts: [],
            loading: {
                subCollections: true,
                posts: true
            }
        }
    },
    async fetch() {
        this.subCollections = [];
        this.loading.subCollections = true;
        try {
            const { data } = await this.$storeino.collections.get({ slug: this.$route.params.slug });
            this.collection = data;
            const { data: { results } } = await this.$storeino.collections.search({ parent: data._id });
            this.subCollections = results;
        } catch (err) {
            this.$sentry.captureException(err);
        }
        this.loading.subCollections = false;

        this.posts = [];
        this.loading.posts = true;
        try {
            const { data } = await this.$storeino.pages.search({ status: 'PUBLISH', 'categories.slug-in': [this.collection.slug], type: 'POST' })
            this.posts = data.results
        } catch (err) {
            this.$sentry.captureException(err);
        }
        this.loading.posts = false;
    },
    mounted() {
        // All Pixels
        this.$storeino.fbpx('PageView');
        // Fb Pixels
        this.$tools.call('PAGE_VIEW');
    }
}
</script>

<style scoped>
@media (min-width:0px) and (max-width:1024px) {
    .collections:not(:nth-last-child(-n+1)) {
        padding-bottom: 3px;
    }
}

@media (min-width: 1024px) {
    .collections:not(:nth-last-child(-n+2)) {
        padding-bottom: 3px;
    }

    .collections:nth-child(odd) {
        padding-right: 1.5px;
    }

    .collections:nth-child(even) {
        padding-left: 1.5px;
    }

    [dir="rtl"] .collections:nth-child(odd) {
        padding-left: 1.5px;
        padding-right: 0;
    }

    [dir="rtl"] .collections:nth-child(even) {
        padding-right: 1.5px;
        padding-left: 0;
    }
}
</style>
