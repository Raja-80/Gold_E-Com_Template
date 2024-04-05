<template>
    <!--  -->
    <div class="default_page">
        <!--  -->
        <div class="maintenance_page" v-if="$settings.store_maintenance || !show_store_maintenance">
            <sections-maintenance @openStore="openStore" />
        </div>
        <!--  -->
        <div v-else class="nuxt_page">
            <!--  -->
            <div class="fixed top-0 right-0 z-50" v-if="$settings.store_maintenance_unlocked">
                <div class="bg-blue-500 p-2 cursor-pointer opacity-70 hover:opacity-100 transition-all" @click="closeStore()">
                    <svg class="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                        <path d="M6 10V8C6 7.65929 6.0284 7.32521 6.08296 7M18 10V8C18 4.68629 15.3137 2 12 2C10.208 2 8.59942 2.78563 7.5 4.03126" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M11 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>
            <!--  -->
            <component :is="'style'">
                :root{  --primary-rgb: {{ rgb.r }}, {{ rgb.g }}, {{ rgb.b }}; 
                        --primary-color: rgb(var(--primary-rgb)); 
                        --text-rgb: {{ text_rgb.r }}, {{ text_rgb.g }}, {{ text_rgb.b }}; 
                        --text-color: rgb(var(--text-rgb));   
                        --header-rgb: {{ header_rgb.r }}, {{ header_rgb.g }}, {{header_rgb.b }}; 
                        --header-color: rgb(var(--header-rgb));
                        --header-text-rgb: {{ header_text.r }}, {{ header_text.g }}, {{ header_text.b }}; 
                        --header-text: rgb(var(--header-text-rgb)); 
                        --footer-rgb: {{ footer_rgb.r }}, {{ footer_rgb.g }}, {{footer_rgb.b }}; 
                        --footer-color: rgb(var(--footer-rgb)); 
                        --footer-text-rgb: {{ footer_text.r }}, {{ footer_text.g }}, {{ footer_text.b }}; 
                        --footer-text: rgb(var(--footer-text-rgb));
                        --copyright-rgb: {{ copyright_rgb.r }}, {{ copyright_rgb.g }}, {{copyright_rgb.b }}; 
                        --copyright-color: rgb(var(--copyright-rgb)); 
                        --copyright-text-rgb: {{ copyright_text.r }}, {{ copyright_text.g }}, {{ copyright_text.b }}; 
                        --copyright-text: rgb(var(--copyright-text-rgb)); 
                }
                .bg-primary { background-color: var(--primary-color); }
                .bg-text-primary { color: var(--primary-color); }
                .border-primary { border-color: var(--primary-color); }
                .text-primary { color: var(--text-color); }
                .primary-hover {
                    transition: color .1.5s ease-in-out;
                }
                .primary-hover:hover {
                    color: var(--text-color);
                    border-color: var(--text-color);
                }
                .header-color { background-color: var(--header-color); } 
                .header-text { color: var(--header-text); } 
                .footer-color { background-color: var(--footer-color); } 
                .footer-text { color: var(--footer-text); } 
                .copyright-color { background-color: var(--copyright-color); } 
                .copyright-text { color: var(--copyright-text); } 
            </component>
            <sections-header-top></sections-header-top>
            <sections-header></sections-header>
            <sections-header-menu></sections-header-menu>
            <Nuxt />
            <sections-footer></sections-footer>
            <sections-copyright></sections-copyright>
            <si-full-image></si-full-image>
            <div v-if="$settings.other_scripts" class="other-scripts" v-html="$settings.other_scripts"></div>
        </div>
        <!--  -->
    </div>
    <!--  -->
</template>

