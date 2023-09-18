<template>
    <transition name="fade">
    <div class="fixed inset-0 z-20 flex" v-if="$store.state.showHeaderMenu">
        <!-- sliderleft shadow -->
        <div @click="showBodyScroll">
            <div class="fixed inset-0 bg-black opacity-50" @click="$store.state.showHeaderMenu=false"></div>
        </div>
        <!-- sliderleft shadow  -->
        <!-- Slide left  -->
        <div style="width: calc(100% - 1.25rem);" :class="$store.state.showHeaderMenu==true ? hideBodyScroll() : null" class="overflow-auto bg-white sidebar header-color header-text">
            <!-- close slider left botton -->
            <div class="flex items-center justify-end w-full" @click="showBodyScroll"> 
                <button class="p-4"  @click="$store.state.showHeaderMenu=false" aria-label="Close button">
                    <svg aria-label="close icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.71 10l4.65-4.66a.495.495 0 10-.7-.7L10 9.29 5.34 4.64a.495.495 0 00-.7.7L9.29 10l-4.65 4.66a.48.48 0 000 .7.481.481 0 00.7 0L10 10.71l4.66 4.65a.482.482 0 00.7 0 .48.48 0 000-.7L10.71 10z" fill="currentColor"></path></svg>
                </button>
            </div>
            <!-- close slider left botton -->
            <div class="px-5">
                <!-- Header Menu -->
                <div class="border-t border-gray-200" v-if="menu">
                    <div v-for="(item, i) in menu.items" :key="i" class="flex flex-col mt-5">
                        <div class="flex items-center justify-between cursor-pointer" @click="activeId = activeId != item._id ? item._id : null">
                            <div class="">
                                <router-link class="ml-font-bold text-sml" :to="item.url">{{ item.text }}</router-link>
                            </div>
                            <button aria-label="chivron-down" >
                                <span v-if="item.childrens && item.childrens.length > 0">
                                    <svg aria-label="close icon" width="12" height="7" :class="[activeId==item._id ? 'rotate-180 transition-all delay-150 ease-linear' : '']" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.39.6a.54.54 0 00-.78 0L6 5.21 1.39.6a.54.54 0 00-.78 0 .55.55 0 000 .77L6 6.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                </span>
                            </button>
                        </div>
                        <transition name="slide">
                        <div v-if="item._id == activeId">
                            <div class="mt-5" v-for="(item,i) in item.childrens" :key="i" >
                                <div class="flex items-center justify-between" @click="subItems = subItems != item.collectionId ? item.collectionId : null">
                                    <router-link class="text-sml link-hover" :to="item.url">
                                        {{item.text}}
                                    </router-link>
                                    <button aria-label="chivron-down">
                                        <span v-if="item.childrens && item.childrens.length > 0">
                                            <svg aria-label="chivron-down" width="12" height="7" :class="[subItems==item.collectionId ? 'rotate-180 transition-all delay-150 ease-linear' : '']" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.39.6a.54.54 0 00-.78 0L6 5.21 1.39.6a.54.54 0 00-.78 0 .55.55 0 000 .77L6 6.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                        </span>
                                    </button>
                                </div>
                                <transition name="slide">
                                    <div v-if="item.collectionId == subItems"> 
                                        <div v-if="item.childrens && item.childrens.length > 0">
                                            <div class="mt-5" v-for="(child,ii) in item.childrens" :key="ii">
                                                <nuxt-link  class="text-sml link-hover text-primary" :to="child.url">
                                                    {{ child.text }}
                                                </nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                        </div>
                        </transition>
                    </div>
                </div>
                <!-- Header Menu -->
                <!-- Lang -->
                <div v-if="$settings.sections.header.icons.language" class="mt-5 border-t border-gray-200">
                    <div v-for="(item, i) in langMenu" :key="i" class="flex flex-col">
                        <div class="mt-5" >
                            <h4 class="ml-font-bold text-sml">{{ item.title }}</h4>
                        </div>
                        <transition name="slide">
                            <div>
                                <div class="mt-8 border-b border-primary" @click="active.Id3 = active.Id3 != item._id ? item._id : null" :class="item.childrens.length > 0 ? 'primary-hover cursor-pointer' : ''">
                                    <div class="flex items-center justify-between">
                                        <div class="text-sml">{{ item.text }}</div>
                                        <span class="flex justify-center w-5 lg:justify-end" v-if="item.childrens && item.childrens.length > 0">
                                            <svg aria-label="chivron-down"  width="12" height="7" :class="[active.Id3==item._id ? 'rotate-180 transition-all delay-150 ease-linear' : '']"  viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg"><path d="M11.39.6a.54.54 0 00-.78 0L6 5.21 1.39.6a.54.54 0 00-.78 0 .55.55 0 000 .77L6 6.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                        </span>
                                    </div>
                                </div>
                                <transition name="slide">
                                    <div v-if="item._id == active.Id3" class="relative" >
                                        <div class="absolute left-0 right-0 h-56 px-6 py-3 overflow-auto bg-white border border-gray-200 header-color top-full">
                                            <div class="pb-1" v-for="(item,i) in item.childrens" :key="i" >
                                                <a class="text-sml link-hover" :href="item.url">{{item.text}}</a>
                                                <div v-if="item.childrens && item.childrens.length > 0">
                                                    <div class="px-2 pt-1" v-for="(child,ii) in item.childrens" :key="ii">
                                                        <a :href="child.url">
                                                            <span class="text-sml link-hover"> > {{ child.text }}</span> 
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                        </transition>
                    </div>
                </div>
                <!-- Lang -->
                <!-- Curr -->
                <div v-if="$settings.sections.header.icons.currency" class="mt-5 border-t border-gray-200 lang">
                    <div v-for="(item, i) in currMenu" :key="i" class="flex flex-col">
                        <div @click="showCurr" class="mt-5" >
                            <h4 class="ml-font-bold text-sml">{{ item.title }}</h4>
                        </div>
                        <transition name="slide">
                            <div>
                                <div class="mt-8 border-b border-primary" @click="active.Id3 = active.Id3 != item._id ? item._id : null" :class="item.childrens.length > 0 ? 'primary-hover cursor-pointer' : ''">
                                    <div class="flex items-center justify-between" >
                                        <div class="text-sml">{{ item.text }}</div>
                                        <span class="flex justify-center w-5 lg:justify-end" v-if="item.childrens && item.childrens.length > 0">
                                            <svg aria-label="chivron-down" width="12" height="7"  :class="[active.Id3==item._id ? 'rotate-180 transition-all delay-150 ease-linear' : '']"  viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg"><path d="M11.39.6a.54.54 0 00-.78 0L6 5.21 1.39.6a.54.54 0 00-.78 0 .55.55 0 000 .77L6 6.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                        </span>
                                    </div>
                                </div>
                                <transition name="slide">
                                    <div v-if="item._id == active.Id3" class="relative" >
                                        <div class="absolute left-0 right-0 h-56 px-6 py-3 overflow-auto bg-white border border-gray-200 header-color top-full">
                                            <div class="pb-1" v-for="(item,i) in item.childrens" :key="i" >
                                                <a class="text-sml link-hover" :href="item.url">{{item.text}}</a>
                                                <div v-if="item.childrens && item.childrens.length > 0">
                                                    <div class="px-2 pt-1" v-for="(child,ii) in item.childrens" :key="ii">
                                                        <a :href="child.url">
                                                            <span class="text-sml link-hover"> > {{ child.text }}</span> 
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                        </transition>
                    </div>
                </div>
                <!-- Curr -->
            </div>
        </div>
        <!-- Slide left  -->
    </div>
