<template>
<div>
    <si-app-loader placement="BEFORE_HEADER"/>
    <!-- header -->
        <div class="relative">
            <div class="h-28 bg-gray-400">

            </div>
            <header class="bg-white absolute top-0 w-full z-10 px-10">
                <div class="flex items-center">
                    <!-- Nav Bar -->
                    <nav class="w-1/3">
                        
                        <div v-if="menu">
                            <div class="flex">
                                <ul v-for="(item, i) in menu.items" :key="i" @mouseover="activeId = activeId = item._id" @mouseleave="activeId = activeId = null">
                                    
                                    <li class="h-14 mr-6 hover:bg-red-400">
                                        <router-link :to="item.url">
                                            <span class="">
                                                {{ item.text }}
                                            </span>
                                        </router-link>
                                    </li>
    
    
                                    <!-- <transition name="slide">
                                        <div class="relative">
                                            <div v-if="item._id == activeId && item.childrens.length > 0" class="w-40 top-full absolute shadow-lg z-20 border header-bg p-2">
                                                <div class="py-1" v-for="(item,i) in item.childrens" :key="i" @mouseover="subItems = subItems = item.collectionId" @mouseleave="subItems = subItems = null">
                                                    <div class="flex items-center justify-between">
                                                        <router-link class="text-sm font-normal hover:underline" :to="item.url">
                                                            {{item.text}}
                                                        </router-link>
                                                        <button class="" @click="subItems = subItems != item.collectionId ? item.collectionId : null">
                                                            <fa class="text-xs transform " v-if="item.childrens && item.childrens.length > 0"  :icon="['fa', 'angle-down']" :class="[subItems==item.collectionId ? 'rotate-180 transition-all delay-150 ease-linear' : ''] "></fa>
                                                        </button>
                                                    </div>
                                                    <transition name="slide">
                                                        <div v-if="item.collectionId == subItems">
                                                            <ul v-if="item.childrens && item.childrens.length > 0">
                                                                <li class="pt-2" v-for="(child,ii) in item.childrens" :key="ii">
                                                                    <nuxt-link  class="text-sm font-normal hover:underline" :to="child.url">
                                                                    {{ child.text }}
                                                                    </nuxt-link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </transition>
                                                </div>
                                            </div>
                                        </div>
                                    </transition> -->
                                </ul>
                            </div>
                        </div>
                    </nav> 
                    <!-- Nav Bar -->
                    <!-- logo -->
                    <div class="w-1/3">
                        <router-link class="" to="/">
                            <si-image width="70" height="50" property="height" class="h-6 w-full object-contain" :src="section.logo ? section.logo.src : $store.state.defaults.logo" alt="Store logo"/>
                        </router-link>
                    </div>
                    <!-- logo -->
                    <!-- search -->
                    <div class="w-1/3">
                        <div>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.17 16.48L12 11.36a5.5 5.5 0 10-4.22 2 5.41 5.41 0 003.51-1.27l5.14 5.13a.51.51 0 00.7 0 .5.5 0 00.04-.74zm-9.35-4.15a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" fill="currentColor"></path></svg>
                        </div>
                    </div>
                    <!-- search -->
                </div>
    
            </header>
        </div>

    <!-- header -->
    <si-app-loader placement="AFTER_HEADER"/>
</div>
</template>
<script>
export default {
    data() {
        return {
            subItems:null,
            activeId: null,
            showSearch: false,
            iconMenu: null,
            q: this.$route.query.search,
            menu: this.$settings.sections.header.menu,
            section: this.$settings.sections.header
        }
    },
    watch: {
        showSearch(val) {
            if (val) {
                this.$nextTick(()=>{
                    document.querySelector('form.search input').focus();
                })
            }
        }
    },
    methods: {
        search(){
            this.$store.state.search = this.q;
            this.$router.push({ path: '/shop', query: { search: this.q }});
            this.showSearch = false;
        }
    },
}
</script>
<style>




</style>
