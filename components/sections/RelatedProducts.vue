<template>
  <div v-if="items.length > 0" class="">
    <div class="pt-6  mt-7 lg:mx-5 xl:mx-10">
      <h2 class="pb-8 text-base text-center">{{ $settings.sections.product.related.title }}</h2>
      <!-- loader -->
      <div v-if="loading" class="flex items-center justify-center my-5">
        <si-loader></si-loader>
      </div>
    </div>
    <!-- loader -->
    <!--related product  -->
    <div class="flex flex-wrap mx-1 xl:mx-5">
      <div v-for="(item, i) in items" :key="i" class="w-1/2 px-4 mb-4 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:px-5 lg:mb-8">
        <si-product :item="item"></si-product>
      </div>
    </div>
    <!-- related product -->
    <div class="flex justify-center" v-if="$settings.sections.product.related.show_more_text">
      <nuxt-link class="flex items-center justify-center h-12 px-12 transition-all ease-linear delay-75 border rounded-full border-primary ml-font-bold-hover" to="/shop">
            <span class="text-sml">{{ $settings.sections.product.related.show_more_text }}</span>
        </nuxt-link>
    </div>
    <!-- related product -->
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
      const ids = this.item.collections.map(c => c._id);
      const { data } = await this.$storeino.products.search({
        "_id-ne": this.item._id,
        "collections._id-in": ids
      })
      this.items = data.results
    } catch (err) {
      this.$sentry.captureException(err);
    }
    this.loading = false;
  }
};
</script>