<template>
    <div>
        <div class="relative">
                <div class="flex items-center justify-between lg:relative border-b border-gray-300"> 
                    <transition name="slide">
                        <div :class="showSideBar ? 'show':'hide'" class="bg-white fixed lg:static hidden lg:block w-full lg:w-auto h-full lg:h-auto inset-0 lg:inset-auto z-50 lg:z-auto overflow-x-scroll lg:overflow-auto">
                            <!-- <div class="bg-black bg-opacity-50 fixed block md:hidden inset-0" @click="showSideBar=false"></div> -->
                            <div class="flex items-center justify-between py-5 lg:hidden border-b lg:border-0 px-5">
                                <h2 class="text-sml Century-bold">All Filters</h2>
                                <div @click="showBodyScroll">
                                    <button @click="showSideBar=false">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.71 10l4.65-4.66a.495.495 0 10-.7-.7L10 9.29 5.34 4.64a.495.495 0 00-.7.7L9.29 10l-4.65 4.66a.48.48 0 000 .7.481.481 0 00.7 0L10 10.71l4.66 4.65a.482.482 0 00.7 0 .48.48 0 000-.7L10.71 10z" fill="currentColor"></path></svg>
                                    </button>
                                </div>
                            </div>
                            <div class="flex flex-col lg:flex-row mx-5 lg:mx-10">
                                <!--  Collections -->
                                <div class="border-b lg:border-0 lg:mr-3" @mouseover="windowWidth > 1024 ? isVisible.collections=true : null" @mouseleave="windowWidth > 1024 ? isVisible.collections=false : null">
                                    <div @click="showCollections" class="flex items-center  justify-between cursor-pointer py-5">
                                        <h2 class="text-sml Century-bold-hover" v-if="$settings.sections.shop.sidebar.collections.active" :class="isVisible.collections==true? 'Century-bold' : ''">{{ $settings.sections.shop.sidebar.collections.title }}</h2>
                                        <svg class="lg:mx-1" :class="isVisible.collections == true ? 'rotate-180 transition-all delay-150 ease-linear':''" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 7.6a.54.54 0 00-.78 0L10 12.21 5.39 7.6a.54.54 0 00-.78 0 .55.55 0 000 .77L10 13.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                    </div>
                                    <transition name="slide">
                                        <div class="bg-white lg:absolute lg:top-full lg:inset-x-0 lg:w-full lg:z-30 lg:px-10" v-if="isVisible.collections">
                                            <div v-if="$settings.sections.shop.sidebar.collections.active" class="flex flex-col text-sml mb-2 lg:pt-5 lg:border-t border-gray-300">
                                                <div v-for="(item, i) in collections" :key="i" class="pb-3">
                                                    <div class="flex items-center w-full">
                                                        <label class="w-full lg:w-auto relative flex items-center transition delay-300 ease-in-out">
                                                            <div v-if="item.childrens && item.childrens.length > 0"  @click="setActive(i+'fit',i+'ret')" class="w-full lg:w-auto flex items-center justify-between cursor-pointer">
                                                                <label class="text-sml cursor-pointer" :for="item.slug">{{ item.name }}</label>
                                                                <svg class="rotated lg:mx-1" :id="i+'ret'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 7.6a.54.54 0 00-.78 0L10 12.21 5.39 7.6a.54.54 0 00-.78 0 .55.55 0 000 .77L10 13.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                                            </div> 
                                                            <div class="flex items-center">
                                                                <input hidden v-if="item.childrens && item.childrens.length == 0" type="checkbox" class="form-checkbox absolute top-0 left-0"  style="z-index: -1" :checked="params['collections.slug-in'] && params['collections.slug-in'].indexOf(item.slug) >= 0" :id="item.slug" @change="setParams($event, 'collections.slug-in', item.slug)">
                                                                <div v-if="item.childrens && item.childrens.length == 0" class="flex justify-center items-center">
                                                                    <svg class="fill-current text-black"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15.05a.54.54 0 01-.39-.16l-4-4a.551.551 0 11.78-.78l3.61 3.61 8.61-8.61a.55.55 0 11.78.78l-9 9a.54.54 0 01-.39.16z" fill="currentColor"></path></svg>
                                                                </div>
                                                                <label v-if="item.childrens && item.childrens.length == 0 " class="cursor-pointer text-sml" :for="item.slug">{{ item.name }}</label>
                                                            </div>
                                                        </label>                         
                                                    </div>
                                                    <div :id="i+'fit'" class="fit-collapsible" :class="item.childrens.length > 0 ? 'sub-collections' : ''">
                                                        <div class="list-sub-collections fit-collapsible-content" v-if="item.childrens && item.childrens.length > 0" >
                                                            <div v-for="(child, i) in item.childrens" :key="i" class="pt-3">
                                                                <label class="relative flex items-center">
                                                                    <input hidden type="checkbox" class="form-checkbox absolute top-0 left-0" style="z-index: -1" :checked="params['collections.slug-in'] && params['collections.slug-in'].indexOf(child.slug) >= 0" :id="child.slug" @change="setParams($event, 'collections.slug-in', child.slug)">
                                                                    <div class="flex justify-center items-center">
                                                                        <svg class="fill-current text-black"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15.05a.54.54 0 01-.39-.16l-4-4a.551.551 0 11.78-.78l3.61 3.61 8.61-8.61a.55.55 0 11.78.78l-9 9a.54.54 0 01-.39.16z" fill="currentColor"></path></svg>
                                                                    </div>
                                                                    <label  :for="child.slug" class="cursor-pointer text-sml text-hover">{{ child.name }}</label>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                                <!-- Collections --> 
                                <!-- Prices -->
                                <div class="border-b lg:border-0 lg:mr-3" @mouseover="windowWidth > 1024 ? isVisible.prices=true: null" @mouseleave="windowWidth > 1024 ? isVisible.prices=false:null">
                                    <div @click="showPrices" class="flex items-center justify-between cursor-pointer py-5">
                                        <h2 class="text-sml Century-bold-hover" v-if="$settings.sections.shop.sidebar.prices.active" :class="isVisible.prices==true? 'Century-bold' : ''">{{ $settings.sections.shop.sidebar.prices.title }}</h2>
                                        <svg class="lg:mx-1" :class="isVisible.prices == true ? 'rotate-180 transition-all delay-150 ease-linear':''" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 7.6a.54.54 0 00-.78 0L10 12.21 5.39 7.6a.54.54 0 00-.78 0 .55.55 0 000 .77L10 13.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                    </div>
                                    <transition name="slide">
                                        <div class="bg-white lg:absolute lg:top-full lg:inset-x-0 lg:w-full lg:z-30 lg:px-10" v-if="isVisible.prices">
                                            <div class="pb-5 lg:pt-5 lg:border-t border-gray-300">
                                                <div v-if="loading.filters" class="flex justify-center items-center my-5">
                                                    <si-loader></si-loader>
                                                </div>
                                                <div v-if="$settings.sections.shop.sidebar.prices.active && filters" class="flex flex-col" dir="ltr">
                                                    <si-price-range @change="setParams" :min="filters.prices.min" :max="filters.prices.max" />
                                                </div>
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                                <!-- Prices -->
                                <!-- Sizes -->
                                <div class="border-b lg:border-0 lg:mr-3" @mouseover="windowWidth > 1024 ? isVisible.sizes=true : null" @mouseleave="windowWidth > 1024 ? isVisible.sizes=false : null">
                                    <div @click="showSizes" class="flex items-center justify-between cursor-pointer py-5">
                                        <h2 class="text-sml Century-bold-hover" v-if="$settings.sections.shop.sidebar.sizes.active" :class="isVisible.sizes==true? 'Century-bold' : ''">{{ $settings.sections.shop.sidebar.sizes.title }}</h2>
                                        <svg class="lg:mx-1" :class="isVisible.sizes == true ? 'rotate-180 transition-all delay-150 ease-linear':''" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 7.6a.54.54 0 00-.78 0L10 12.21 5.39 7.6a.54.54 0 00-.78 0 .55.55 0 000 .77L10 13.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                    </div>
                                    <transition name="slide">
                                        <div class="bg-white lg:absolute lg:top-full lg:inset-x-0 lg:w-full lg:z-30 lg:px-10" v-if="isVisible.sizes">
                                            <!-- <div v-if="$settings.sections.shop.sidebar.sizes.active && loading.filters" class="flex justify-center items-center my-5">
                                                <si-loader></si-loader>
                                            </div> -->
                                            <div class="pb-2 lg:pt-5 lg:border-t border-gray-300">
                                                <div class="flex flex-col" v-if="$settings.sections.shop.sidebar.sizes.active && filters">
                                                    <div class="flex items-center pb-3" v-for="(item, i) in filters.sizes" :key="i" >
                                                        <label class="relative flex items-center cursor-pointer">
                                                            <input hidden type="checkbox" class="absolute top-0 left-0" style="z-index: -1" :checked="params['options.values.value1'] && params['options.values.value1'].indexOf(item.value1) >= 0" :id="item.value1" @change="setParams($event, 'options.values.value1', item.value1)">
                                                            <div class="flex justify-center items-center">
                                                                <svg class="fill-current text-black"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15.05a.54.54 0 01-.39-.16l-4-4a.551.551 0 11.78-.78l3.61 3.61 8.61-8.61a.55.55 0 11.78.78l-9 9a.54.54 0 01-.39.16z" fill="currentColor"></path></svg>
                                                            </div>
                                                            <label class="text-sml cursor-pointer text-hover" :for="item.value1">{{ item.value1 }}</label>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                                <!-- Sizes -->
                                <!-- Colors -->
                                <div class="border-b lg:border-0 lg:mr-3" @mouseover="windowWidth > 1024 ? isVisible.colors=true : null" @mouseleave="windowWidth > 1024 ? isVisible.colors=false: null">
                                    <div @click="showColors" class="flex items-center justify-between cursor-pointer py-5">
                                        <h2 class="text-sml Century-bold-hover" v-if="$settings.sections.shop.sidebar.colors.active" :class="isVisible.colors==true? 'Century-bold' : ''">{{ $settings.sections.shop.sidebar.colors.title }}</h2>
                                        <svg class="lg:mx-1" :class="isVisible.colors == true ? 'rotate-180 transition-all delay-150 ease-linear':''" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 7.6a.54.54 0 00-.78 0L10 12.21 5.39 7.6a.54.54 0 00-.78 0 .55.55 0 000 .77L10 13.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                    </div>
                                    <transition name="slide">
                                        <div class="bg-white lg:absolute lg:top-full lg:inset-x-0 lg:w-full lg:z-30 lg:px-10" v-if="isVisible.colors">
                                            <div v-if="$settings.sections.shop.sidebar.colors.active && loading.filters" class="flex justify-center items-center my-5">
                                                <si-loader></si-loader>
                                            </div>
                                            <!--  -->
                                            <div class="pb-2 lg:pt-5 lg:border-t border-gray-300">
                                                <div class="flex flex-col" v-if="$settings.sections.shop.sidebar.colors.active && filters" >
                                                    <div class="flex items-center pb-3" v-for="(item, i) in filters.colors" :key="i" :class="params['options.values.value1'] && params['options.values.value1'].indexOf(item.value1) >= 0 ? 'active' : '' ">
                                                        <label class="relative flex items-center cursor-pointer">
                                                            <input hidden type="checkbox" class="absolute top-0 left-0" style="z-index: -1" :id="item.value1" :checked="params['options.values.value1'] && params['options.values.value1'].indexOf(item.value1) >= 0" @change="setParams($event, 'options.values.value1', item.value1)">
                                                            <div class="flex justify-center items-center">
                                                                <svg class="fill-current text-black"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15.05a.54.54 0 01-.39-.16l-4-4a.551.551 0 11.78-.78l3.61 3.61 8.61-8.61a.55.55 0 11.78.78l-9 9a.54.54 0 01-.39.16z" fill="currentColor"></path></svg>
                                                            </div>
                                                            <label class="cursor-pointer text-sml text-hover" :for="item.value1" :aria-label="item.value1">{{ item.value1 }}</label>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                                <!-- Colors -->
                                <!-- tags -->
                                <div class="border-b lg:border-0 lg:mr-3" @mouseover="windowWidth > 1024 ? isVisible.tags=true: null" @mouseleave="windowWidth > 1024 ? isVisible.tags=false:null">
                                    <div @click="showTags" class="flex items-center justify-between cursor-pointer py-5">
                                        <h2 class="text-sml Century-bold-hover" v-if="$settings.sections.shop.sidebar.tags.active" :class="isVisible.tags==true? 'Century-bold' : ''">{{ $settings.sections.shop.sidebar.tags.title }}</h2>
                                        <svg class="lg:mx-1" :class="isVisible.tags == true ? 'rotate-180 transition-all delay-150 ease-linear':''" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 7.6a.54.54 0 00-.78 0L10 12.21 5.39 7.6a.54.54 0 00-.78 0 .55.55 0 000 .77L10 13.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                    </div>
                                    <div class="bg-white lg:absolute lg:top-full lg:inset-x-0 lg:w-full lg:z-30 lg:px-10" v-if="isVisible.tags">
                                        <div v-if="$settings.sections.shop.sidebar.tags.active && loading.filters" class="flex justify-center items-center my-5">
                                            <si-loader></si-loader>
                                        </div>
                                        <div  class="pb-2 lg:pt-5 lg:border-t border-gray-300">
                                            <div class="flex flex-col" v-if="$settings.sections.shop.sidebar.tags.active && filters">
                                                <div class="flex items-center pb-3" v-for="(tag, i) in filters.tags" :key="i">
                                                    <label class="relative flex items-center cursor-pointer">
                                                        <input hidden type="checkbox" class="absolute top-0 left-0" style="z-index: -1" :checked="params['tags-in'] && params['tags-in'].indexOf(tag) >= 0" :id="`tag_${tag}`" @change="setParams($event, 'tags-in', tag)">
                                                        <div class="flex justify-center items-center">
                                                            <svg class="fill-current text-black"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15.05a.54.54 0 01-.39-.16l-4-4a.551.551 0 11.78-.78l3.61 3.61 8.61-8.61a.55.55 0 11.78.78l-9 9a.54.54 0 01-.39.16z" fill="currentColor"></path></svg>
                                                        </div>
                                                        <label class="cursor-pointer text-sml text-hover" :for="`tag_${tag}`">{{ tag }}</label>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- tags -->
                                <!-- brands -->
                                <div class="border-b lg:border-0 lg:mr-3" @mouseover="windowWidth > 1024 ? isVisible.brands=true : null" @mouseleave="windowWidth > 1024 ? isVisible.brands=false : null">
                                    <div @click="showBrands" class="flex items-center justify-between cursor-pointer py-5">
                                        <h2 class="text-sml Century-bold-hover" v-if="$settings.sections.shop.sidebar.brands.active" :class="isVisible.brands==true? 'Century-bold' : ''">{{ $settings.sections.shop.sidebar.brands.title }}</h2>
                                        <svg class="lg:mx-1" :class="isVisible.brands == true ? 'rotate-180 transition-all delay-150 ease-linear':''" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 7.6a.54.54 0 00-.78 0L10 12.21 5.39 7.6a.54.54 0 00-.78 0 .55.55 0 000 .77L10 13.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                    </div>
                                    <transition name="slide">
                                        <div class="bg-white lg:absolute lg:top-full lg:inset-x-0 lg:w-full lg:z-30 lg:px-10" v-if="isVisible.brands">
                                            <div class="flex flex-col">
                                                <div v-if="$settings.sections.shop.sidebar.brands.active && loading.brands" class="flex justify-center items-center my-5">
                                                    <si-loader></si-loader>
                                                </div>
                                                <div class="pb-2 lg:pt-5 lg:border-t border-gray-300">
                                                    <div class="flex flex-col" v-if="$settings.sections.shop.sidebar.brands.active">
                                                        <div class="flex items-center pb-3" v-for="(item, i) in brands" :key="i">
                                                            <label class="relative flex items-center cursor-pointer">
                                                                <input hidden    type="checkbox" class="absolute top-0 left-0" style="z-index: -1" :id="item.slug" :checked="params['brand.slug-in'] && params['brand.slug-in'].indexOf(item.slug) >= 0" @change="setParams($event, 'brand.slug-in', item.slug)">
                                                                <div class="flex justify-center items-center">
                                                                    <svg class="fill-current text-black"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15.05a.54.54 0 01-.39-.16l-4-4a.551.551 0 11.78-.78l3.61 3.61 8.61-8.61a.55.55 0 11.78.78l-9 9a.54.54 0 01-.39.16z" fill="currentColor"></path></svg>
                                                                </div>
                                                                <label class="cursor-pointer text-sml text-hover" :for="item.slug">{{ item.name }}</label>
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
                            <div @click="showBodyScroll">
                                <div @click="showSideBar=false" class="lg:hidden bg-black py-5 px-8 mx-5 rounded-full cursor-pointer click-effect Century-bold-hover my-5">
                                    <div class="flex items-center justify-center text-sml text-white">
                                        <span> See The <span>{{ items.length }} Product(s)</span></span>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </transition>
                    <div class="w-full lg:w-auto flex items-center justify-between mx-5 lg:mx-10">
                        <!--  -->
                        <div class="text-sml primary-text py-5">
                            <span>{{ items.length }} Article</span>
                        </div>
                        <!--  -->
                        <!--  -->
                        <div class="w-6 hidden lg:flex items-center justify-center">
                            <div style="width: 0.5px;" class="h-3 bg-black"></div>
                        </div>
                        <!--  -->
                        <!--  -->
                        <div class="flex items-center">
                            <!-- filters -->
                            <div @click="hideBodyScroll">
                                <div @click="showSideBar = true" class="flex lg:hidden items-center cursor-pointer mr-4">
                                    <h2 class="text-sml Century-bold-hover underline">All Filters</h2>
                                </div>
                            </div>
                            <!-- filters -->
                            <!-- Sort -->
                            <div class="border-b lg:border-0" @mouseover="windowWidth > 1024 ? isVisible.sort=true : null" @mouseleave="windowWidth > 1024 ? isVisible.sort=false : null">
                                <div @click="showSort" class="flex items-center justify-between cursor-pointer py-5">
                                    <h2 class="text-sml Century-bold-hover" :class="isVisible.sort==true? 'Century-bold' : ''">Sort By</h2>
                                    <svg class="lg:mx-1" :class="isVisible.sort == true ? 'rotate-180 transition-all delay-150 ease-linear':''" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 7.6a.54.54 0 00-.78 0L10 12.21 5.39 7.6a.54.54 0 00-.78 0 .55.55 0 000 .77L10 13.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                </div>
                                <transition name="slide">
                                    <div class="bg-white fixed lg:absolute w-full h-full lg:h-auto inset-0 lg:top-full lg:inset-y-auto lg:bottom-auto z-50 overflow-x-scroll lg:overflow-auto lg:px-10" v-if="isVisible.sort">
                                        <div class="flex flex-col">

                                            <div class="flex items-center justify-between py-5 lg:hidden border-b lg:border-0 px-5">
                                                <h2 class="text-sml Century-bold">SORT BY</h2>
                                                <div @click="showBodyScroll">
                                                    <button @click="isVisible.sort=false">
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.71 10l4.65-4.66a.495.495 0 10-.7-.7L10 9.29 5.34 4.64a.495.495 0 00-.7.7L9.29 10l-4.65 4.66a.48.48 0 000 .7.481.481 0 00.7 0L10 10.71l4.66 4.65a.482.482 0 00.7 0 .48.48 0 000-.7L10.71 10z" fill="currentColor"></path></svg>
                                                    </button>
                                                </div>
                                            </div>

                                            <div class="pb-2 lg:pt-5 lg:border-t border-gray-300 px-5 lg:px-0">
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

                                            <div @click="showBodyScroll">
                                                <div @click="isVisible.sort=false" class="lg:hidden bg-black py-5 px-8 mx-5 rounded-full cursor-pointer click-effect Century-bold-hover my-5">
                                                    <div class="flex items-center justify-center text-sml text-white">
                                                        <span> See The <span>{{ items.length }} Product(s)</span></span>
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
            <div class="w-full">
                <div class="bg-white">
                    <div class="border-b lg:border-0">
                        <div class="flex justify-between items-center p-2">
                            <!-- <button @click="showSideBar = true" aria-label="Search button" class="flex block md:hidden items-center flex-col p-2 bg-gray-100 rounded-md mx-1 hover:bg-gray-200">
                                <span class="w-6 my-0.5 h-0.5 bg-gray-800"></span>
                                <span class="w-4 my-0.5 h-0.5 bg-gray-800"></span>
                                <span class="w-2 my-0.5 h-0.5 bg-gray-800"></span>
                                <span class="w-1 my-0.5 h-0.5 bg-gray-800"></span>
                            </button>
                            <select class="bg-white p-2 rounded shadow outline-none" v-model="params.sort">
                                <option v-for="(sort,i) in sorts" :key="i" :value="sort.field">{{ sort.name }}</option>
                            </select>
                            <div class="flex">
                                <button v-for="(grid,i) in girds" :key="i" @click="gridClass=grid.class" class="flex flex-wrap mx-0.5" :style="`width:${grid.width}px`">
                                    <span v-for="i in grid.number" :key="i" class="flex" :class="grid.class == gridClass ? 'bg-primary':'bg-gray-300'" style="margin:1px;width:4px;height:4px" ></span>
                                </button>
                            </div> -->
                        </div>
                    </div>
                    <div v-if="loading.products" class="flex justify-center items-center my-5">
                        <si-loader></si-loader>
                    </div>
                    <div v-if="!loading.products && items.length == 0" class="flex justify-center items-center my-5">
                        <h1 class="py-3">{{ $settings.sections.shop.empty_text }}</h1>
                    </div>
                    <div class="flex flex-wrap">
                        <div v-for="(item, i) in items" :key="i" class="p-2" :class="gridClass">
                            <si-product :item="item"></si-product>
                        </div>
                    </div>
                    <div v-if="items.length>0" class="p-2 bg-white border-b lg:border-0 items-center flex justify-end w-full">
                        <button class=" bg-primary p-2 flex items-center text-white" @click="getItems(paginate.current_page-1)">
                            <svg class="h-4 translate" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                            <span>&ensp;</span>
                            <span>{{ $settings.sections.shop.pagination.prev_text }}</span>
                        </button>
                        <span>&ensp;</span>
                        <span>{{paginate.current_page}}/{{paginate.last_page}}</span>
                        <span>&ensp;</span>
                        <button class=" bg-primary p-2 flex items-center text-white" @click="getItems(paginate.current_page+1)">
                            <span>{{ $settings.sections.shop.pagination.next_text }}</span>
                            <span>&ensp;</span>
                            <svg class="h-4 translate" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>