</transition>

</template>

<script>
export default {
    data() {
        return {
            subItems: null,
            show: false,
            activeId: null,
            active: {
                Id1: null,
                Id2: null,
                Id3: null,
            },
            isVisible: {
                Lang: false,
                Curr: false
            },
            q: this.$route.query.search,
            menu: this.$settings.sections.header.menu,
            section: this.$settings.sections.header,
            langMenu: [
                {
                    _id: "lang",
                    text: this.$store.state.language.code,
                    active: this.$settings.sections.header.icons.language,
                    title: this.$settings.sections.header.icons.language_text,
                    childrens: this.$settings.store_languages.map(l => {
                        return {
                            _id: l.code,
                            text: l.name,
                            url: `?lang=${l.code}`
                        }
                    })
                },
            ].filter(item => item.active),
            currMenu: [
                {
                    _id: "currency",
                    text: this.$store.state.currency.code,
                    active: this.$settings.sections.header.icons.currency,
                    title: this.$settings.sections.header.icons.currency_text,
                    childrens: this.$settings.store_currencies.map(c => {
                        return {
                            _id: c.code,
                            text: c.name,
                            url: `?cur=${c.code}`
                        }
                    })
                },
            ].filter(item => item.active)
        }
    },
    methods: {
        showLang() {
            this.isVisible.Lang = !this.isVisible.Lang;
        },
        showCurr() {
            this.isVisible.Curr = !this.isVisible.Curr;
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
    }
}
</script>

<style scoped>
.sidebar {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
}

[dir="rtl"] .sidebar {
    left: 0px;
    right: auto;
}
</style>