<script>
export default {
    head() {
        return {
            title: this.$store.state.seo.title,
            meta: [
                { hid: 'description', name: 'description', content: this.$store.state.seo.description },
                { hid: 'keywords', name: 'keywords', content: this.$store.state.seo.keywords.join(',') },
                { hid: 'og:title', property: 'og:title', content: this.$store.state.seo.title },
                { hid: 'og:site_name', property: 'og:site_name', content: this.$settings.store_name },
                { hid: 'og:description', property: 'og:description', content: this.$store.state.seo.description },
                { hid: 'og:image', property: 'og:image', content: this.$store.state.seo.image },
                { hid: 'og:url', property: 'og:url', content: this.$store.state.seo.url },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
                { hid: 'twitter:title', name: 'twitter:title', content: this.$store.state.seo.title },
                { hid: 'twitter:description', name: 'twitter:description', content: this.$store.state.seo.description },
                { hid: 'twitter:image', name: 'twitter:image', content: this.$store.state.seo.logo },
                { hid: 'twitter:url', name: 'twitter:url', content: this.$store.state.seo.url },
                { hid: "theme-color", property: "theme-color", content: this.$settings.style.primary_color },
                { hid: "currency", name: "currency", content: this.$store.state.currency.code },
                { hid: "product:price:currency", property: "product:price:currency", content: this.$store.state.currency.code },
                { hid: "priceCurrency", itemprop: "priceCurrency", content: this.$store.state.currency.code },
                ...this.$store.state.seo.metaTags
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: this.$settings.store_favicon ? this.$settings.store_favicon.src : this.$store.state.defaults.icon },
                { rel: "dns-prefetch", href: 'https://storeno.b-cdn.net/stores/' },
                { rel: 'preconnect', href: 'https://connect.facebook.net', crossorigin: "anonymous" },
                { rel: 'preload', href: 'https://connect.facebook.net/en_US/fbevents.js', as: 'script' }
            ], 
            script: [
                {
                  src: 'https://umami.storeino.world/script.js',
                  'data-website-id': this.$settings.analitycs_shere && this.$settings.analitycs_shere[0]['data-website-id'],
                  rel: "defer"
                }
            ],
            htmlAttrs: {
                lang: this.$store.state.language.code,
                dir: this.$store.state.language.code == 'AR' ? 'rtl' : 'ltr'
            }
        }
    },
    data() {
        return {
            rgb: { r: 0, g: 130, b: 70 },
            text_rgb: { r: 0, g: 130, b: 70 },
            header_rgb: { r: 0, g: 130, b: 70 },
            header_text: { r: 0, g: 130, b: 70 },
            footer_rgb: { r: 0, g: 130, b: 70 },
            footer_text: { r: 0, g: 130, b: 70 },
            copyright_rgb: { r: 0, g: 130, b: 70 },
            copyright_text: { r: 0, g: 130, b: 70 },
            show_store_maintenance: true,
            show_store_maintenance_unlocked: false,
        }
    },
    fetch() {
        this.$store.state.seo.title = this.$settings.store_name;
        this.$store.state.seo.description = this.$settings.store_description;
        this.$store.state.seo.keywords = this.$settings.store_keywords || [];
        if (this.$settings.store_og_image) { this.$store.state.seo.image = this.$settings.store_og_image.src; }
        if (this.$settings.favicon) { this.$store.state.seo.favicon = this.$settings.favicon.src; }
        this.rgb = this.$tools.hexToRgb(this.$settings.style.primary.primary_color);
        this.text_rgb = this.$tools.hexToRgb(this.$settings.style.primary.primary_text);
        this.header_rgb = this.$tools.hexToRgb(this.$settings.style.header.header_color);
        this.header_text = this.$tools.hexToRgb(this.$settings.style.header.header_text);
        this.footer_rgb = this.$tools.hexToRgb(this.$settings.style.footer.footer_color);
        this.footer_text = this.$tools.hexToRgb(this.$settings.style.footer.footer_text);
        this.copyright_rgb = this.$tools.hexToRgb(this.$settings.style.copyright.copyright_color);
        this.copyright_text = this.$tools.hexToRgb(this.$settings.style.copyright.copyright_text);
    },
    methods: {
        openStore(active) {
            this.show_store_maintenance = active
        },
        closeStore() {
            document.cookie = `store_maintenance_code=${this.code}`;
            this.show_store_maintenance = false
        }
    }
}
</script>