</template>
<script>
export default {
    data() {
        return {
            windowWidth: 0,
            showSideBar: false,
            isVisible : {
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
            gridClass: 'w-full md:w-1/2 lg:w-1/3',
            items: [],
            collections:[],
            brands: [],
            paginate: { page: 1, limit: this.$settings.sections.shop.pagination.limit, total: 12 },
            params: { page: 1, search: this.$route.query.search, limit: this.$settings.sections.shop.pagination.limit, 'collections.slug-in': [], sort: { createdAt: -1 } },
            lastParams: { page: 1, search: this.$route.query.search, limit: this.$settings.sections.shop.pagination.limit, 'collections.slug-in': [], sort: { createdAt: -1 } },
            sorts: [
                { field: { 'price.salePrice': 1 }, name: this.$settings.sections.shop.sorts.price_asc },
                { field: { 'price.salePrice': -1 }, name: this.$settings.sections.shop.sorts.price_desc },
                { field: { 'review.rating': -1 }, name: this.$settings.sections.shop.sorts.rating_desc },
                { field: { 'review.rating': 1 }, name: this.$settings.sections.shop.sorts.rating_asc },
                { field: { 'name': 1 }, name: this.$settings.sections.shop.sorts.name_asc },
                { field: { 'name': -1 }, name: this.$settings.sections.shop.sorts.name_desc },
                { field: { createdAt: -1 }, name: this.$settings.sections.shop.sorts.newest },
                { field: { createdAt: 1 }, name: this.$settings.sections.shop.sorts.oldest }
            ],
            girds: [
                { number: 6, width: 16, class: 'w-full md:w-1/2 lg:w-1/2' },
                { number: 9, width: 21, class: 'w-full md:w-1/2 lg:w-1/3' },
                { number: 12, width: 26, class: 'w-1/2 md:w-1/3 lg:w-1/4' }
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
        },
        "$route.query.search"(val){
            this.$set(this.params, 'search', val);
        }
    },
    async fetch(){
        this.$store.state.seo.title = this.$settings.sections.shop.title + ' - ' + this.$settings.store_name;
        this.$store.state.seo.description = this.$settings.sections.shop.description || this.$settings.store_description;
        if(this.$route.params.slug){
            this.param = this.$route.params.slug.split(',');
            this.$route.params.slug.split(',').forEach(item => {
                this.params['collections.slug-in'].push(item);
            });
        }
        for (const key in this.$route.query) {
            if(!this.$route.query[key]) continue;
            switch (key) {
                case 'price-from': this.$set(this.params, 'price.salePrice-from', this.$route.query[key]);break;
                case 'price-to': this.$set(this.params, 'price.salePrice-to', this.$route.query[key]);break;
                case 'colors-size': this.$set(this.params, 'options.values.value1', this.$route.query[key].split(','));break;
                case 'tags': this.$set(this.params, 'tags-in', this.$route.query[key].split(','));break;
                case 'brands': this.$set(this.params, 'brand.slug-in', this.$route.query[key].split(','));break;
                case 'page': this.$set(this.params, 'page', this.$route.query[key]);break;
            }
        }
        this.lastParams = this.params;
        await this.getFilters();
        await this.getItems();
        await this.getCollections();
        await this.getBrands();
        this.subCollections();
    },
    mounted() {
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
                document.body.style.overflow = 'hidden';
        },
        showBodyScroll() {
            document.body.style.overflow = 'scroll';
        },
        subCollections(){
            console.log('collections items ====>', this.collections);
            for(let itm of this.collections){
                if(itm.childrens && itm.childrens.length>0) itm.childrens = [];
            }
            for(let i=0; i<this.collections.length; i++){
                for(let j=0; j<this.collections.length; j++){ 
                    if(this.collections[i].parent == this.collections[j]._id ){
                    console.log('this item _____',this.collections[i]);
                    let childObject = this.collections[i];
                    this.collections[j].childrens.push(childObject);
                    this.collections.splice(i,1);
                        i--;
                    }
                }
            }
            console.log('items childrens is vide _______',this.collections);
        },
        setActive:function(id,idRet){
            var element = document.getElementById(id);
            if(element.classList.contains('active')){
                element.classList.remove('active');
            }else{
                element.classList.add('active');
            }
            var icon = document.getElementById(idRet);
            if(icon.classList.contains('active')){
                icon.classList.remove('active');
            }else{
                icon.classList.add('active');
            }
        },
        setParams(e, key, value){
            if(key.indexOf('price') >= 0 || key.indexOf('page') >= 0){
                this.$set(this.params,key, e.target.value);
                return false;
            }else{
                if(e.target.checked) {
                    if(!this.params[key]) this.params[key] = this.$set(this.params, key, []);
                    this.params[key].push(value);
                } else {
                    this.params[key] = this.params[key].filter(item => item !== value);
                }
            }
            for (const key in this.params) {
                switch(key){
                    case 'collections.slug-in': this.param = this.params[key];break;
                    case 'price.salePrice-from': this.query['price-from'] = this.params[key];break;
                    case 'price.salePrice-to': this.query['price-to'] = this.params[key];break;
                    case 'options.values.value1': this.query['colors-size'] = this.params[key];break;
                    case 'tags-in': this.query['tags'] = this.params[key];break;
                    case 'brand.slug-in': this.query['brands'] = this.params[key];break;
                    case 'page': this.query['page'] = [this.params[key]];break;
                }
            }
            let url = `/shop/`;
            url += this.param.length > 0 ? [...new Set(this.param)].join(',') : '';
            for (const key in this.query) {
                url += url.indexOf('?') == -1 ? '?' : '&';
                if(typeof this.query[key] == 'object'){
                    url += `${key}=${this.query[key].join(',')}`;
                }else url += `${key}=${this.query[key]}`;
            }
            window.history.pushState({}, '', url);
        },
        async getFilters(){
            this.filters = null;
            this.loading.filters = true;
            try{
                const { data } = await this.$storeino.products.filters({});
                this.filters = data;
            }catch(e){
                console.log({e});
            }
            this.loading.filters = false;
        },
        async getCollections(){
            this.collections = [];
            this.loading.collections = true;
            try{
                const { data } = await this.$storeino.collections.search({});
                this.collections = data.results;
            }catch(e){
                console.log({e});
            }
            this.loading.collections = false;
        },
        async getBrands(){
            this.brands = [];
            this.loading.brands = true;
            try{
                const { data } = await this.$storeino.brands.search({});
                this.brands = data.results;
            }catch(e){
                console.log({e});
            }
            this.loading.brands = false;
        },
        async getItems(page=null){
            if(page != null) this.setParams({target:{value: page}}, 'page', page);
            this.items = [];
            this.loading.products = true;
            try{
                this.params.search = this.$route.query.search;
                this.params.page = page || this.paginate.current_page;
                this.params.limit = this.$settings.sections.shop.pagination.limit;
                this.lastParams = this.$tools.copy(this.params);
                const {data} = await this.$storeino.products.search(this.params);
                this.items = data.results;
                this.paginate = data.paginate;
            }catch(e){
                console.log({e});
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
<style>
/* Media screen mobile */
@media (max-width: 1024px){
    .show {
        display: block !important;
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


.fit-collapsible{
    overflow: unset;
    text-align: left;
    display: block;
    margin: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: 0 0;
  }

    .fit-collapsible .fit-collapsible-content{
    max-height: 0;
    position: relative;
    overflow: hidden;
    transition: 0.4s;
    }

    .fit-collapsible.active .fit-collapsible-content{
    max-height: 500px;
    }

  .rotated{
    transition: all 0.3s ease-in-out;
  }

  .rotated.active{
    transform: rotate(180deg);
  }

</style>


