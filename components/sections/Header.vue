<template>
<div>
    <si-app-loader placement="BEFORE_HEADER"/>
    <!-- header -->
        <div class="relative border-b border-gray-300">
            <div class="bg-white h-60.8 h-124"></div>
            <transition name="header-slide">
                <header>
                    <div class="top-0 left-0 right-0 z-20 " v-if="isHeaderFixed" :class="{ 'fixed-header': isHeaderFixed }">
                        <div style="height: 3.8rem;" class="flex justify-between flex-wrap items-center relative px-5 lg:px-10 bg-white">
                            <!-- NavBar -->
                            <nav v-if="menu" class="w-auto lg:w-2/5 hidden lg:flex items-center text-sml scroll" >
                                <ul v-for="(item, i) in menu.items" :key="i" @mouseover="activeId = activeId = item._id" @mouseleave="activeId = activeId = null">
                                    <!-- main child -->
                                    <li class="chivron-box flex items-center mr-2 py-5">
                                        <router-link :to="item.url" class="century-bold-hover mr-1" :class="item.childrens.length > 0 ? '':'mr-2'">
                                            {{ item.text }}
                                        </router-link>
                                        <button class="chivron-down opacity-0" v-if="item.childrens.length > 0" @click="activeId = activeId != item._id ? item._id : null">
                                            <svg width="6" height="5"  :class="[activeId==item._id ? 'rotate-180 transition-all delay-150 ease-linear' : '']"  viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg"><path d="M11.39.6a.54.54 0 00-.78 0L6 5.21 1.39.6a.54.54 0 00-.78 0 .55.55 0 000 .77L6 6.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                        </button>
                                    </li>
                                    <!-- main child -->
                                    <!-- sub child -->
                                    <transition name="slide">
                                        <div v-if="item._id == activeId && item.childrens.length > 0" class="bg-white absolute  left-0 right-0 top-full z-20 border-t border-b border-gray-300 px-10">
                                            <div class="flex items-center scroll">
                                                <div v-for="(item,i) in item.childrens" :key="i" @mouseover="subItems = subItems = item.collectionId" @mouseleave="subItems = subItems = null">
                                                    <div class="chivron-box flex items-center mr-2 py-5">
                                                        <router-link class="century-bold-hover mr-1" :to="item.url" :class="item.childrens.length > 0 ? '':'mr-2'">
                                                            {{item.text}}
                                                        </router-link>
                                                        <button class="chivron-down opacity-0" v-if="item.childrens.length > 0" @click="subItems = subItems != item.collectionId ? item.collectionId : null">
                                                            <svg width="6" height="5"  :class="[subItems==item.collectionId ? 'rotate-180 transition-all delay-150 ease-linear' : '']"  viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg"><path d="M11.39.6a.54.54 0 00-.78 0L6 5.21 1.39.6a.54.54 0 00-.78 0 .55.55 0 000 .77L6 6.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                                        </button>
                                                    </div>
                                                    <transition name="slide">
                                                        <div v-if="item.collectionId == subItems" class="bg-white absolute left-0 right-0 top-full z-20 border-t border-gray-300 px-10">
                                                            <div class="flex flex-col pt-5 mb-2" v-if="item.childrens && item.childrens.length > 0">
                                                                <div class="mb-3" v-for="(child,ii) in item.childrens" :key="ii">
                                                                    <nuxt-link  class="century-bold-hover" :to="child.url">
                                                                    {{ child.text }}
                                                                    </nuxt-link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </transition>
                                                </div>
                                            </div>
                                        </div>
                                    </transition>
                                    <!-- sub child -->
                                </ul>
                            </nav> 
                            <!-- Nav Bar -->
                            <!-- logo -->
                            <div class="w-auto lg:w-1/5">
                                <div class="">
                                    <router-link class="" to="/">
                                        <si-image width="70" height="50" property="height" class="h-6 w-full object-contain" :src="section.logo ? section.logo.src : $store.state.defaults.logo" alt="Store logo"/>
                                    </router-link>
                                </div>
                            </div>
                            <!-- logo -->
                            <!-- icons-->
                            <div class="w-auto lg:w-2/5" >
                                <div class="flex items-center justify-end">
                                    <div class="flex items-center justify-between">
                                        <!-- search -->
                                        <div class="flex items-center">
                                            <!-- show search -->
                                            <transition name="slide-right">
                                                <div class="pr-2" v-if="showSearch" @mouseleave="showSearch=false">
                                                    <form @submit.prevent="search" class="search flex items-center border-b border-black py-1" action="/shop?">
                                                        <input v-model="q" class="bg-transparent outline-none text-sml" :placeholder="'Search for products'" type="search" name="q">
                                                        <button aria-label="Search button">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.17 16.48L12 11.36a5.5 5.5 0 10-4.22 2 5.41 5.41 0 003.51-1.27l5.14 5.13a.51.51 0 00.7 0 .5.5 0 00.04-.74zm-9.35-4.15a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" fill="currentColor"></path></svg>
                                                        </button>
                                                    </form>
                                                </div>
                                            </transition>
                                            <!-- show search -->
                                            <!-- search icon -->
                                            <transition name="show">
                                                <button class="hidden lg:block pr-2" @click="showSearch=true" v-if="$settings.sections.header.icons.search && showSearch==false"  aria-label="Search button" title="Search">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.17 16.48L12 11.36a5.5 5.5 0 10-4.22 2 5.41 5.41 0 003.51-1.27l5.14 5.13a.51.51 0 00.7 0 .5.5 0 00.04-.74zm-9.35-4.15a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" fill="currentColor"></path></svg>
                                                    <small v-if="$route.query.search" class="-top-1 -right-1 rounded-full absolute w-1 h-1 p-1 bg-green-700 text-white flex justify-center items-center"></small>
                                                </button>
                                            </transition>
                                            <!-- search icon -->
                                        </div>
                                        <!-- search -->
        
                                        <!-- acount -->
                                        <div v-if="$settings.sections.header.icons.account" class="user pr-2 transition-all ease-in-out delay-150">
                                            <router-link  to="/account/orders" title="Account" class="flex flex-col justify-center">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0-7a3 3 0 110 6 3 3 0 010-6zM10 11c-5 0-7 2-7 7h14c0-5-2-7-7-7zm0 1c4.08 0 5.73 1.33 6 5H4c.27-3.67 1.92-5 6-5z" fill="currentColor"></path></svg>
                                            </router-link>
                                        </div>
                                        <!-- acount -->
                                        <!-- wishlist -->
                                        <div v-if="$settings.sections.header.icons.wishlist" class="heart pr-2 transition-all ease-in-out delay-150">
                                            <router-link  to="/wishlist" title="Wishlist" class="flex flex-col justify-center relative">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.48 3.91a3.25 3.25 0 012.68 1.62L10 6.85l.83-1.33a3.12 3.12 0 012.63-1.61 2.8 2.8 0 012.08.93c1.48 1.59 1.33 3.78-.37 5.57L10 15.66l-5.22-5.3c-1.67-1.85-1.8-4-.36-5.53a2.8 2.8 0 012.06-.92zm0-1a3.8 3.8 0 00-2.79 1.24C1.94 6 2 8.73 4 11l6 6.06 5.9-6c2.16-2.27 2.15-5.06.4-6.95a3.871 3.871 0 00-2.82-1.25A4.1 4.1 0 0010 5a4.23 4.23 0 00-3.52-2.09z" fill="currentColor"></path></svg>
                                                <small v-if="$store.state.wishlist.length>0"  class="border-2 border-white bg-black -top-2.5 -right-1.5 rounded-full absolute w-4.5 h-4.5 text-white flex justify-center items-center text-xs">{{ $store.state.wishlist.length }}</small>
                                            </router-link>
                                        </div>
                                        <!-- wishlist -->
                                        <!-- cart -->
                                        <div v-if="$settings.sections.header.icons.cart" class="cart py-1 transition-all ease-in-out delay-150">
                                            <router-link  to="/cart" title="Cart" id="cart-icon" class="flex flex-col justify-center relative">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.63 17.47l-.6-11a.51.51 0 00-.5-.47h-2v-.43a3.5 3.5 0 00-7 0V6h-2a.51.51 0 00-.5.47l-.62 11a.49.49 0 00.49.53h12.3a.49.49 0 00.43-.53zm-12.31-.42L4.9 7h10.2l.56 10.1-11.34-.05zM7.5 5.57a2.5 2.5 0 115 0V6h-5v-.43z" fill="currentColor"></path></svg>
                                                <small v-if="$store.state.cart.length>0" class="border-2 border-white bg-black -top-2.5 -right-1.5 rounded-full absolute w-4.5 h-4.5 text-white flex justify-center items-center text-xs">{{ $store.state.cart.length }}</small>
                                            </router-link>
                                        </div>
                                        <!-- cart -->
    
                                        <!-- show menu botton  -->
                                        <div class="transition-all ease-in-out delay-150 pl-2 block lg:hidden">
                                            <button @click="$store.state.showHeaderMenu = !$store.state.showHeaderMenu" aria-label="Search button" class="flex flex-col justify-center">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.54 5.48H3.5a.48.48 0 01-.463-.662.47.47 0 01.443-.288h13A.48.48 0 0117 5a.49.49 0 01-.46.48zM16.54 15.48H3.5A.49.49 0 013 15a.48.48 0 01.48-.47h13A.471.471 0 0117 15a.48.48 0 01-.46.48zM16.54 10.48H3.5A.49.49 0 013 10a.48.48 0 01.48-.47h13A.48.48 0 0117 10a.49.49 0 01-.46.48z" fill="currentColor"></path></svg>
                                            </button>
                                        </div>
                                        <!-- show menu botton  -->
                                    </div>
                                </div>
        
        
                            </div>
                            <!-- search -->
                        </div>
                    </div>
                    <!--  -->
                    <div class="px-5 pb-5 lg:hidden bg-white">
                        <form @submit.prevent="search" class="search flex justify-between items-center border-b pb-2 border-black" action="/shop?">
                            <input v-model="q" class="bg-transparent outline-none text-sml w-full" :placeholder="'Search for products'" type="search" name="q">
                            <button aria-label="Search button">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.17 16.48L12 11.36a5.5 5.5 0 10-4.22 2 5.41 5.41 0 003.51-1.27l5.14 5.13a.51.51 0 00.7 0 .5.5 0 00.04-.74zm-9.35-4.15a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" fill="currentColor"></path></svg>
                            </button>
                        </form>
                    </div>
                    <!--  -->
                </header>
            </transition>
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
            isHeaderFixed: true,
            lastScrollPosition: 0,
            showSearch: false,
            iconMenu: null,
            q: this.$route.query.search,
            menu: this.$settings.sections.header.menu,
            section: this.$settings.sections.header
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
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
        },
        handleScroll() {
            const currentScrollPosition = window.pageYOffset;
            if(currentScrollPosition > 80){
                if (currentScrollPosition < this.lastScrollPosition) {
                    this.isHeaderFixed = true;
                } else {
                    this.isHeaderFixed = false;
                }
                this.lastScrollPosition = currentScrollPosition;
            }
        }
    },
}
</script>
<style scoped>
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: 1em;
  width: 1em;
  border-radius: 50em;
  background: url(https://cdn-icons-png.flaticon.com/512/2961/2961937.png) no-repeat 50% 50%;
  background-size: contain;
  opacity: 0;
  cursor: pointer;
}

