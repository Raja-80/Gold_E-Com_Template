<template>
  <div class="mb-16" v-if="items.length > 0">
    <div class="border-t border-gray-300 mt-7 pt-5 lg:mx-5 xl:mx-10">
      <h2 class="text-base text-center pb-8">{{ $settings.sections.post.related.title }}</h2>
      <!-- loader -->
      <div v-if="loading" class="flex justify-center items-center my-5">
        <si-loader></si-loader>
      </div>
    </div>
    <!-- loader -->
    <!--related post -->
    <div class="flex flex-wrap mx-1 xl:mx-5">
      <div v-for="(item, i) in items" :key="i" class="w-full lg:w-1/2 px-4 xl:px-5 mb-5 lg:mb-10">
        <si-post :item="item"></si-post>
      </div>
    </div>
    <!-- related post -->
    <div class="flex justify-center" v-if="$settings.sections.posts.show_more_text">
      <nuxt-link class="h-12 px-12 flex justify-center items-center border border-black ml-font-bold-hover rounded-full transition-all ease-linear delay-75" to="/blog">
            <span class="text-sml">{{ $settings.sections.posts.show_more_text}}</span>
        </nuxt-link>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  props:{
      item: Object
  },
  data() {
    return {
      loading: true,
      items: [],
    };
  },
  async fetch(){
      try{
          const ids = this.item.categories.map(c=>c._id);
          const { data } = await this.$storeino.pages.search({
              "_id-ne": this.item._id,
              "categories._id-in": ids
            })
          this.items = data.results
      }catch(e){
        console.log({e});
      }
      this.loading = false;
  }
};
</script>