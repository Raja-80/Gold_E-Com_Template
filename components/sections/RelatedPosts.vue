<template>
  <div class=" mb-16" v-if="items.length > 0">
    <div class="pt-5 border-t border-gray-300 lg:mx-5 xl:mx-10">
      <h2 class="pb-8 text-base text-center">{{ $settings.sections.post.related.title }}</h2>
      <!-- loader -->
      <div v-if="loading" class="flex items-center justify-center my-5">
        <si-loader></si-loader>
      </div>
    </div>
    <!-- loader -->
    <!--related post -->
    <div class="flex flex-wrap mx-1 xl:mx-5">
      <div v-for="(item, i) in items" :key="i" class="w-full px-4 mb-5 lg:w-1/2 xl:px-5 lg:mb-10">
        <si-post :item="item"></si-post>
      </div>
    </div>
    <!-- related post -->
    <div class="flex justify-center" v-if="$settings.sections.posts.show_more_text">
      <nuxt-link class="flex items-center justify-center h-12 px-12 transition-all ease-linear delay-75 border rounded-full border-primary ml-font-bold-hover" to="/blog">
            <span class="text-sml">{{ $settings.sections.posts.show_more_text}}</span>
        </nuxt-link>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {
      loading: true,
      items: [],
    };
  },
  async fetch() {
    try {
      const ids = this.item.categories.map(c => c._id);
      const { data } = await this.$storeino.pages.search({
        "_id-ne": this.item._id,
        "categories._id-in": ids
      })
      this.items = data.results
    } catch (err) {
      this.$sentry.captureException(err);
    }
    this.loading = false;
  }
};
</script>