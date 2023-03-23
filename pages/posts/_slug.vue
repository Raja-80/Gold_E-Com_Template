<template>
    <div class="">
        <!-- loader -->
        <div v-if="loading" class="flex justify-center items-center my-5">
            <si-loader></si-loader>
        </div>
        <!-- loader -->
        <div v-if="!loading && item" class="">
            <!-- title -->
            <div class="flex justify-center mt-10 mb-6 px-5 xl:px-10">
                <h1 class="text-xl text-center">{{ item.title }}</h1>
            </div>
            <!-- title -->
            <!-- image -->
            <div class="relative pb-full-res-post overflow-hidden px-5 xl:px-10">
                <si-image  width="400" height="400" class="h-full w-full absolute inset-0 object-cover bg-no-repeat" :src="item.image ? item.image.url : null" :alt="item.name"/>
            </div>
            <!-- image -->
            <!-- texts -->
            <div class="flex flex-col justify-center my-10 px-5 xl:px-10">
                <!-- short description -->
                <p class="text-sml text-primary mb-3">{{ item.excerpt }}</p>
                <!-- short description -->
                <!-- description -->
                <div v-if="item">
                    <div class="text-sml" id="description" v-html="item.content"></div>
                </div>
                <!-- description -->
            </div>
            <!-- texts -->
            <!-- share products icons -->
            <div v-if="$settings.sections.post.share_buttons.active">
                <div class="flex items-center">
                    <div class="flex-grow flex border-b border-gray-300"></div>
                    <h3 class="text-base mx-2">{{ $settings.sections.post.share_buttons.title }}</h3>
                    <div class="flex-grow flex border-b border-gray-300"></div>
                </div>
                <div class="flex justify-center gap-4 pt-3 mb-7">
                    <div v-for="item in socialMedia.filter(s=>$settings.sections.post.share_buttons[s.name])" :key="item.name">
                        <a :href="item.url" target="_blank" rel="noopener noreferrer">
                            <svg aria-label="social media" class="opacity-90" fill-rule="evenodd" width="30" height="30" :viewBox="item.view" fill="none" xmlns="http://www.w3.org/2000/svg"><path :d="item.image" fill="currentColor"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
            <!-- share products icons -->
        </div>
        <!-- Realated post -->
        <div v-if="$settings.sections.post.related.active"> 
            <div v-if="item" class="related">
                <sections-related-posts :item="item"/>
            </div>
        </div>
        <!-- Realated post -->
    </div>
</template>

<script>
export default {  
  data() {
    return {
      loading: true,
      item: null,
      socialMedia: [
            {
            name: "whatsapp",
            url: "https://api.whatsapp.com/send?text={title}%20{url}",
            image:
                "M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm700 952c-175-175-407-271-655-271-510 0-925 415-925 925 0 163 43 322 124 462l-131 480 491-129c135 74 287 113 442 113 510 0 925-415 925-925 0-247-96-480-271-655zm-654 1424c-138 0-274-37-392-107l-28-17-291 76 78-284-18-29c-77-122-118-264-118-409 0-424 345-769 770-769 205 0 399 80 544 225 145 146 225 338 225 544 0 424-345 770-769 770zm422-576c-23-12-137-67-158-75s-37-12-52 12c-15 23-60 75-73 91-14 15-27 18-50 6s-98-36-186-115c-69-61-115-137-129-160s-2-36 10-47c11-10 23-27 35-41s15-23 23-39c8-15 4-29-2-41s-52-125-71-172c-19-45-38-39-52-40s-29-1-44-1-40 6-62 29c-21 23-81 79-81 193s83 224 94 239c12 15 163 249 395 349 55 24 98 38 132 49 55 17 106 15 146 9 44-7 137-56 156-110s19-100 14-110-21-16-44-28z",
            view: "0 0 3333 3333"
            },
            {
            name: "facebook",
            url: "https://www.facebook.com/sharer.php?u={url}",
            image:
                "M30.996 16.091c-0.001-8.281-6.714-14.994-14.996-14.994s-14.996 6.714-14.996 14.996c0 7.455 5.44 13.639 12.566 14.8l0.086 0.012v-10.478h-3.808v-4.336h3.808v-3.302c-0.019-0.167-0.029-0.361-0.029-0.557 0-2.923 2.37-5.293 5.293-5.293 0.141 0 0.281 0.006 0.42 0.016l-0.018-0.001c1.199 0.017 2.359 0.123 3.491 0.312l-0.134-0.019v3.69h-1.892c-0.086-0.012-0.185-0.019-0.285-0.019-1.197 0-2.168 0.97-2.168 2.168 0 0.068 0.003 0.135 0.009 0.202l-0.001-0.009v2.812h4.159l-0.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814v-0z",
            view: "0 0 32 32"
            },
            {
            name: "twitter",
            url: "https://twitter.com/intent/tweet?url={url}&text={title}",
            image:
                "M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2  c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7  c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9  C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5  c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6  c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z",
            view: "-143 145 512 512"
            },
            {
            name: "linkedin",
            url: "https://www.linkedin.com/sharing/share-offsite/?url={url}",
            image:
                "M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9  V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7  C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6  c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z  ",
            view: "-143 145 512 512"
            }
        ]
    };
  },
  async fetch() {
    try {
      const { slug } = this.$route.params;
      const { data } = await this.$storeino.pages.get({ slug, type: "POST" });
      this.item = data;

      this.$store.state.seo.title =
        this.item.title + " - " + this.$settings.store_name;
      this.$store.state.seo.description =
        this.item.excerpt || this.$settings.store_description;
      if (this.item.image) {
        this.$store.state.seo.image = this.item.image.url;
      }

      let url = `https://${this.$store.state.domain}/posts/${slug}`;
      for (const button of this.socialMedia) {
        button.url = button.url
          .replace(/\{title\}/gi, this.item.title)
          .replace(/\{url\}/gi, url);
      }
      this.loading = false;
    } catch (e) {
      console.log({ e });
      // Redirect to error page if product not exists
      this.$nuxt.error({ statusCode: 404, message: "post_not_found" });
    }
  },
  mounted() {
    this.$storeino.fbpx("PageView");
  }
};
</script>

<style scoped>
.pb-full-res-post {
  padding-bottom: 100%;
}

@media (min-width: 1024px) {
  .pb-full-res-post {
    padding-bottom: 43%;
  }
}
</style>
