<template>
    <div>
        <div v-if="loading" class="flex justify-center items-center my-5">
            <si-loader></si-loader>
        </div>
        <div v-if="!loading && item" class="px-5 xl:px-10">
            <!-- title -->
            <div class="py-5 border-b border-gray-300">
                <h2 class="text-lg century-bold">{{ item.title }}</h2>
            </div>
            <!-- title -->
            <!-- short description -->
            <div class="py-4 border-b border-gray-300">
                <p class="text-sml primary-text">{{ item.excerpt }}</p>
            </div>
            <!-- short description -->
            <!-- description -->
            <div class="py-4">
                <div v-if="item" id="description" class="text-sml text-black" v-html="item.content"></div>
            </div>
            <!-- description -->
            <!-- contact page -->
            <div v-if="$route.params.slug && $route.params.slug.indexOf('contact') > -1">
                <si-app-loader :placement="'AFTER_CONTACT_PAGE'"/>
            </div>
            <!-- contact page -->
            <!-- share page -->
            <div class="flex items-center">
                <div class="flex w-full border-b border-gray-300"></div>
                <h3 class="text-base mx-2">{{ $settings.sections.post.share_buttons.title }}</h3>
                <div class=" flex w-full border-b border-gray-300"></div>
            </div>
            <div class="flex justify-center gap-4 py-4">
                <div v-for="item in socialMedia.filter(s=>$settings.sections.post.share_buttons[s.name])" :key="item.name">
                    <a :href="item.url" target="_blank" rel="noopener noreferrer">
                        <si-image class="h-8 w-8" width="40" height="40" :src="item.image" :alt="item.name"/>
                    </a>
                </div>
            </div>
            <!-- share page -->
        </div>
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
            const { data } = await this.$storeino.pages.get({ slug, type: 'PAGE' })
            this.item = data;

            this.$store.state.seo.title = this.item.title + ' - ' + this.$settings.store_name;
            this.$store.state.seo.description = this.item.excerpt || this.$settings.store_description;
            if(this.item.image){ this.$store.state.seo.image = this.item.image.url; }

            let url = `https://${this.$store.state.domain}/pages/${slug}`;
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
    mounted(){
      this.$storeino.fbpx('PageView')
    }
}
</script>