input[type="search"]:focus::-webkit-search-cancel-button {
  opacity: 1;
  pointer-events: all;
}

.chivron-down {
    transition: opacity 0.3s ease-out;
}

.chivron-box:hover .chivron-down {
    opacity: 1;
}

.fixed-header {
  position: fixed;
}

.scroll {
  overflow-x: scroll;
}

.scroll::-webkit-scrollbar {
    width: 5px;
    height: 1.5px;
}

.scroll::-webkit-scrollbar-track {
    background-color: transparent;
    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  */
}

.scroll::-webkit-scrollbar-thumb {
    background-color: #222;
    border-radius: 10px;
}

@media (max-width: 1024px) {
    .h-60\.8 {
        height: 60.8px;
    }
}

@media (min-width: 1024px) {
    .h-124 {
        height: 123px;
    }
}

.show-enter-active {
  transition-duration: 1.5s;
  transition-timing-function: ease-in-out;
  opacity: 0;
}

.show-leave-active {
  transition-duration: 0s;
  transition-timing-function: ease-in-out;
  opacity: 0;
}

.show-enter-to, .slide-leave {
  opacity: 1;
}

.show-enter, .slide-leave-to {
  opacity: 0;
}

.header-slide-enter-active,
.header-slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.header-slide-enter,
.header-slide-leave-to {
  transform: translateY(-100%);
}
</style>
