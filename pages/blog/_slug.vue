<template>
    <div class="bg-white">
        <!-- Side BAr -->
        <div class="lg:relative flex items-center justify-between px-5 xl:px-10 under-border">
            <div class="flex flex-row-reverse lg:flex-row items-center justify-between flex-grow">
                <!-- filters -->
                <div @mouseover="windowWidth >= 1024 ? isVisible.collections=true : null" @mouseleave="windowWidth >= 1024 ? isVisible.collections=false : null">
                    <div @click="hideBodyScroll">
                        <div @click="showCollections" class="flex items-center justify-between py-3.5 lg:py-5 cursor-pointer underline lg:no-underline mr-4">
                            <h2 class="text-sml ml-font-bold-hover" :class="isVisible.collections ==true? 'ml-font-bold' : ''">{{ $settings.sections.blog.sidebar.categories.title }}</h2>
                            <svg class="lg:ml-1 hidden lg:block" :class="isVisible.collections == true ? 'rotate-180 transition-all delay-150 ease-linear':''" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 7.6a.54.54 0 00-.78 0L10 12.21 5.39 7.6a.54.54 0 00-.78 0 .55.55 0 000 .77L10 13.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                        </div>
                    </div>
                    <transition name="slide">
                        <div class="bg-white fixed lg:absolute w-full h-full lg:h-auto inset-0 lg:top-full lg:inset-y-auto lg:bottom-auto z-50 overflow-auto lg:px-10" v-if="isVisible.collections">
                            <div class="flex flex-col justify-between h-full">
                                <div>
                                    <div class="flex items-center justify-between py-5 lg:hidden border-b border-gray-300 px-5">
                                        <h2 class="text-sml ml-font-bold">{{ $settings.sections.blog.sidebar.categories.title }}</h2>
                                        <div class="flex items-center" @click="showBodyScroll">
                                            <button class="flex items-center" @click="isVisible.collections=false">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.71 10l4.65-4.66a.495.495 0 10-.7-.7L10 9.29 5.34 4.64a.495.495 0 00-.7.7L9.29 10l-4.65 4.66a.48.48 0 000 .7.481.481 0 00.7 0L10 10.71l4.66 4.65a.482.482 0 00.7 0 .48.48 0 000-.7L10.71 10z" fill="currentColor"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="pb-2 pt-5 lg:border-t border-gray-300 px-5 lg:px-0">
                                        <div class="flex flex-col">
                                            <div class="flex items-center pb-3" v-for="(item, i) in categories" :key="i">
                                                <label class="relative flex items-center cursor-pointer">
                                                    <input hidden type="checkbox" class="absolute top-0 left-0" style="z-index: -1" :id="item.slug" :checked="params['categories.slug-in'] && params['categories.slug-in'].indexOf(item.slug) >= 0" @change="setParams($event, 'categories.slug-in', item.slug)">
                                                    <div class="flex justify-center items-center">
                                                        <svg class="fill-current text-black"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15.05a.54.54 0 01-.39-.16l-4-4a.551.551 0 11.78-.78l3.61 3.61 8.61-8.61a.55.55 0 11.78.78l-9 9a.54.54 0 01-.39.16z" fill="currentColor"></path></svg>
                                                    </div>
                                                    <label class="cursor-pointer text-sml text-hover" :for="item.slug">{{ item.name }}</label>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col justify-end" @click="showBodyScroll">
                                    <div @click="isVisible.collections=false" class="lg:hidden bg-black py-5 px-8 mx-5 rounded-full cursor-pointer click-effect ml-font-bold-hover my-5">
                                        <div class="flex items-center justify-center text-sml text-white">
                                            <span>{{ $settings.sections.blog.sidebar.button_text1 }} <span> {{ items.length }} </span> {{ $settings.sections.blog.sidebar.button_text2 }}</span>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <!-- filters --> 
                <div class="flex items-center">
                    <!-- articles -->
                    <div class="text-sml primary-text py-2 lg:py-5">
                        <span>{{ items.length }} {{ $settings.sections.blog.articles_name }}</span>
                    </div>
                    <div class="w-6 hidden lg:flex items-center justify-center">
                        <div style="width: 0.5px;" class="h-3 bg-gray-500"></div>
                    </div>
                    <!-- articles -->
                </div>
            </div>
            <!-- Sort -->
            <div class="w-auto">
                <div @mouseover="windowWidth >= 1024 ? isVisible.sort=true : null" @mouseleave="windowWidth >= 1024 ? isVisible.sort=false : null">
                    <div @click="hideBodyScroll">
                        <div @click="showSort" class="flex items-center justify-between py-3.5 lg:py-5 cursor-pointer underline lg:no-underline">
                            <h2 class="text-sml ml-font-bold-hover" :class="isVisible.sort==true? 'ml-font-bold' : ''">{{ $settings.sections.blog.sort_name }}</h2>
                            <svg class="lg:ml-1 hidden lg:block" :class="isVisible.sort == true ? 'rotate-180 transition-all delay-150 ease-linear':''" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 7.6a.54.54 0 00-.78 0L10 12.21 5.39 7.6a.54.54 0 00-.78 0 .55.55 0 000 .77L10 13.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                        </div>
                    </div>
                    <transition name="slide">
                        <div class="bg-white fixed lg:absolute w-full h-full lg:h-auto inset-0 lg:top-full lg:inset-y-auto lg:bottom-auto z-50 overflow-auto lg:px-10" v-if="isVisible.sort">
                            <div class="flex flex-col justify-between h-full">
                                <div>
                                    <div class="flex items-center justify-between py-5 lg:hidden border-b border-gray-300 px-5">
                                        <h2 class="text-sml ml-font-bold">{{ $settings.sections.blog.sort_name }}</h2>
                                        <div class="flex items-center" @click="showBodyScroll">
                                            <button class="flex items-center" @click="isVisible.sort=false">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.71 10l4.65-4.66a.495.495 0 10-.7-.7L10 9.29 5.34 4.64a.495.495 0 00-.7.7L9.29 10l-4.65 4.66a.48.48 0 000 .7.481.481 0 00.7 0L10 10.71l4.66 4.65a.482.482 0 00.7 0 .48.48 0 000-.7L10.71 10z" fill="currentColor"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="pb-2 pt-5 lg:border-t border-gray-300 px-5 lg:px-0">
                                        <div class="flex flex-col">
                                            <div class="flex items-center pb-3" v-for="(sort, i) in sorts" :key="i">
                                                <label class="relative flex items-center cursor-pointer">
                                                    <input hidden type="radio" class="absolute top-0 left-0" style="z-index: -1" v-model="params.sort" :value="sort.field" :id="sort.name">
                                                    <div class="flex justify-center items-center">
                                                        <svg class="fill-current text-black"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15.05a.54.54 0 01-.39-.16l-4-4a.551.551 0 11.78-.78l3.61 3.61 8.61-8.61a.55.55 0 11.78.78l-9 9a.54.54 0 01-.39.16z" fill="currentColor"></path></svg>
                                                    </div>
                                                    <label class="cursor-pointer text-sml text-hover" :for="sort.name">{{ sort.name }}</label>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col justify-end" @click="showBodyScroll">
                                    <div @click="isVisible.sort=false" class="lg:hidden bg-black py-5 px-8 mx-5 rounded-full cursor-pointer click-effect ml-font-bold-hover my-5">
                                        <div class="flex items-center justify-center text-sml text-white">
                                            <span>{{ $settings.sections.blog.sidebar.button_text1 }} <span> {{ items.length }} </span> {{ $settings.sections.blog.sidebar.button_text2 }}</span>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
            <!-- Sort --> 
        </div>
        <!-- Side Bar -->
        <!-- blogs -->
        <!-- loader and empty -->
        <div>
            <div v-if="loading.pages" class="flex justify-center items-center my-5">
                <si-loader></si-loader>
            </div>
            <div v-if="!loading.pages && items.length == 0" class="flex justify-center items-center my-5">
                <h1 class="py-3 text-xl">{{ $settings.sections.blog.empty_text }}</h1>
            </div>
        </div>
        <!-- loader and empty -->
        <div class="mb-16" v-if="!loading.pages && !loading.products && items.length > 0 && products.length > 0">
            <!-- posts -->
            <div class="flex flex-wrap px-5 xl:px-10">
                <div v-for="(item, i) in items" :key="i" class="w-full mb-16">
                    <si-post page="blog" :item="item"></si-post>
                </div>
            </div>
            <div class="px-2">
                <div v-if="products.length > 0 && $settings.sections.blog.sidebar.products.active" class="w-full">
                    <si-carousel :size="100" component="si-product"  :title="$settings.sections.blog.sidebar.products.title" :list="products" itemClass="w-full"></si-carousel>
                </div>
            </div>
            <!-- posts -->
        </div>
        <!-- blogs -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            windowWidth: 0,
            isVisible : {
                collections: false,
                sort: false,
            },
            loading: {
                pages: true,
                products: true,
                categories: true,
            },
            query: {},
            param: [],
            products: [],
            showSideBar: false,
            gridClass: 'w-full md:w-1/2 lg:w-1/3',
            items: [],
            categories:[],
            paginate: { page: 1, limit: 12, total: 12 },
            params: { status: 'PUBLISH' , 'categories.slug-in': [], sort: { createdAt: -1 }, type: 'POST' },
            lastParams: {  status: 'PUBLISH' , 'categories.slug-in': [], sort: { createdAt: -1 }, type: 'POST' },
            sorts: [
                { field: { 'name': 1 }, name: this.$settings.sections.blog.sorts.name_asc },
                { field: { 'name': -1 }, name: this.$settings.sections.blog.sorts.name_desc },
                { field: { createdAt: -1 }, name: this.$settings.sections.blog.sorts.newest },
                { field: { createdAt: 1 }, name: this.$settings.sections.blog.sorts.oldest }
            ]
        }
    },
    watch: {
        params: {
            handler(val) {
                if(JSON.stringify(val) !== JSON.stringify(this.lastParams)){
                    this.getItems();
                }
            },
            deep: true
        }
    },
    async fetch(){
        await this.getItems();
        await this.getCategories();
        await this.getProducts();
        this.$store.state.seo.title = this.$settings.sections.blog.title + ' - ' + this.$settings.store_name;
        this.$store.state.seo.description = this.$settings.sections.blog.description || this.$settings.store_description;
    },
    mounted() {
        this.$storeino.fbpx('PageView')
        if (process.client) {
            this.getWindowWidth();
            window.addEventListener('resize', this.getWindowWidth);
        }
    },
    beforeDestroy() {
        if (process.client) {
        window.removeEventListener('resize', this.getWindowWidth);
        }
    },
    methods: {
        getWindowWidth() {
            this.windowWidth = window.innerWidth;
        },
        hideBodyScroll() {
            if (window.innerWidth < 1024) {
                document.body.style.overflow = 'hidden';
            }
        },
        showBodyScroll() {
            if (window.innerWidth < 1024) {
                document.body.style.overflow = 'auto';
            }
        },
        setParams(e, key, value){
            if(key.indexOf('price') >= 0){
                this.$set(this.params,key, e.target.value);
            }else{
                if(e.target.checked) {
                    if(!this.params[key]) this.params[key] = this.$set(this.params, key, []);
                    this.params[key].push(value);
                } else {
                    this.params[key] = this.params[key].filter(item => item !== value);
                }
            }
            switch(key){
                case 'categories.slug-in': this.param = [...new Set(...this.param, value)];break;
                case 'price.salePrice-from': this.query['price-from'] = value;
                case 'price.salePrice-to': this.query['price-to'] = value;
                case 'options.values.value1': this.query['colors'] = value
            }
        },
        async getProducts(){
            this.products = [];
            this.loading.products = true;
            try{
                const { data } = await this.$storeino.products.search({limit: 5});
                this.products = data.results;
            }catch(e){
                console.log({e});
            }
            this.loading.products = false;
        },
        async getCategories(){
            this.categories = [];
            this.loading.categories = true;
            try{
                const { data } = await this.$storeino.categories.search({});
                this.categories = data.results;
            }catch(e){
                console.log({e});
            }
            this.loading.categories = false;
        },
        async getItems(){
            this.items = [];
            this.loading.pages = true;
            try{
                this.lastParams = this.$tools.copy(this.params);
                const { data } = await this.$storeino.pages.search(this.params);
                this.items = data.results
            }catch(e){
                console.log({e});
            }
            this.loading.pages = false;
        },
        showCollections() {
            if (window.innerWidth < 1024) {
                this.isVisible.collections = !this.isVisible.collections;
            }
        },
        showSort() {
            if (window.innerWidth < 1024) {
                this.isVisible.sort = !this.isVisible.sort;
            }
        },
    },
}
</script>

<style scoped>
.under-border {
    position: relative;
    transition: all .3s ease-in-out;
}

.under-border::before {
    content: '';
    margin: 0 20px;
    position: absolute;
    height: 0.05rem;
    background-color: rgb(209, 213, 219);
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1;
    transition: transform .3s ease-in-out;
}

@media (min-width: 1024px) {    
    .under-border::before {
      margin: 0 40px;
    }
}

input[type="checkbox"] + div svg,
input[type="radio"] + div svg {
    height: 0;
    width: 0;
    opacity: 0;
    margin-right: 0;
    transition: all .3s ease-in-out;
}

input[type="checkbox"]:checked + div svg ,
input[type="radio"]:checked + div svg {
    margin-right: 2px;
    height: 1.25rem;
    width: 1.25rem;
    opacity: 1;
}

input[type="checkbox"]:checked + div + label ,
input[type="radio"]:checked + div + label {
    font-family: Century Gothic Std Bold,Noto Sans JP,Noto Sans SC,Noto Sans TC,Noto Sans KR;
    transition: all 0.3s ease;
}
</style>
