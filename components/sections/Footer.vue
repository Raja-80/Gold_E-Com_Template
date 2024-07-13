<template>
    <div class="">
        <si-app-loader placement="BEFORE_FOOTER" />
        <div class="border-gray-300 lg:border-t w-full ">
            <!-- Start footer Section -->
            <footer class="footer footer-color w-full footer-text lg:px-7 lg:py-10">
                <div class="lg:mx-5 flex lg:flex-wrap lg:flex-row flex-col justify-between w-full">
                    <!-- About  -->
                    <div class="lg:w-2/4 w-full px-5 lg:px-3">
                        <!-- about -->
                        <div class=" py-6 about lg:py-0 lg:px-0">
                            <div @click="showContent"
                                class="flex items-center justify-between transition-all ease-in-out delay-150 cursor-pointer lg:cursor-auto">
                                <h2 class="ml-font-bold text-lg">{{ title }}</h2>
                                <!-- <span class="lg:hidden"
                                    :class="[isVisible.Content ? 'rotate-45 transition-all delay-150 ease-linear' : '']">
                                    <svg aria-label="chivron icon" width="20" height="20" viewBox="0 0 20 20"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15.5 9.4h-4.9V4.5a.6.6 0 10-1.2 0v4.9H4.5a.6.6 0 000 1.2h4.9v4.9a.6.6 0 001.2 0v-4.9h4.9a.6.6 0 100-1.2z"
                                            fill="currentColor"></path>
                                    </svg>
                                </span> -->
                            </div>
                            <!-- Store title -->
                            <transition name="slide">
                                <div class="mt-8 lg:block">
                                    <!-- Footer About -->
                                    <div v-if="footer.about" class=" text-md-responsive">{{ footer.about }}
                                    </div>
                                    <!-- Footer About -->
                                    <!-- Contacts  -->
                                    <div class="flex flex-col contacts">
                                        <span v-if="footer.location" class="mt-5 dfasfs text-sml text-md-responsive ">
                                            <a class="link-hover" :href="footer.location_link">{{ footer.location }}</a>
                                        </span>
                                        <span v-if="footer.gmail" class="mt-5 text-sml text-md-responsive ">
                                            <a class="link-hover" :href="'mail:' + footer.gmail">{{ footer.gmail }}</a>
                                        </span>
                                        <span v-if="footer.number" class="mt-5 text-sml text-md-responsive ">
                                            <a class="link-hover" :href="'tel:' + footer.number">{{ footer.number }}</a>
                                        </span>
                                    </div>
                                    <!-- Contacts  -->
                                </div>
                            </transition>
                            {{ $settings.sections.footer.social_media.length }}
                            <!-- Contacts  -->
                        </div>
                        <!-- about -->

                    </div>
                    <!-- About -->
                    <!-- menu1 -->
                    <div v-if="menu1 && menus.menu1_active" class="lg:w-1/4 w-full py-6 px-5 menu1 lg:py-0 lg:px-3"
                        :class="menus.menu1_active && menus.menu2_active ? 'lg:w-1/4' : 'lg:w-1/3'">
                        <div
                            class="flex items-center justify-between transition-all ease-in-out delay-150 cursor-pointer lg:cursor-auto">
                            <h4 class="ml-font-bold text-sml">{{ menus.menu1_title }}</h4>
                        </div>
                        <!-- Header Menu -->
                        <transition name="slide">
                            <div>
                                <div v-if="menu1">
                                    <div class="flex flex-col mt-2 menus-text" v-for="(item, i) in menu1.items"
                                        :key="i">
                                        <div @click="active.Id1 = active.Id1 != item._id ? item._id : null"
                                            :class="item.childrens.length > 0 ? 'primary-hover cursor-pointer' : ''"
                                            class="flex items-center justify-between">
                                            <router-link class="text-sml link-hover" :to="item.url">
                                                {{ item.text }}
                                            </router-link>
                                            <span class="flex justify-center w-5 lg:justify-end"
                                                v-if="item.childrens && item.childrens.length > 0">
                                                <svg aria-label="chivron icon" width="12" height="7"
                                                    :class="[active.Id1 == item._id ? 'rotate-180 transition-all delay-150 ease-linear' : '']"
                                                    viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.39.6a.54.54 0 00-.78 0L6 5.21 1.39.6a.54.54 0 00-.78 0 .55.55 0 000 .77L6 6.76l5.39-5.39a.55.55 0 000-.77z"
                                                        fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <transition name="slide">
                                            <div v-if="item._id == active.Id1">
                                                <div class="mt-5" v-for="(item, i) in item.childrens" :key="i">
                                                    <router-link class="text-sml link-hover text-primary"
                                                        :to="item.url">
                                                        {{ item.text }}
                                                    </router-link>
                                                </div>
                                            </div>
                                        </transition>
                                    </div>
                                </div>
                            </div>
                        </transition>
                        <!-- Header Menu -->
                    </div>
                    <!-- menu1  -->
                    <!-- menu2 -->
                    <div v-if="menu2 && menus.menu2_active" class="lg:w-1/4 w-full px-5 py-6 menu2 lg:py-0 lg:px-3"
                        :class="menus.menu1_active && menus.menu2_active ? 'lg:w-1/4' : 'lg:w-1/3'">
                        <div
                            class="flex items-center justify-between transition-all ease-in-out delay-150 cursor-pointer lg:cursor-auto">
                            <h4 class="ml-font-bold text-sml">{{ menus.menu2_title }}</h4>
                        </div>
                        <!-- Header Menu -->
                        <transition name="slide">
                            <div>
                                <div v-if="menu2">
                                    <div class="flex flex-col mt-2 menus-text" v-for="(item, i) in menu2.items"
                                        :key="i">
                                        <div @click="active.Id2 = active.Id2 != item._id ? item._id : null"
                                            :class="item.childrens.length > 0 ? 'primary-hover cursor-pointer' : ''"
                                            class="flex items-center justify-between">
                                            <router-link class="text-sml link-hover" :to="item.url">
                                                {{ item.text }}
                                            </router-link>
                                            <span class="flex justify-center w-5 lg:justify-end"
                                                v-if="item.childrens && item.childrens.length > 0">
                                                <svg aria-label="chivron icon" width="12" height="7"
                                                    :class="[active.Id2 == item._id ? 'rotate-180 transition-all delay-150 ease-linear' : '']"
                                                    viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.39.6a.54.54 0 00-.78 0L6 5.21 1.39.6a.54.54 0 00-.78 0 .55.55 0 000 .77L6 6.76l5.39-5.39a.55.55 0 000-.77z"
                                                        fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <transition name="slide">
                                            <div class="" v-if="item._id == active.Id2">
                                                <div class="mt-5" v-for="(item, i) in item.childrens" :key="i">
                                                    <router-link class="text-sml link-hover text-primary"
                                                        :to="item.url">
                                                        {{ item.text }}
                                                    </router-link>
                                                </div>
                                            </div>
                                        </transition>
                                    </div>
                                </div>
                            </div>
                        </transition>
                        <!-- Header Menu -->
                    </div>
                    <!-- menu2  -->

                </div>

                <!-- courency and language dropdown  -->
                <div class="flex lg:flex-row flex-col lg:justify-between justify-start lg:items-center items-start w-full lg:px-3 lg:mx-5 lg:mt-12 mt-6">
                    
                    <div class="lg:w-2/3 w-1/2 flex lg:flex-row flex-col justify-start lg:items-center items-start">
                        <!-- Lang -->
                        <div v-if="$settings.sections.footer.icons.language" class="lg:w-1/5 w-full lg:mr-12 px-5 py-6 lang lg:py-0 lg:px-0">
                            <div v-for="(item, i) in langMenu" :key="i" class="flex flex-col">

                                <transition name="slide">
                                    <div>
                                        <div class="lg:mt-0 mt-8 "
                                            @click="active.Id3 = active.Id3 != item._id ? item._id : null"
                                            :class="item.childrens.length > 0 ? 'primary-hover cursor-pointer' : ''">
                                            <div class="flex items-center justify-between">
                                                <div class="flex flex-row items-center justify-start">
                                                    <div class="mr-8 rounded-full bg-black" v-if="item.childrens && item.childrens.length > 0"
                                                        :class="[active.Id3 == item._id ? 'rotate-0 transition-all delay-150 ease-linear' : '']">
                                                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.58 19.37L17.59 11.01C17.38 10.46 16.91 10.12 16.37 10.12C15.83 10.12 15.37 10.46 15.14 11.03L12.16 19.37C12.02 19.76 12.22 20.19 12.61 20.33C13 20.47 13.43 20.27 13.57 19.88L14.19 18.15H18.54L19.16 19.88C19.27 20.19 19.56 20.38 19.87 20.38C19.95 20.38 20.04 20.37 20.12 20.34C20.51 20.2 20.71 19.77 20.57 19.38L20.58 19.37ZM14.74 16.64L16.38 12.05L18.02 16.64H14.74ZM12.19 7.85C9.92999 11.42 7.89 13.58 5.41 15.02C5.29 15.09 5.16 15.12 5.04 15.12C4.78 15.12 4.53 14.99 4.39 14.75C4.18 14.39 4.3 13.93 4.66 13.73C6.75999 12.51 8.48 10.76 10.41 7.86H4.12C3.71 7.86 3.37 7.52 3.37 7.11C3.37 6.7 3.71 6.36 4.12 6.36H7.87V4.38C7.87 3.97 8.21 3.63 8.62 3.63C9.02999 3.63 9.37 3.97 9.37 4.38V6.36H13.12C13.53 6.36 13.87 6.7 13.87 7.11C13.87 7.52 13.53 7.86 13.12 7.86H12.18L12.19 7.85ZM12.23 15.12C12.1 15.12 11.97 15.09 11.85 15.02C11.2 14.64 10.57 14.22 9.97999 13.78C9.64999 13.53 9.58 13.06 9.83 12.73C10.08 12.4 10.55 12.33 10.88 12.58C11.42 12.99 12.01 13.37 12.61 13.72C12.97 13.93 13.09 14.39 12.88 14.75C12.74 14.99 12.49 15.12 12.23 15.12Z"
                                                                fill="white" />
                                                        </svg>
                                                    </div>
                                                    <div class="text-sml mx-2">{{ item.text }}</div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <transition name="slide">
                                            <div v-if="item._id == active.Id3" class="relative">
                                                <div
                                                    class="absolute left-0 right-0 z-10 h-56 px-6 py-3 overflow-auto bg-white border border-gray-200 footer-color footer-text bottom-6">
                                                    <div class="pb-1" v-for="(item, i) in item.childrens" :key="i">
                                                        <a class="text-sml link-hover" :href="item.url">{{ item.text
                                                            }}</a>
                                                        <div v-if="item.childrens && item.childrens.length > 0">
                                                            <div class="px-2 pt-1" v-for="(child, ii) in item.childrens"
                                                                :key="ii">
                                                                <a :href="child.url">
                                                                    <span class="text-sml link-hover"> > {{ child.text
                                                                        }}</span>
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
                        <div v-if="$settings.sections.footer.icons.currency" class="lg:w-1/5 w-full px-5 py-6 Curr lg:py-0 lg:px-0">
                            <div v-for="(item, i) in currMenu" :key="i" class="flex flex-col">
                                <!-- {{ item }} -->
                                <transition name="slide">
                                    <div>
                                        <div class="lg:mt-0 mt-8 "
                                            @click="active.Id3 = active.Id3 != item._id ? item._id : null"
                                            :class="item.childrens.length > 0 ? 'primary-hover cursor-pointer' : ''">
                                            <div class="flex items-center justify-between">
                                                <div class="flex flex-row items-center justify-start">
                                                    <div class="mr-8 rounded-full bg-black" v-if="item.childrens && item.childrens.length > 0"
                                                        :class="[active.Id3 == item._id ? 'rotate-0 transition-all delay-150 ease-linear' : '']">
                                                        <svg fill="white" height="18" width="18" version="1.1"
                                                            id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                            viewBox="0 0 512 512" xml:space="preserve">
                                                            <g>
                                                                <g>
                                                                    <path
                                                                        d="M490.667,234.667c-12.8,0-21.333,8.533-21.333,21.333c0,117.333-96,213.333-213.333,213.333
			c-12.8,0-21.333,8.533-21.333,21.333S243.2,512,256,512c140.8,0,256-115.2,256-256C512,243.2,503.467,234.667,490.667,234.667z" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C115.2,0,0,115.2,0,256c0,12.8,8.533,21.333,21.333,21.333c12.8,0,21.333-8.533,21.333-21.333
			c0-117.333,96-213.333,213.333-213.333c12.8,0,21.333-8.533,21.333-21.333C277.333,8.533,268.8,0,256,0z" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <path d="M454.4,51.2C439.467,32,413.867,21.333,384,21.333c-44.8,0-85.333,32-85.333,74.667c0,12.8,8.533,21.333,21.333,21.333
			S341.333,108.8,341.333,96c0-17.067,19.2-32,42.667-32c17.067,0,29.867,4.267,36.267,12.8c6.4,8.533,21.333,10.667,29.867,4.267
			C458.667,74.667,460.8,59.733,454.4,51.2z" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <path d="M384,128c-23.467,0-42.667-14.933-42.667-32c0-12.8-8.533-21.333-21.333-21.333S298.667,83.2,298.667,96
			c0,42.667,40.533,74.667,85.333,74.667c23.467,0,42.667,14.933,42.667,32c0,17.067-19.2,32-42.667,32
			c-17.067,0-29.867-4.267-36.267-12.8c-6.4-8.533-21.333-10.667-29.867-4.267c-10.667,8.533-10.667,21.333-4.267,29.867
			c14.933,19.2,40.533,29.867,70.4,29.867c44.8,0,85.333-32,85.333-74.667C469.333,160,428.8,128,384,128z" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <path d="M384,0c-12.8,0-21.333,8.533-21.333,21.333v256c0,12.8,8.533,21.333,21.333,21.333c12.8,0,21.333-8.533,21.333-21.333
			v-256C405.333,8.533,396.8,0,384,0z" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <path d="M181.333,437.333c-12.8,0-21.333,8.533-21.333,21.333c0,8.533-2.133,10.667-10.667,10.667H81.067
			C83.2,460.8,85.333,454.4,85.333,448V320c0-12.8,8.533-21.333,21.333-21.333S128,307.2,128,320s8.533,21.333,21.333,21.333
			c12.8,0,21.333-8.533,21.333-21.333c0-36.267-27.733-64-64-64s-64,27.733-64,64v128c0,2.133-2.133,6.4-4.267,10.667
			c-2.133,6.4-8.533,10.667-17.067,10.667C-6.4,469.333-6.4,512,21.333,512h128c32,0,53.333-21.333,53.333-53.333
			C202.667,445.867,194.133,437.333,181.333,437.333z" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <path d="M106.667,362.667H21.333C8.533,362.667,0,371.2,0,384c0,12.8,8.533,21.333,21.333,21.333h85.333
			c12.8,0,21.333-8.533,21.333-21.333C128,371.2,119.467,362.667,106.667,362.667z" />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="text-sml">{{ item.text }}</div>
                                                </div>
                                                <!-- <span class="flex justify-center w-5 lg:justify-end">
                                                    <svg aria-label="chivron icon" width="12" height="7"
                                                        
                                                        viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M11.39.6a.54.54 0 00-.78 0L6 5.21 1.39.6a.54.54 0 00-.78 0 .55.55 0 000 .77L6 6.76l5.39-5.39a.55.55 0 000-.77z"
                                                            fill="currentColor"></path>
                                                    </svg>
                                                </span> -->
                                            </div>
                                        </div>
                                        <transition name="slide">
                                            <div v-if="item._id == active.Id3" class="relative">
                                                <div
                                                    class="absolute left-0 right-0 z-10 h-56 px-6 py-3 overflow-auto bg-white border border-gray-200 footer-color footer-text bottom-6">
                                                    <div class="pb-1" v-for="(item, i) in item.childrens" :key="i">
                                                        <a class="text-sml link-hover" :href="item.url">{{ item.text
                                                            }}</a>
                                                        <div v-if="item.childrens && item.childrens.length > 0">
                                                            <div class="px-2 pt-1" v-for="(child, ii) in item.childrens"
                                                                :key="ii">
                                                                <a :href="child.url">
                                                                    <span class="text-sml link-hover"> {{ child.text
                                                                        }}</span>
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

                    <!--  Social Media -->
                    <div class="lg:w-1/3 w-full px-5 py-6 mt-0 Social_Media lg:mt-4 lg:py-0 lg:px-0 ">
                        <!-- <div
                            class="flex lg:items-center items-start justify-between transition-all ease-in-out delay-150 cursor-pointer lg:cursor-auto">
                        </div> -->
                        <transition name="slide">
                            <div>
                                <div class="flex flex-wrap flex-row lg:items-center items-start lg:justify-end justify-start">
                                    <div v-for="item in socialMedia.filter(s => $settings.sections.footer.social_media[s.name])"
                                        :key="item.name" class="flex items-center justify-center mt-4 ml-mr-4">
                                        <a class="flex h-full footer-text"
                                            :href="$settings.sections.footer.social_media[item.name]" target="_blank"
                                            rel="noopener noreferrer">
                                            <svg aria-label="social media icons" class="opacity-90" fill-rule="evenodd"
                                                width="25" height="25" :viewBox="item.view" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path :d="item.image" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                    <!--  Social Media  -->

                </div>
                <!-- courency and language dropdown  -->

            </footer>
            <!-- End fotter Section -->
        </div>
        <si-app-loader placement="AFTER_FOOTER" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: {
                Id1: null,
                Id2: null,
                Id3: null,
            },
            isVisible: {
                Content: false,
                Menu1: false,
                Menu2: false,
                Lang: false,
                Curr: false,
                PaymentMethods: false,
                SocialMedia: false,
            },
            windowWidth: 0,
            menus: this.$settings.sections.footer.menus,
            menu1: this.$settings.sections.footer.menus.menu1,
            menu2: this.$settings.sections.footer.menus.menu2,
            footer: this.$settings.sections.footer,
            year: new Date().getFullYear(),
            title: this.$settings.sections.footer.copyright.store_name,
            methods: [
                {
                    name: 'visa',
                    image: 'M15.854 11.329l-2.003 9.367h-2.424l2.006-9.367zM26.051 17.377l1.275-3.518 0.735 3.518zM28.754 20.696h2.242l-1.956-9.367h-2.069c-0.003-0-0.007-0-0.010-0-0.459 0-0.853 0.281-1.019 0.68l-0.003 0.007-3.635 8.68h2.544l0.506-1.4h3.109zM22.429 17.638c0.010-2.473-3.419-2.609-3.395-3.714 0.008-0.336 0.327-0.694 1.027-0.785 0.13-0.013 0.28-0.021 0.432-0.021 0.711 0 1.385 0.162 1.985 0.452l-0.027-0.012 0.425-1.987c-0.673-0.261-1.452-0.413-2.266-0.416h-0.001c-2.396 0-4.081 1.275-4.096 3.098-0.015 1.348 1.203 2.099 2.122 2.549 0.945 0.459 1.262 0.754 1.257 1.163-0.006 0.63-0.752 0.906-1.45 0.917-0.032 0.001-0.071 0.001-0.109 0.001-0.871 0-1.691-0.219-2.407-0.606l0.027 0.013-0.439 2.052c0.786 0.315 1.697 0.497 2.651 0.497 0.015 0 0.030-0 0.045-0h-0.002c2.546 0 4.211-1.257 4.22-3.204zM12.391 11.329l-3.926 9.367h-2.562l-1.932-7.477c-0.037-0.364-0.26-0.668-0.57-0.82l-0.006-0.003c-0.688-0.338-1.488-0.613-2.325-0.786l-0.066-0.011 0.058-0.271h4.124c0 0 0.001 0 0.001 0 0.562 0 1.028 0.411 1.115 0.948l0.001 0.006 1.021 5.421 2.522-6.376z',
                    view: '0 0 32 32'
                },
                {
                    name: 'mastercard',
                    image: 'M15.26465,5.27441a6.68141,6.68141,0,0,0-3.27295.85505,6.72754,6.72754,0,1,0,0,11.745,6.72551,6.72551,0,1,0,3.27295-12.6ZM10.23712,16.457a4.66714,4.66714,0,0,1-1.51837.27252,4.72754,4.72754,0,0,1,0-9.45508,4.66688,4.66688,0,0,1,1.51837.27253,6.68737,6.68737,0,0,0,0,8.91ZM11.9917,15.3996a4.69542,4.69542,0,0,1,0-6.79529,4.69542,4.69542,0,0,1,0,6.79529Zm3.27295,1.32989a4.66709,4.66709,0,0,1-1.51837-.27252,6.68737,6.68737,0,0,0,0-8.91,4.66683,4.66683,0,0,1,1.51837-.27253,4.72754,4.72754,0,0,1,0,9.45508Z',
                    view: '0 0 24 24'
                },
                {
                    name: 'transfer',
                    image: 'M0,29.94L28.91,9.43l29.06,20.51H0L0,29.94z M25.7,76.13l18.46-4.73l-3.47,5.79 c6.37,5.86,13.11,7.64,20.79,4.72c-7.57,10.93-18.63,11.76-27.71,6.83l-3.54,5.9L25.7,76.13L25.7,76.13L25.7,76.13L25.7,76.13z M64.9,47.08l28.91-20.51l29.06,20.51H64.9L64.9,47.08z M66.66,80.61v-6.72h1.99l1.9-1.49V54.53h-3.88v-4.28h54.29v4.28h-3.87V72.4 l1.9,1.49h2.03v6.72H66.66L66.66,80.61z M79.59,73.88h2.19l1.9-1.49V54.53h-5.98V72.4L79.59,73.88L79.59,73.88L79.59,73.88z M92.72,73.88h2.19l1.9-1.49V54.53h-5.98V72.4L92.72,73.88L92.72,73.88L92.72,73.88z M105.85,73.88h2.19l1.9-1.49V54.53h-5.98V72.4 L105.85,73.88L105.85,73.88L105.85,73.88z M85.98,18.71L67.3,22.53l3.75-5.61c-6.08-6.17-12.72-8.28-20.53-5.74 c8.1-10.54,19.19-10.83,28.01-5.45L82.35,0L85.98,18.71L85.98,18.71L85.98,18.71L85.98,18.71z M1.76,63.47v-6.72h1.99l1.9-1.49 V37.39H1.77v-4.28h54.29v4.28h-3.87v17.86l1.9,1.49h2.03v6.72H1.76L1.76,63.47z M14.69,56.74h2.19l1.9-1.49V37.39h-5.98v17.86 L14.69,56.74L14.69,56.74L14.69,56.74z M27.82,56.74h2.19l1.9-1.49V37.39h-5.98v17.86L27.82,56.74L27.82,56.74L27.82,56.74z M40.95,56.74h2.19l1.9-1.49V37.39h-5.98v17.86L40.95,56.74L40.95,56.74L40.95,56.74z',
                    view: '0 0 122.88 94.64'
                },
                {
                    name: 'paypal',
                    image: 'M 60.1667,29.2917C 60.1667,36.7245 53.7867,45.9167 45.9167,45.9167L 33.8894,45.9167L 30.875,60.1667L 19.7917,60.1667L 20.3778,57.3958L 28.8958,57.3958L 31.9103,43.1458L 43.9375,43.1458C 51.8076,43.1458 58.1875,33.9536 58.1875,26.5208C 58.1875,24.9629 57.9072,23.606 57.3917,22.4342C 59.1358,24.0552 60.1667,26.3039 60.1667,29.2917 Z M 23.75,14.25L 41.1667,14.25L 42.75,14.25L 42.75,14.2902C 49.8749,14.66 55.4167,19 55.4167,24.5417C 55.4167,33.25 49.0367,41.1667 41.1667,41.1667L 29.5352,41.1667L 26.5208,55.4167L 15.0417,55.4167L 23.75,14.25 Z M 44.7292,26.9167C 44.5447,24.7031 43.3967,23.5626 41.5809,22.9583L 33.387,22.9584L 31.0425,34.0417L 37.2032,34.0417C 41.8973,32.6131 44.7292,29.5115 44.7292,26.9167 Z ',
                    view: '0 0 76 76'
                },
                {
                    name: 'cash',
                    image: 'M12.08,12V58.81H93.46L93.33,42a31.77,31.77,0,0,0-8.25,1.12v1.5a6.9,6.9,0,0,0-6.74,7H27.12c0-4.37-3.16-7.46-7-7.43V25.63a6.9,6.9,0,0,0,6.75-7H71.53c.45-.32.88-.63,1.27-1A43.64,43.64,0,0,1,81.24,12Zm110.8,12.76-20.46,20.3.1-10.2c-12.8-2.77-27.26.49-35,10.17C69,25,87.09,15,102.7,14.5l.09-10.41,20.09,20.66ZM62,30.26a10.67,10.67,0,1,0-4.47,14.41A10.67,10.67,0,0,0,62,30.26ZM0,0V43.61l5.57,0V11.85A5.15,5.15,0,0,1,11.1,6.62H76.78l0-6.62Z',
                    view: '0 0 122.88 58.81'
                }
            ],
            socialMedia: [
                {
                    name: 'facebook',
                    image: 'M30.996 16.091c-0.001-8.281-6.714-14.994-14.996-14.994s-14.996 6.714-14.996 14.996c0 7.455 5.44 13.639 12.566 14.8l0.086 0.012v-10.478h-3.808v-4.336h3.808v-3.302c-0.019-0.167-0.029-0.361-0.029-0.557 0-2.923 2.37-5.293 5.293-5.293 0.141 0 0.281 0.006 0.42 0.016l-0.018-0.001c1.199 0.017 2.359 0.123 3.491 0.312l-0.134-0.019v3.69h-1.892c-0.086-0.012-0.185-0.019-0.285-0.019-1.197 0-2.168 0.97-2.168 2.168 0 0.068 0.003 0.135 0.009 0.202l-0.001-0.009v2.812h4.159l-0.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814v-0z',
                    view: '0 0 32 32'
                },
                {
                    name: 'twitter',
                    image: 'M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2  c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7  c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9  C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5  c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6  c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z',
                    view: '-143 145 512 512'
                },
                {
                    name: 'instagram',
                    image: 'M13.498 6.651a1.656 1.656 0 0 0-.95-.949 2.766 2.766 0 0 0-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 0 0-.929.172 1.656 1.656 0 0 0-.949.95 2.766 2.766 0 0 0-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 0 0 .172.929 1.656 1.656 0 0 0 .95.949 2.766 2.766 0 0 0 .928.172c.527.024.685.029 2.02.029s1.493-.005 2.02-.03a2.766 2.766 0 0 0 .929-.171 1.656 1.656 0 0 0 .949-.95 2.766 2.766 0 0 0 .172-.928c.024-.527.029-.685.029-2.02s-.005-1.493-.03-2.02a2.766 2.766 0 0 0-.171-.929zM9.6 12.168A2.568 2.568 0 1 1 12.168 9.6 2.568 2.568 0 0 1 9.6 12.168zm2.669-4.637a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6zM11.267 9.6A1.667 1.667 0 1 1 9.6 7.933 1.667 1.667 0 0 1 11.267 9.6zM9.6 0a9.6 9.6 0 1 0 9.6 9.6A9.6 9.6 0 0 0 9.6 0zm4.97 11.661a3.67 3.67 0 0 1-.233 1.214 2.556 2.556 0 0 1-1.462 1.462 3.67 3.67 0 0 1-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 0 1-1.213-.233 2.556 2.556 0 0 1-1.462-1.462 3.67 3.67 0 0 1-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 0 1 .232-1.213 2.556 2.556 0 0 1 1.463-1.463 3.67 3.67 0 0 1 1.213-.232c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 0 1 1.213.232 2.556 2.556 0 0 1 1.462 1.463 3.67 3.67 0 0 1 .233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z',
                    view: '0 0 20 20'
                },
                {
                    name: 'youtube',
                    image: 'M11.603 9.833L9.357 8.785C9.161 8.694 9 8.796 9 9.013v1.974c0 .217.161.319.357.228l2.245-1.048c.197-.092.197-.242.001-.334zM10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm0 13.5c-4.914 0-5-.443-5-3.9s.086-3.9 5-3.9 5 .443 5 3.9-.086 3.9-5 3.9z',
                    view: '0 0 20 20'
                },
                {
                    name: 'linkedin',
                    image: 'M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9  V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7  C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6  c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z  ',
                    view: '-143 145 512 512'
                },
                {
                    name: 'whatsapp',
                    image: 'M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm700 952c-175-175-407-271-655-271-510 0-925 415-925 925 0 163 43 322 124 462l-131 480 491-129c135 74 287 113 442 113 510 0 925-415 925-925 0-247-96-480-271-655zm-654 1424c-138 0-274-37-392-107l-28-17-291 76 78-284-18-29c-77-122-118-264-118-409 0-424 345-769 770-769 205 0 399 80 544 225 145 146 225 338 225 544 0 424-345 770-769 770zm422-576c-23-12-137-67-158-75s-37-12-52 12c-15 23-60 75-73 91-14 15-27 18-50 6s-98-36-186-115c-69-61-115-137-129-160s-2-36 10-47c11-10 23-27 35-41s15-23 23-39c8-15 4-29-2-41s-52-125-71-172c-19-45-38-39-52-40s-29-1-44-1-40 6-62 29c-21 23-81 79-81 193s83 224 94 239c12 15 163 249 395 349 55 24 98 38 132 49 55 17 106 15 146 9 44-7 137-56 156-110s19-100 14-110-21-16-44-28z',
                    view: '0 0 3333 3333'
                },
                {
                    name: 'snapchat',
                    image: 'M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm532 1492c86-429-81-787-533-791-323-2-617 208-537 761 10 69-23 61-75 49-43-9-87-19-130-28-21 4-37 12-48 23-62 66 63 117 110 135 62 23 130 45 121 118-3 29-13 57-24 86-59 142-215 275-363 317-77 22-116 31 1 95 53 29 119 45 205 57 12 227 98 81 284 119 23 5 48 8 75 20 48 21 96 62 151 94 166 96 316 102 478-12 94-66 183-131 350-111 117 15 109 51 149-114 147-26 279-54 271-135-192-41-314-141-416-305-40-65-91-160 15-205 28-12 65-18 108-34 38-13 72-37 80-54 21-48-14-90-59-94-86-6-127 50-179 33-12-4-23-11-37-23h1z',
                    view: '0 0 3333 3333'
                },
                {
                    name: 'tiktok',
                    image: 'M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm361 744c31 262 177 418 430 434v294c-147 14-276-34-426-124v550c0 700-763 918-1069 417-197-322-76-889 556-911v311c-48 8-99 20-146 36-141 47-220 137-198 294 43 301 595 390 549-198V745h305z',
                    view: '0 0 3333 3333'
                }
            ],
            langMenu: [
                {
                    _id: "lang",
                    text: this.$store.state.language.code,
                    active: this.$settings.sections.footer.icons.language,
                    title: this.$settings.sections.footer.icons.language_text,
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
                    active: this.$settings.sections.footer.icons.currency,
                    title: this.$settings.sections.footer.icons.currency_text,
                    childrens: this.$settings.store_currencies.map(c => {
                        return {
                            _id: c.code,
                            text: c.name,
                            url: `?cur=${c.code}`
                        }
                    })
                },
            ].filter(item => item.active)
        };
    },
    mounted() {
        this.getWindowWidth();
        window.addEventListener('resize', this.getWindowWidth);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.getWindowWidth);
    },
    methods: {
        getWindowWidth() {
            this.windowWidth = window.innerWidth;
        },
        showContent() {
            if (window.innerWidth < 1024) {
                this.isVisible.Content = !this.isVisible.Content;
            }
        },
        showMenu1() {
            if (window.innerWidth < 1024) {
                this.isVisible.Menu1 = !this.isVisible.Menu1;
            }
        },
        showMenu2() {
            if (window.innerWidth < 1024) {
                this.isVisible.Menu2 = !this.isVisible.Menu2;
            }
        },
        showPaymentMethods() {
            if (window.innerWidth < 1024) {
                this.isVisible.PaymentMethods = !this.isVisible.PaymentMethods;
            }
        },
        showLang() {
            if (window.innerWidth < 1024) {
                this.isVisible.Lang = !this.isVisible.Lang;
            }
        },
        showCurr() {
            if (window.innerWidth < 1024) {
                this.isVisible.Curr = !this.isVisible.Curr;
            }
        },
        showSocialMedia() {
            if (window.innerWidth < 1024) {
                this.isVisible.SocialMedia = !this.isVisible.SocialMedia;
            }
        }
    }
};
</script>

<style scoped>
.menus-text:first-child {
    margin-top: 2rem;
}

.ml-mr-4 {
    margin-right: 1rem;
}

[dir="rtl"] .ml-mr-4 {
    margin-left: 1rem;
    margin-right: 0;
}
</style>
