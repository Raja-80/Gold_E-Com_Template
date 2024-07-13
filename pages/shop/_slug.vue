<template>
    <div class="mx-5">
        <!-- Pop-Up Placment -->
        <si-app-loader placement="SHOP_PAGE" />
        <!-- Pop-Up Placment -->
        <si-app-loader placement="BEFORE_SHOP_SIDEBAR"/>
        <div class="relative ">
            <div class="collection-image">
                <div v-show="loading.collections" class="flex items-center justify-center my-5">
                    <si-loader></si-loader>
                </div>
            </div>
            <div class="flex items-center justify-between lg:relative under-border ">
                <transition name="fade">
                    <!-- v-show="$settings.sections.shop.sidebar.active" -->
                    <div v-show="windowWidth < 1024 ? showSideBar : true"  :class="showSideBar ? 'show':'hide'" class="fixed inset-0 z-50 hidden w-full h-full overflow-auto bg-white lg:static lg:block lg:w-auto lg:h-auto lg:inset-auto lg:z-auto">
                        <div class="flex flex-col justify-between h-full">
                            <div>
                                <div class="flex items-center justify-between px-5 py-5 border-b lg:hidden lg:border-0">
                                    <h2 class="text-sml ml-font-bold">{{ $settings.sections.shop.sidebar.filters_name }}</h2>
                                    <div class="flex items-center" @click="showBodyScroll">
                                        <button aria-label="show side bar button" class="flex items-center" @click="showSideBar=false">
                                            <svg aria-label="chivron icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.71 10l4.65-4.66a.495.495 0 10-.7-.7L10 9.29 5.34 4.64a.495.495 0 00-.7.7L9.29 10l-4.65 4.66a.48.48 0 000 .7.481.481 0 00.7 0L10 10.71l4.66 4.65a.482.482 0 00.7 0 .48.48 0 000-.7L10.71 10z" fill="currentColor"></path></svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex flex-col mx-5 lg:flex-row lg:mx-10">
                                    <!--  Collections -->
                                    <div v-show="$settings.sections.shop.sidebar.collections.active" class="border-b lg:border-0 lg:ml-mr-3" @mouseover="windowWidth >= 1024 ? isVisible.collections=true : null" @mouseleave="windowWidth >= 1024 ? isVisible.collections=false : null">
                                        <div @click="showCollections" class="flex items-center justify-between py-5 cursor-pointer lg:gap-1">
                                            <h2 class="text-sml hover:font-semibold" :class="isVisible.collections==true? 'ml-font-bold' : ''">{{ $settings.sections.shop.sidebar.collections.title }}</h2>
                                            <svg aria-label="chivron icon" :class="isVisible.collections == true ? 'rotate-180 transition-all delay-150 ease-linear':''" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 7.6a.54.54 0 00-.78 0L10 12.21 5.39 7.6a.54.54 0 00-.78 0 .55.55 0 000 .77L10 13.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                        </div>
                                        <transition name="slide">
                                            <div class="bg-white lg:absolute lg:top-full lg:inset-x-0 lg:w-full lg:z-30 lg:px-10" v-show="isVisible.collections && collections.length > 0">
                                                <div class="flex flex-col mb-2 border-gray-300 text-sml lg:pt-5 lg:border-t">
                                                    <div v-for="(item, i) in collections" :key="i" class="pb-3">
                                                        <div  class="flex items-center w-full">
                                                            <label class="relative flex items-center w-full transition ease-in-out delay-300 lg:w-auto">
                                                                <div>
                                                                    <div class="flex flex-col w-full cursor-pointer lg:w-auto lg:gap-1" v-show="item.childrens && item.childrens.length > 0" @mouseover="windowWidth >= 1024 ? setActiveOver(i+'fit',i+'ret') : null" @mouseleave="windowWidth >= 1024 ? setActiveLeave(i+'fit',i+'ret') : null">
                                                                        <label :for="item.slug" :id="i+'ret'" @click="setActive(i+'fit',i+'ret')" class="flex items-center justify-between cursor-pointer lg:gap-1 primary-hover rotated">
                                                                            <span class="cursor-pointer text-sml">{{ item.name }}</span>
                                                                            <svg aria-label="chivron icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 7.6a.54.54 0 00-.78 0L10 12.21 5.39 7.6a.54.54 0 00-.78 0 .55.55 0 000 .77L10 13.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                                                        </label>
                                                                        <div :id="i+'fit'" class="fit-collapsible text-primary" :class="item.childrens.length > 0 ? 'sub-collections' : ''">
                                                                            <div class="list-sub-collections fit-collapsible-content" v-show="item.childrens && item.childrens.length > 0" >
                                                                                <div v-for="(child, ii) in item.childrens" :key="ii" class="pt-3">
                                                                                    <label class="relative flex items-center">
                                                                                        <input hidden type="checkbox" class="absolute top-0 left-0 form-checkbox" style="z-index: -1" :checked="params['collections.slug-in'] && params['collections.slug-in'].indexOf(child.slug) >= 0" :id="child.slug" @change="setParams($event, 'collections.slug-in', child.slug)">
                                                                                        <div class="flex items-center justify-center">
                                                                                            <svg aria-label="chivron icon" class="fill-current "  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15.05a.54.54 0 01-.39-.16l-4-4a.551.551 0 11.78-.78l3.61 3.61 8.61-8.61a.55.55 0 11.78.78l-9 9a.54.54 0 01-.39.16z" fill="currentColor"></path></svg>
                                                                                        </div>
                                                                                        <label :for="child.slug" class="cursor-pointer text-sml primary-hover">{{ child.name }}</label>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div class="flex items-center" v-show="item.childrens && item.childrens.length == 0">
                                                                        <input hidden  type="checkbox" class="absolute top-0 left-0 form-checkbox"  style="z-index: -1" :checked="params['collections.slug-in'] && params['collections.slug-in'].indexOf(item.slug) >= 0" :id="item.slug" @change="setParams($event, 'collections.slug-in', item.slug)">
                                                                        <div class="flex items-center justify-center">
                                                                            <svg aria-label="chivron icon" class="fill-current"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15.05a.54.54 0 01-.39-.16l-4-4a.551.551 0 11.78-.78l3.61 3.61 8.61-8.61a.55.55 0 11.78.78l-9 9a.54.54 0 01-.39.16z" fill="currentColor"></path></svg>
                                                                        </div>
                                                                        <label class="cursor-pointer text-sml primary-hover" :for="item.slug">{{ item.name }}</label>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </transition>
                                    </div>
                                    <!-- Collections -->
                                    <!-- Prices -->
                                    <div v-show=" $settings.sections && $settings.sections.shop.sidebar && $settings.sections.shop.sidebar.prices.active" class="border-b lg:border-0 lg:ml-mr-3" @mouseover="windowWidth >= 1024 ? isVisible.prices=true: null" @mouseleave="windowWidth >= 1024 ? isVisible.prices=false:null">
                                        <div @click="showPrices" class="flex items-center justify-between py-5 cursor-pointer lg:gap-1">
                                            <h2 class="text-sml hover:font-semibold" :class="isVisible.prices==true? 'ml-font-bold' : ''">{{ $settings.sections.shop.sidebar.prices.title }}</h2>
                                            <svg aria-label="chivron icon" :class="isVisible.prices == true ? 'rotate-180 transition-all delay-150 ease-linear':''" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 7.6a.54.54 0 00-.78 0L10 12.21 5.39 7.6a.54.54 0 00-.78 0 .55.55 0 000 .77L10 13.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                        </div>
                                        <transition name="slide">
                                            <div class="bg-white lg:absolute lg:top-full lg:inset-x-0 lg:w-full lg:z-30 lg:px-10" v-show="isVisible.prices && filters">
                                                <div class="pb-5 border-gray-300 lg:pt-5 lg:border-t">
                                                    <div class="flex flex-col" dir="ltr" v-if="filters && filters.prices">
                                                        <si-price-range @change="setParams" :min="filters.prices.min" :max="filters.prices.max" />
                                                    </div>
                                                </div>
                                            </div>
                                        </transition>
                                    </div>
                                    <!-- Prices -->
                                    <!-- Sizes -->
                                    <div v-show="$settings.sections.shop.sidebar.sizes.active" class="border-b lg:border-0 lg:ml-mr-3" @mouseover="windowWidth >= 1024 ? isVisible.sizes=true : null" @mouseleave="windowWidth >= 1024 ? isVisible.sizes=false : null">
                                        <div @click="showSizes" class="flex items-center justify-between py-5 cursor-pointer lg:gap-1">
                                            <h2 class="text-sml hover:font-semibold" :class="isVisible.sizes==true? 'ml-font-bold' : ''">{{ $settings.sections.shop.sidebar.sizes.title }}</h2>
                                            <svg aria-label="chivron icon" :class="isVisible.sizes == true ? 'rotate-180 transition-all delay-150 ease-linear':''" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 7.6a.54.54 0 00-.78 0L10 12.21 5.39 7.6a.54.54 0 00-.78 0 .55.55 0 000 .77L10 13.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                        </div>
                                        <transition name="slide">
                                            <div class="bg-white lg:absolute lg:top-full lg:inset-x-0 lg:w-full lg:z-30 lg:px-10" v-if="isVisible.sizes && filters && filters.sizes.length > 0">
                                                <div class="pb-2 border-gray-300 lg:pt-5 lg:border-t">
                                                    <div class="flex flex-col">
                                                        <div class="flex items-center pb-3" v-for="(item, i) in filters.sizes" :key="i" >
                                                            <label class="relative flex items-center cursor-pointer">
                                                                <input hidden type="checkbox" class="absolute top-0 left-0" style="z-index: -1" :checked="params['options.values.value1'] && params['options.values.value1'].indexOf(item.value1) >= 0" :id="item.value1" @change="setParams($event, 'options.values.value1', item.value1)">
                                                                <div class="flex items-center justify-center">
                                                                    <svg aria-label="chivron icon" class="fill-current"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15.05a.54.54 0 01-.39-.16l-4-4a.551.551 0 11.78-.78l3.61 3.61 8.61-8.61a.55.55 0 11.78.78l-9 9a.54.54 0 01-.39.16z" fill="currentColor"></path></svg>
                                                                </div>
                                                                <label class="cursor-pointer text-sml primary-hover" :for="item.value1">{{ item.value1 }}</label>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </transition>
                                    </div>
                                    <!-- Sizes -->
                                    <!-- Colors -->
                                    <div v-show="$settings.sections.shop.sidebar.colors.active" class="border-b lg:border-0 lg:ml-mr-3" @mouseover="windowWidth >= 1024 ? isVisible.colors=true : null" @mouseleave="windowWidth >= 1024 ? isVisible.colors=false: null">
                                        <div @click="showColors" class="flex items-center justify-between py-5 cursor-pointer lg:gap-1">
                                            <h2 class="text-sml hover:font-semibold" :class="isVisible.colors==true? 'ml-font-bold' : ''">{{ $settings.sections.shop.sidebar.colors.title }}</h2>
                                            <svg aria-label="chivron icon" :class="isVisible.colors == true ? 'rotate-180 transition-all delay-150 ease-linear':''" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 7.6a.54.54 0 00-.78 0L10 12.21 5.39 7.6a.54.54 0 00-.78 0 .55.55 0 000 .77L10 13.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                        </div>
                                        <transition name="slide">
                                            <div class="bg-white lg:absolute lg:top-full lg:inset-x-0 lg:w-full lg:z-30 lg:px-10" v-if="isVisible.colors && filters && filters.colors.length > 0">
                                                <div class="pb-2 border-gray-300 lg:pt-5 lg:border-t">
                                                    <div class="flex flex-col">
                                                        <div class="flex items-center pb-3" v-for="(item, i) in filters.colors" :key="i" :class="params['options.values.value1'] && params['options.values.value1'].indexOf(item.value1) >= 0 ? 'active' : '' ">
                                                            <label class="relative flex items-center cursor-pointer">
                                                                <input hidden type="checkbox" class="absolute top-0 left-0" style="z-index: -1" :id="item.value1" :checked="params['options.values.value1'] && params['options.values.value1'].indexOf(item.value1) >= 0" @change="setParams($event, 'options.values.value1', item.value1)">
                                                                <div class="flex items-center justify-center">
                                                                    <svg aria-label="chivron icon" class="fill-current "  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15.05a.54.54 0 01-.39-.16l-4-4a.551.551 0 11.78-.78l3.61 3.61 8.61-8.61a.55.55 0 11.78.78l-9 9a.54.54 0 01-.39.16z" fill="currentColor"></path></svg>
                                                                </div>
                                                                <label class="cursor-pointer text-sml primary-hover" :for="item.value1" :aria-label="item.value1">{{ item.value1 }}</label>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </transition>
                                    </div>
                                    <!-- Colors -->
                                    <!-- tags -->
                                    <div v-show="$settings.sections.shop.sidebar.tags.active" class="border-b lg:border-0 lg:ml-mr-3" @mouseover="windowWidth >= 1024 ? isVisible.tags=true: null" @mouseleave="windowWidth >= 1024 ? isVisible.tags=false:null">
                                        <div @click="showTags" class="flex items-center justify-between py-5 cursor-pointer lg:gap-1">
                                            <h2 class="text-sml hover:font-semibold" :class="isVisible.tags==true? 'ml-font-bold' : ''">{{ $settings.sections.shop.sidebar.tags.title }}</h2>
                                            <svg aria-label="chivron icon" :class="isVisible.tags == true ? 'rotate-180 transition-all delay-150 ease-linear':''" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 7.6a.54.54 0 00-.78 0L10 12.21 5.39 7.6a.54.54 0 00-.78 0 .55.55 0 000 .77L10 13.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                        </div>
                                        <transition name="slide">
                                            <div class="bg-white lg:absolute lg:top-full lg:inset-x-0 lg:w-full lg:z-30 lg:px-10" v-if="isVisible.tags && filters && filters.tags.length > 0">
                                                <div  class="pb-2 border-gray-300 lg:pt-5 lg:border-t">
                                                    <div class="flex flex-col">
                                                        <div class="flex items-center pb-3" v-for="(tag, i) in filters.tags" :key="i">
                                                            <label class="relative flex items-center cursor-pointer">
                                                                <input hidden type="checkbox" class="absolute top-0 left-0" style="z-index: -1" :checked="params['tags-in'] && params['tags-in'].indexOf(tag) >= 0" :id="`tag_${tag}`" @change="setParams($event, 'tags-in', tag)">
                                                                <div class="flex items-center justify-center">
                                                                    <svg aria-label="chivron icon" class="fill-current "  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15.05a.54.54 0 01-.39-.16l-4-4a.551.551 0 11.78-.78l3.61 3.61 8.61-8.61a.55.55 0 11.78.78l-9 9a.54.54 0 01-.39.16z" fill="currentColor"></path></svg>
                                                                </div>
                                                                <label class="cursor-pointer text-sml primary-hover" :for="`tag_${tag}`">{{ tag }}</label>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </transition>
                                    </div>
                                    <!-- tags -->
                                    <!-- brands -->
                                    <div  v-show="$settings.sections.shop.sidebar.brands.active" class="border-b lg:border-0 lg:ml-mr-3" @mouseover="windowWidth >= 1024 ? isVisible.brands=true : null" @mouseleave="windowWidth >= 1024 ? isVisible.brands=false : null">
                                        <div @click="showBrands" class="flex items-center justify-between py-5 cursor-pointer lg:gap-1">
                                            <h2 class="text-sml hover:font-semibold" :class="isVisible.brands==true? 'ml-font-bold' : ''">{{ $settings.sections.shop.sidebar.brands.title }}</h2>
                                            <svg aria-label="chivron icon" :class="isVisible.brands == true ? 'rotate-180 transition-all delay-150 ease-linear':''" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 7.6a.54.54 0 00-.78 0L10 12.21 5.39 7.6a.54.54 0 00-.78 0 .55.55 0 000 .77L10 13.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                        </div>
                                        <transition name="slide">
                                            <div class="bg-white lg:absolute lg:top-full lg:inset-x-0 lg:w-full lg:z-30 lg:px-10" v-show="isVisible.brands && filters && brands.length > 0">
                                                <div class="flex flex-col">
                                                    <div class="pb-2 border-gray-300 lg:pt-5 lg:border-t">
                                                        <div class="flex flex-col">
                                                            <div class="flex items-center pb-3" v-for="(item, i) in brands" :key="i">
                                                                <label class="relative flex items-center cursor-pointer">
                                                                    <input hidden  type="checkbox" class="absolute top-0 left-0" style="z-index: -1" :id="item.slug" :checked="params['brand.slug-in'] && params['brand.slug-in'].indexOf(item.slug) >= 0" @change="setParams($event, 'brand.slug-in', item.slug)">
                                                                    <div class="flex items-center justify-center">
                                                                        <svg aria-label="chivron icon" class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15.05a.54.54 0 01-.39-.16l-4-4a.551.551 0 11.78-.78l3.61 3.61 8.61-8.61a.55.55 0 11.78.78l-9 9a.54.54 0 01-.39.16z" fill="currentColor"></path></svg>
                                                                    </div>
                                                                    <label class="cursor-pointer text-sml primary-hover" :for="item.slug">{{ item.name }}</label>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </transition>
                                    </div>
                                    <!-- brand -->
                                </div>
                            </div>
                            <div @click="showBodyScroll">
                                <div @click="showSideBar=false" class="px-8 py-5 mx-5 my-5 bg-black rounded-full cursor-pointer lg:hidden hover:font-semibold">
                                    <div class="flex items-center justify-center text-white text-sml">
                                        <span>{{ $settings.sections.shop.sidebar.button_text1}} <span> {{ items.length }} </span> {{ $settings.sections.shop.sidebar.button_text2 }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
                <div class="flex items-center justify-between w-full mx-5 lg:w-auto lg:mx-10">
                    <!--  -->
                    <div class="py-2 text-sml text-primary lg:py-5">
                        <span>{{ items.length }} {{ $settings.sections.shop.articles_name }}</span>
                    </div>
                    <!--  -->
                    <!--  -->
                    <div class="items-center justify-center hidden w-6 lg:flex">
                        <div style="width: 0.5px;" class="h-3 bg-gray-500"></div>
                    </div>
                    <!--  -->
                    <!--  -->
                    <div class="flex items-center gap-4">
                        <!-- filters -->
                        <div v-show="$settings.sections.shop.sidebar.active" @click="hideBodyScroll">
                            <div @click="showSideBar = true" class="flex items-center cursor-pointer lg:hidden">
                                <h2 class="underline text-sml hover:font-semibold">{{ $settings.sections.shop.sidebar.filters_name }}</h2>
                            </div>
                        </div>
                        <!-- filters -->
                        <!-- Sort -->
                        <div class="" @mouseover="windowWidth >= 1024 ? isVisible.sort=true : null" @mouseleave="windowWidth >= 1024 ? isVisible.sort=false : null">
                            <div @click="hideBodyScroll">
                                <div @click="showSort" class="flex items-center justify-between py-4 underline cursor-pointer lg:py-5 lg:no-underline">
                                    <h2 class="text-sml hover:font-semibold" :class="isVisible.sort==true? 'ml-font-bold' : ''">{{ $settings.sections.shop.sort_name }}</h2>
                                    <svg aria-label="chivron icon" class="hidden lg:ml-1 lg:block" :class="isVisible.sort == true ? 'rotate-180 transition-all delay-150 ease-linear':''" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 7.6a.54.54 0 00-.78 0L10 12.21 5.39 7.6a.54.54 0 00-.78 0 .55.55 0 000 .77L10 13.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                </div>
                            </div>
                            <transition :name="windowWidth < 1024 ? 'fade' : 'slide'">
                                <div class="fixed inset-0 z-50 w-full h-full overflow-auto bg-white lg:absolute lg:h-auto lg:top-full lg:inset-y-auto lg:bottom-auto lg:overflow-hidden lg:px-10" v-show="isVisible.sort">
                                    <div class="flex flex-col justify-between h-full">
                                        <div>
                                            <div class="flex items-center justify-between px-5 py-5 border-b border-gray-300 lg:hidden">
                                                <h2 class="text-sml ml-font-bold">{{ $settings.sections.shop.sort_name }}</h2>
                                                <div class="flex items-center" @click="showBodyScroll">
                                                    <button aria-label="show sort button" class="flex items-center" @click="isVisible.sort=false">
                                                        <svg aria-label="close icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.71 10l4.65-4.66a.495.495 0 10-.7-.7L10 9.29 5.34 4.64a.495.495 0 00-.7.7L9.29 10l-4.65 4.66a.48.48 0 000 .7.481.481 0 00.7 0L10 10.71l4.66 4.65a.482.482 0 00.7 0 .48.48 0 000-.7L10.71 10z" fill="currentColor"></path></svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="px-5 pt-5 pb-2 border-gray-300 lg:border-t lg:px-0">
                                                <div class="flex flex-col">
                                                    <div class="flex items-center pb-3" v-for="(sort, i) in sorts" :key="i">
                                                        <label class="relative flex items-center cursor-pointer">
                                                            <input hidden type="radio" class="absolute top-0 left-0" style="z-index: -1" v-model="params.sort" :value="sort.field" :id="sort.name">
                                                            <div class="flex items-center justify-center">
                                                                <svg aria-label="chivron icon" class="fill-current "  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15.05a.54.54 0 01-.39-.16l-4-4a.551.551 0 11.78-.78l3.61 3.61 8.61-8.61a.55.55 0 11.78.78l-9 9a.54.54 0 01-.39.16z" fill="currentColor"></path></svg>
                                                            </div>
                                                            <label class="cursor-pointer text-sml primary-hover" :for="sort.name">{{ sort.name }}</label>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-col justify-end" @click="showBodyScroll">
                                            <div @click="isVisible.sort=false" class="px-8 py-5 mx-5 my-5 bg-black rounded-full cursor-pointer lg:hidden hover:font-semibold">
                                                <div class="flex items-center justify-center text-white text-sml">
                                                    <span>{{ $settings.sections.shop.sidebar.button_text1}} <span> {{ items.length }} </span> {{ $settings.sections.shop.sidebar.button_text2 }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </transition>
                        </div>
                        <!-- Sort -->
                    </div>
                </div>
            </div>
        </div>
        <div class="">
            <div v-show="loading.products" class="flex items-center justify-center my-5">
                <si-loader></si-loader>
            </div>
            <div v-show="!loading.products && items.length == 0" class="flex items-center justify-center my-5">
                <h1 class="py-3 text-xl">{{ $settings.sections.shop.empty_text  }}</h1>
            </div>
            <div class="flex flex-wrap lg:mx-10 xl:mx-10 py-10">
                <div v-for="(item, i) in items" :key="i" class="w-1/2 mb-4 products-padding lg:w-1/4 lg:px-4 xl:px-5 lg:mb-8">
                    <si-product :item="item"></si-product>
                </div>
            </div>
            <!-- Pagination -->
            <div :class="items.length != 0?'lg:mx-10 py-10 ':''">
                <div class="flex flex-wrap items-center justify-center" v-show="paginate.last_page > 0">
                    <!-- chivron left -->
                    <button aria-label="chivron left button" v-show="paginate.current_page > 1" class="flex items-center p-3 mx-2 primary-hover" @click="getItems(paginate.current_page-1)">
                        <svg aria-label="chivron left icon" class="w-3 h-3 translate" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                    </button>
                    <!-- chivron left -->
                    <!-- pages -->
                    <button aria-label="paggination button" v-show="paginate.last_page > 1" :class="[(this.style),((paginate.last_page - (paginate.last_page -1)) == paginate.current_page ? 'text-primary' : '')]" @click="getItems(paginate.last_page - (paginate.last_page -1))">
                        <span aria-label="paggination icon" class="text-sm font-bold">{{ paginate.last_page - (paginate.last_page -1) }}</span>
                    </button>
                    <button aria-label="paggination button" v-show="paginate.last_page > 2" :class="[(this.style),((paginate.last_page - (paginate.last_page -2)) == paginate.current_page ? 'text-primary' : '')]" @click="getItems(paginate.last_page - (paginate.last_page -2))">
                        <span aria-label="paggination icon" class="text-sm font-bold">{{ paginate.last_page - (paginate.last_page -2) }}</span>
                    </button>
                    <button aria-label="paggination button" v-show="paginate.last_page > 3" :class="[(this.style),((paginate.last_page - (paginate.last_page -3)) == paginate.current_page ? 'text-primary' : '')]" @click="getItems(paginate.last_page - (paginate.last_page -3))">
                        <span aria-label="paggination icon" class="text-sm font-bold">{{ paginate.last_page - (paginate.last_page -3) }}</span>
                    </button>
                    <button aria-label="paggination button" v-show="paginate.last_page > 4" :class="[(this.style),((paginate.last_page - (paginate.last_page -4)) == paginate.current_page ? 'text-primary' : '')]" @click="getItems(paginate.last_page - (paginate.last_page -4))">
                        <span aria-label="paggination icon" class="text-sm font-bold">{{ paginate.last_page - (paginate.last_page -4) }}</span>
                    </button>
                    <button aria-label="paggination button" v-show="paginate.last_page > 5" :class="[(this.style),((paginate.last_page - (paginate.last_page -5)) == paginate.current_page ? 'text-primary' : '')]" @click="getItems(paginate.last_page - (paginate.last_page -5))">
                        <span aria-label="paggination icon" class="text-sm font-bold">{{ paginate.last_page - (paginate.last_page -5) }}</span>
                    </button>
                    <!-- More Page exists -->
                    <button aria-label="paggination button" v-show="paginate.last_page > 5" :class="[(this.style),(paginate.current_page > (paginate.last_page - (paginate.last_page -5)) &&  paginate.current_page < (paginate.last_page)   ? 'text-primary' : '')]" >
                        <span aria-label="paggination icon" class="text-sm font-bold">{{paginate.current_page > (paginate.last_page - (paginate.last_page -5)) &&  paginate.current_page < (paginate.last_page)? paginate.current_page:'...'}}</span>
                    </button>
                    <button aria-label="paggination button" v-show="paginate.current_page > (paginate.last_page - (paginate.last_page -5)) &&  paginate.current_page < (paginate.last_page)" :class="this.style">
                        <span aria-label="paggination icon" class="text-sm font-bold">...</span>
                    </button>
                    <!-- More Page exists -->
                    <!-- pages -->
                    <div v-if="paginate.last_page > 5">
                        <button aria-label="paggination button" v-show="paginate.last_page == paginate.current_page"  :class="[(this.style),(paginate.last_page == paginate.current_page ? 'text-primary' : '')]" @click="getItems(paginate.last_page)">
                            <span aria-label="paggination icon" class="text-sm font-bold">{{ paginate.last_page }}</span>
                        </button>
                    </div>
                    <div v-else>
                        <button aria-label="paggination button" v-show="paginate.last_page > 0" :class="[(this.style),(paginate.last_page == paginate.current_page ? 'text-primary' : '')]" @click="getItems(paginate.last_page)">
                            <span aria-label="paggination icon" class="text-sm font-bold">{{ paginate.last_page }}</span>
                        </button>
                    </div>
                    <!-- pages -->
                    <!-- chivron right -->
                    <button aria-label="chivron right button" v-show="paginate.current_page < paginate.last_page" class="flex items-center p-3 mx-2 primary-hover" @click="getItems(paginate.current_page+1)">
                        <svg aria-label="chivron right icon" class="w-3 h-3 translate" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                    </button>
                    <!-- chivron right -->
                </div>
            </div>
            <!-- Pagination -->
        </div>
    </div>
</template>

<script>
export default {
    // Ormana Relod Page
    async asyncData({ route, redirect }) {
        if (route.path === '/shop/decouvrez-plus-ormana') {
            redirect('/pages/ormana');
        }
    },
    data() {
        return {
            urlSlugs: [],
            windowWidth: 0,
            showSideBar: false,
            isVisible: {
                collections: false,
                prices: false,
                sizes: false,
                colors: false,
                tags: false,
                brands: false,
                sort: false,
            },
            loading: {
                products: true,
                filters: true,
                collections: true,
                brands: true,
            },
            query: {},
            param: [],
            filters: null,
            items: [],
            collections: [],
            brands: [],
            style: 'mx-2 h-10 w-10 primary-hover',
            paginate: { page: 1, limit: this.$settings.sections.shop.pagination.limit, total: 12 },
            params: { page: 1, search: this.$route.query.search, limit: this.$settings.sections.shop.pagination.limit, 'collections.slug-in': [], sort: this.$settings.sections.shop.default_sort },
            lastParams: { page: 1, search: this.$route.query.search, limit: this.$settings.sections.shop.pagination.limit, 'collections.slug-in': [], sort: this.$settings.sections.shop.default_sort },
            sorts: [
                { field: { 'price.salePrice': 1 }, name: this.$settings.sections.shop.sorts.price_asc },
                { field: { 'price.salePrice': -1 }, name: this.$settings.sections.shop.sorts.price_desc },
                { field: { 'review.rating': -1 }, name: this.$settings.sections.shop.sorts.rating_desc },
                { field: { 'review.rating': 1 }, name: this.$settings.sections.shop.sorts.rating_asc },
                { field: { 'name': 1 }, name: this.$settings.sections.shop.sorts.name_asc },
                { field: { 'name': -1 }, name: this.$settings.sections.shop.sorts.name_desc },
                { field: { 'createdAt': -1 }, name: this.$settings.sections.shop.sorts.newest },
                { field: { 'createdAt': 1 }, name: this.$settings.sections.shop.sorts.oldest }
            ]
        }
    },
    mounted() {
        // All Pixels
        this.$storeino.fbpx('PageView');
        // Fb Pixels
        this.$tools.call('PAGE_VIEW');
        // Resize Window
        this.getWindowWidth();
        window.addEventListener('resize', this.getWindowWidth);
        this.currentSlug();
    },
    watch: {
        params: {
            handler(val) {
                if (JSON.stringify(val) !== JSON.stringify(this.lastParams)) {
                    this.getItems();
                }
            },
            deep: true
        },
        "$route.query.search"(val) {
            this.$set(this.params, 'search', val);
        },
    },
    async fetch() {
        this.$store.state.seo.title = this.$settings.sections.shop.title + ' - ' + this.$settings.store_name;
        this.$store.state.seo.description = this.$settings.sections.shop.description || this.$settings.store_description;
        if (this.$route.params.slug) {
            this.param = this.$route.params.slug.split(',');
            this.$route.params.slug.split(',').forEach(item => {
                this.params['collections.slug-in'].push(item);
            });
        }
        for (const key in this.$route.query) {
            if (!this.$route.query[key]) continue;
            switch (key) {
                case 'price-from': this.$set(this.params, 'price.salePrice-from', this.$route.query[key]); break;
                case 'price-to': this.$set(this.params, 'price.salePrice-to', this.$route.query[key]); break;
                case 'colors-size': this.$set(this.params, 'options.values.value1', this.$route.query[key].split(',')); break;
                case 'tags': this.$set(this.params, 'tags-in', this.$route.query[key].split(',')); break;
                case 'brands': this.$set(this.params, 'brand.slug-in', this.$route.query[key].split(',')); break;
                case 'page': this.$set(this.params, 'page', this.$route.query[key]); break;
            }
        }
        this.lastParams = this.params;
        await this.getFilters();
        await this.getItems();
        await this.getCollections();
        await this.getBrands();
        this.subCollections();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.getWindowWidth);
    },
    methods: {
        currentSlug() {
            const slug = this.$route.params.slug
            if (typeof (slug) !== 'undefined') {
                this.urlSlugs = slug.split(" ");
            }
        },
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
        subCollections() {
            for (const itm of this.collections) {
                if (itm.childrens && itm.childrens.length > 0) {
                    itm.childrens = [];
                } 
            }
            for (let i = 0; i < this.collections.length; i++) {
                for (let j = 0; j < this.collections.length; j++) {
                    if (this.collections[i].parent == this.collections[j]._id) {
                        const childObject = this.collections[i];
                        this.collections[j].childrens.push(childObject);
                        this.collections.splice(i, 1);
                        i--;
                    }
                }
            }
        },
        setActive: function (id, idRet) {
            if (window.innerWidth < 1024) {
                let  element = document.getElementById(id);
                if (element.classList.contains('active')) {
                    element.classList.remove('active');
                } else {
                    element.classList.add('active');
                }
                let  icon = document.getElementById(idRet);
                if (icon.classList.contains('active')) {
                    icon.classList.remove('active');
                } else {
                    icon.classList.add('active');
                }
            }
        },
        setActiveOver: function (id, idRet) {
            const element = document.getElementById(id);
            element.classList.add('active');
            const icon = document.getElementById(idRet);
            icon.classList.add('active');
        },
        setActiveLeave: function (id, idRet) {
            const element = document.getElementById(id);
            element.classList.remove('active');
            const icon = document.getElementById(idRet);
            icon.classList.remove('active');
        },
        setParams(e, key, value) {
            if (key.indexOf('price') >= 0 || key.indexOf('page') >= 0) {
                this.$set(this.params, key, e.target.value);
                return false;
            } else {
                if (e.target.checked) {
                    if (!this.params[key]) this.params[key] = this.$set(this.params, key, []);
                    this.params[key].push(value);
                } else {
                    this.params[key] = this.params[key].filter(item => item !== value);
                }
            }
            for (const key in this.params) {
                switch (key) {
                    case 'collections.slug-in': this.param = this.params[key]; this.urlSlugs = this.params[key]; break;
                    case 'price.salePrice-from': this.query['price-from'] = this.params[key]; break;
                    case 'price.salePrice-to': this.query['price-to'] = this.params[key]; break;
                    case 'options.values.value1': this.query['colors-size'] = this.params[key]; break;
                    case 'tags-in': this.query['tags'] = this.params[key]; break;
                    case 'brand.slug-in': this.query['brands'] = this.params[key]; break;
                    case 'page': this.query['page'] = [this.params[key]]; break;
                }
            }
            let url = `/shop/`;
            url += this.param.length > 0 ? [...new Set(this.param)].join(',') : '';
            for (const key in this.query) {
                url += url.indexOf('?') == -1 ? '?' : '&';
                if (typeof this.query[key] == 'object') {
                    url += `${key}=${this.query[key].join(',')}`;
                } else url += `${key}=${this.query[key]}`;
            }
            window.history.pushState({}, '', url);
        },
        async getFilters() {
            this.filters = null;
            this.loading.filters = true;
            try {
                const { data } = await this.$storeino.products.filters({});
                this.filters = data;
            } catch (err) {
                this.$sentry.captureException(err);
            }
            this.loading.filters = false;
        },
        async getCollections() {
            this.collections = [];
            this.loading.collections = true;
            try {
                const { data } = await this.$storeino.collections.search({});
                this.collections = data.results;
            } catch (err) {
                this.$sentry.captureException(err);
            }
            this.loading.collections = false;
        },
        async getBrands() {
            this.brands = [];
            this.loading.brands = true;
            try {
                const { data } = await this.$storeino.brands.search({});
                this.brands = data.results;
            } catch (err) {
                this.$sentry.captureException(err);
            }
            this.loading.brands = false;
        },
        async getItems(page = null) {
            if (page != null) this.setParams({ target: { value: page } }, 'page', page);
            this.items = [];
            this.loading.products = true;
            try {
                this.params.search = this.$route.query.search;
                this.params.page = page || this.paginate.current_page;
                this.params.limit = this.$settings.sections.shop.pagination.limit;
                this.lastParams = this.$tools.copy(this.params);
                const { data } = await this.$storeino.products.search(this.params);
                this.items = data.results;
                this.paginate = data.paginate;
            } catch (err) {
                this.$sentry.captureException(err);
            }
            this.loading.products = false;
        },
        showCollections() {
            if (window.innerWidth < 1024) {
                this.isVisible.collections = !this.isVisible.collections;
            }
        },
        showPrices() {
            if (window.innerWidth < 1024) {
                this.isVisible.prices = !this.isVisible.prices;
            }
        },
        showSizes() {
            if (window.innerWidth < 1024) {
                this.isVisible.sizes = !this.isVisible.sizes;
            }
        },
        showColors() {
            if (window.innerWidth < 1024) {
                this.isVisible.colors = !this.isVisible.colors;
            }
        },
        showTags() {
            if (window.innerWidth < 1024) {
                this.isVisible.tags = !this.isVisible.tags;
            }
        },
        showBrands() {
            if (window.innerWidth < 1024) {
                this.isVisible.brands = !this.isVisible.brands;
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
/*.text-shadoow {
    filter: drop-shadow(0 0 0.625rem rgba(0, 0, 0, 0.8));
}*/

.pb-1\/5-res {
    padding-bottom: 40%;
}

@media (min-width: 640px) {
    .pb-1\/5-res {
        padding-bottom: 30%;
    }
}

@media (min-width: 1024px) {
    .lg\:ml-mr-3 {
        margin-right: 0.75rem;
    }

    [dir="rtl"] .lg\:ml-mr-3 {
        margin-left: 0.75rem;
        margin-right: 0;
    }

    .pb-1\/5-res {
        padding-bottom: 20%;
    }
}

@media (min-width:0px) and (max-width:1024px) {
    .products-padding:nth-child(odd) {
        padding-right: 1rem;
    }

    .products-padding:nth-child(even) {
        padding-left: 1rem;
    }

    [dir="rtl"] .products-padding:nth-child(odd) {
        padding-left: 1rem;
        padding-right: 0;
    }

    [dir="rtl"] .products-padding:nth-child(even) {
        padding-right: 1rem;
        padding-left: 0;
    }
}

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

/* show filters */
@media (max-width: 1024px) {
    .show {
        display: block !important;
    }
}

input[type="checkbox"]+div svg,
input[type="radio"]+div svg {
    height: 0;
    width: 0;
    opacity: 0;
    margin-right: 0;
    transition: all .3s ease-in-out;
}

input[type="checkbox"]:checked+div svg,
input[type="radio"]:checked+div svg {
    height: 1.25rem;
    width: 1.25rem;
    opacity: 1;
}

input[type="checkbox"]:checked+div svg,
input[type="radio"]:checked+div svg {
    margin-right: 4px;
}

[dir="rtl"] input[type="checkbox"]:checked+div svg,
[dir="rtl"] input[type="radio"]:checked+div svg {
    margin-left: 4px;
    margin-right: 0;
}

input[type="checkbox"]:checked+div+label,
input[type="radio"]:checked+div+label {
    transition: all 0.3s ease;
}

input[type="checkbox"]:checked+div+label,
input[type="radio"]:checked+div+label {
    font-family: Century Gothic Std Bold, Noto Sans JP, Noto Sans SC, Noto Sans TC, Noto Sans KR;
}

[dir="rtl"] input[type="checkbox"]:checked+div+label,
[dir="rtl"] input[type="radio"]:checked+div+label {
    font-family: pingarlt, -apple-system, BlinkMacSystemFont;
    font-weight: 700;
}

.fit-collapsible {
    overflow: unset;
    text-align: left;
    display: block;
    margin: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: 0 0;
}

.fit-collapsible .fit-collapsible-content {
    max-height: 0;
    position: relative;
    overflow: hidden;
    transition: 0.4s;
}

.fit-collapsible.active .fit-collapsible-content {
    max-height: 500px;
}

.rotated>svg {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    transition-delay: 150ms;
    transition-timing-function: linear;
}

.rotated.active>svg {
    transform: rotate(180deg);
}
</style>


