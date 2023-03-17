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
                <p class="text-sml primary-text mb-3">{{ item.excerpt }}</p>
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
                            <si-image class="h-8 w-8" width="40" height="40" :src="item.image" :alt="item.name"/>
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
                        name: 'whatsapp',
                        url: 'https://api.whatsapp.com/send?text={title}%20{url}',
                        image: 'https://cdn-icons-png.flaticon.com/512/160/160200.png'
                    },
                    {
                        name: 'facebook',
                        image: 'https://cdn-icons-png.flaticon.com/512/4406/4406234.png',
                        url: 'https://www.facebook.com/sharer.php?u={url}'
                    },
                    {
                        name: 'twitter',
                        url: 'https://twitter.com/intent/tweet?url={url}&text={title}',
                        image: 'https://cdn-icons-png.flaticon.com/512/356/356076.png'
                    },
                    {
                        name: 'linkedin',
                        url: 'https://www.linkedin.com/sharing/share-offsite/?url={url}',
                        image: 'https://cdn-icons-png.flaticon.com/512/356/356096.png'
                    }
                ]
        }
    },
    async fetch(){
        try{
            const { slug } = this.$route.params;
            const { data } = await this.$storeino.pages.get({ slug, type: 'POST' })
            this.item = data;

            this.$store.state.seo.title = this.item.title + ' - ' + this.$settings.store_name;
            this.$store.state.seo.description = this.item.excerpt || this.$settings.store_description;
            if(this.item.image){ this.$store.state.seo.image = this.item.image.url; }


            let url = `https://${this.$store.state.domain}/posts/${slug}`;
            for (const button of this.socialMedia) {
                button.url = button.url.replace(/\{title\}/gi, this.item.title).replace(/\{url\}/gi, url);
            }
            this.loading = false;
        }catch(e){
            console.log({e});
            // Redirect to error page if product not exists
            this.$nuxt.error({ statusCode: 404, message: 'post_not_found' })
        }
    },
    mounted() {
      this.$storeino.fbpx('PageView')
    }
}
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
