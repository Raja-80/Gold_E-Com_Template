<template>
    <div>
      <si-app-loader placement="BEFORE_FOOTER"/>
      <div class="lg:border-t border-gray-300">
        <!-- Start footer Section -->
        <footer class="footer footer-color footer-text lg:px-7 lg:py-10">
          <div class="flex flex-wrap justify-between">
            <!-- Social Media & follow us  -->
            <div class="w-full px-0 lg:px-3" :class="[menus.menu1_active && !menus.menu2_active ? 'lg:w-1/3' : !menus.menu1_active && menus.menu2_active ? 'lg:w-1/3': !menus.menu1_active && !menus.menu2_active ?'lg:w-1/2':'lg:w-1/4']">
                <!-- about -->
                <div class="about border-t lg:border-0 border-gray-200 py-8 px-5 lg:py-0 lg:px-0">
                    <div @click="showContent" class="flex items-center justify-between transition-all ease-in-out delay-150 cursor-pointer lg:cursor-auto">
                        <h4 class="ml-font-bold text-sml">{{ title }}</h4>
                        <span class="lg:hidden" :class="[isVisible.Content ? 'rotate-45 transition-all delay-150 ease-linear' : ''] ">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 9.4h-4.9V4.5a.6.6 0 10-1.2 0v4.9H4.5a.6.6 0 000 1.2h4.9v4.9a.6.6 0 001.2 0v-4.9h4.9a.6.6 0 100-1.2z" fill="currentColor"></path></svg>
                        </span>
                    </div>
                    <!-- Store title -->
                    <transition name="slide">
                      <div class="lg:block mt-8" v-if="windowWidth < 1024 ? isVisible.Content : true">
                        <!-- Footer About -->
                            <div v-if="footer.about" class="text-sml text-md-responsive">{{ footer.about }}</div>
                        <!-- Footer About -->
                        <!-- Contacts  -->
                        <div class="contacts flex flex-col">
                            <span v-if="footer.location" class="mt-5 dfasfs text-sml text-md-responsive ">
                                <a class="link-hover" :href="footer.location_link">{{ footer.location }}</a>
                            </span>
                            <span v-if="footer.gmail" class="mt-5 text-sml text-md-responsive ">
                                <a class="link-hover" :href="'mail:'+footer.gmail">{{ footer.gmail }}</a>
                            </span>
                            <span v-if=" footer.number " class="mt-5 text-sml text-md-responsive ">    
                                <a class="link-hover" :href="'tel:'+footer.number">{{ footer.number }}</a>
                            </span>
                        </div>
                        <!-- Contacts  -->
                      </div>
                  </transition>
                  {{ $settings.sections.footer.social_media.length }}
                    <!-- Contacts  -->
                </div>
                <!-- about -->
                <!--  Social Media -->
                <div class="Social_Media border-t lg:border-0 mt-0 lg:mt-8 border-gray-200  py-8 px-5 lg:py-0 lg:px-0">
                    <div @click="showSocialMedia" class="flex items-center justify-between transition-all ease-in-out delay-150 cursor-pointer  lg:cursor-auto">
                        <h4 class="ml-font-bold text-sml">{{ footer.social_media.title }}</h4>
                        <span class="lg:hidden" :class="[isVisible.SocialMedia ? 'rotate-45 transition-all delay-150 ease-linear' : ''] ">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 9.4h-4.9V4.5a.6.6 0 10-1.2 0v4.9H4.5a.6.6 0 000 1.2h4.9v4.9a.6.6 0 001.2 0v-4.9h4.9a.6.6 0 100-1.2z" fill="currentColor"></path></svg>
                        </span>
                    </div>
                    <transition name="slide">
                        <div v-if="windowWidth < 1024 ? isVisible.SocialMedia : true">
                            <div class="flex flex-wrap mt-4">
                                <div v-for="item in socialMedia.filter(s=>$settings.sections.footer.social_media[s.name])" :key="item.name" class="flex items-center justify-center ml-mr-4 mt-4">
                                    <a class="h-full flex footer-text" :href="$settings.sections.footer.social_media[item.name]" target="_blank" rel="noopener noreferrer">
                                        <svg width="25" height="25" :viewBox="item.view" fill="none" xmlns="http://www.w3.org/2000/svg"><path :d="item.image" fill="currentColor"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <!--  Social Media  -->
            </div> 
            <!-- Social Media & follow us -->
            <!-- menu1 --> 
            <div v-if="menus.menu1_active" class="menu1 border-t lg:border-0 border-gray-200 py-8 px-5 lg:py-0 lg:px-3 w-full" :class="menus.menu1_active && menus.menu2_active ? 'lg:w-1/4' : 'lg:w-1/3'">
                <div @click="showMenu1" class="flex items-center justify-between transition-all ease-in-out delay-150 cursor-pointer lg:cursor-auto">
                    <h4 class="ml-font-bold text-sml">{{ menus.menu1_title }}</h4>
                    <span class="lg:hidden" :class="[isVisible.Menu1 ? 'rotate-45 transition-all delay-150 ease-linear' : ''] ">
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 9.4h-4.9V4.5a.6.6 0 10-1.2 0v4.9H4.5a.6.6 0 000 1.2h4.9v4.9a.6.6 0 001.2 0v-4.9h4.9a.6.6 0 100-1.2z" fill="currentColor"></path></svg>
                    </span>
                </div> 
                <!-- Header Menu -->
                <transition name="slide">
                    <div v-if="windowWidth < 1024 ? isVisible.Menu1 : true">
                        <div v-if="menu1">
                            <ul class="menus-text mt-5 flex flex-col" v-for="(item, i) in menu1.items" :key="i">
                                <li @click="active.Id1 = active.Id1 != item._id ? item._id : null" :class="item.childrens.length > 0 ? 'primary-hover cursor-pointer' : ''" class="flex items-center justify-between">
                                    <router-link class="text-sml link-hover" :to="item.url">
                                        {{ item.text }}
                                    </router-link>
                                    <span class="w-5 flex justify-center lg:justify-end" v-if="item.childrens && item.childrens.length > 0">
                                        <svg width="12" height="7"  :class="[active.Id1==item._id ? 'rotate-180 transition-all delay-150 ease-linear' : '']"  viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg"><path d="M11.39.6a.54.54 0 00-.78 0L6 5.21 1.39.6a.54.54 0 00-.78 0 .55.55 0 000 .77L6 6.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                    </span>
                                </li>
                                <transition name="slide">
                                <div v-if="item._id == active.Id1">
                                    <div class="mt-5" v-for="(item,i) in item.childrens" :key="i">
                                        <router-link class="text-sml link-hover text-primary" :to="item.url">
                                            {{item.text}}
                                        </router-link>
                                    </div>
                                </div>
                                </transition>
                            </ul>
                        </div>
                    </div>
                </transition>
                <!-- Header Menu -->
            </div>
            <!-- menu1  -->
            <!-- menu2 --> 
            <div v-if="menus.menu2_active" class="menu2 border-t lg:border-0 border-gray-200 py-8 px-5 lg:py-0 lg:px-3 w-full" :class="menus.menu1_active && menus.menu2_active ? 'lg:w-1/4' : 'lg:w-1/3'">
                <div @click="showMenu2" class="flex items-center justify-between transition-all ease-in-out delay-150  cursor-pointer lg:cursor-auto">
                    <h4 class="ml-font-bold text-sml">{{ menus.menu2_title }}</h4>
                    <span class="lg:hidden" :class="[isVisible.Menu2 ? 'rotate-45 transition-all delay-150 ease-linear' : ''] ">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 9.4h-4.9V4.5a.6.6 0 10-1.2 0v4.9H4.5a.6.6 0 000 1.2h4.9v4.9a.6.6 0 001.2 0v-4.9h4.9a.6.6 0 100-1.2z" fill="currentColor"></path></svg>
                    </span>
                </div> 
                <!-- Header Menu -->
                <transition name="slide">
                    <div v-if="windowWidth < 1024 ? isVisible.Menu2 : true">
                        <div v-if="menu2">
                            <ul class="menus-text mt-5 flex flex-col" v-for="(item, i) in menu2.items" :key="i">
                                <li @click="active.Id2 = active.Id2 != item._id ? item._id : null" :class="item.childrens.length > 0 ? 'primary-hover cursor-pointer' : ''" class="flex items-center justify-between">
                                    <router-link class="text-sml link-hover" :to="item.url">
                                        {{ item.text }}
                                    </router-link>
                                    <span class="w-5 flex justify-center lg:justify-end" v-if="item.childrens && item.childrens.length > 0">
                                        <svg width="12" height="7"  :class="[active.Id2==item._id ? 'rotate-180 transition-all delay-150 ease-linear' : '']"  viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg"><path d="M11.39.6a.54.54 0 00-.78 0L6 5.21 1.39.6a.54.54 0 00-.78 0 .55.55 0 000 .77L6 6.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                    </span>
                                </li>
                                <transition name="slide">
                                <div class="" v-if="item._id == active.Id2">
                                    <div class="mt-5" v-for="(item,i) in item.childrens" :key="i">
                                        <router-link class="text-sml link-hover text-primary" :to="item.url">
                                            {{item.text}}
                                        </router-link>
                                    </div>
                                </div>
                                </transition>
                            </ul>
                        </div>
                    </div>
                </transition>
                <!-- Header Menu -->
            </div>
            <!-- menu2  -->
            <!-- courency and language dropdown & payment_methods  -->
            <div class="w-full px-0 lg:px-3" :class="[menus.menu1_active && !menus.menu2_active ? 'lg:w-1/3' : !menus.menu1_active && menus.menu2_active ? 'lg:w-1/3':  !menus.menu1_active && !menus.menu2_active ?'lg:w-1/2':'lg:w-1/4']">
                <!-- Lang -->
                <div v-if="$settings.sections.footer.icons.language" class="lang border-t lg:border-0 border-gray-200  py-8 px-5 lg:py-0 lg:px-0">
                    <ul v-for="(item, i) in langMenu" :key="i" class="flex flex-col">
                        <div @click="showLang" class="flex items-center justify-between transition-all ease-in-out delay-150 cursor-pointer lg:cursor-auto" >
                            <h4 class="ml-font-bold text-sml">{{ item.title }}</h4>
                            <span class="lg:hidden" :class="[isVisible.Lang ? 'rotate-45 transition-all delay-150 ease-linear' : ''] ">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 9.4h-4.9V4.5a.6.6 0 10-1.2 0v4.9H4.5a.6.6 0 000 1.2h4.9v4.9a.6.6 0 001.2 0v-4.9h4.9a.6.6 0 100-1.2z" fill="currentColor"></path></svg>
                            </span>
                        </div>
                        <transition name="slide">
                            <div v-if="windowWidth < 1024 ? isVisible.Lang : true">
                                <li class="border-b border-primary mt-8" @click="active.Id3 = active.Id3 != item._id ? item._id : null" :class="item.childrens.length > 0 ? 'primary-hover cursor-pointer' : ''">
                                    <a class="flex items-center justify-between" :href="item.url">
                                        <div class="text-sml">{{ item.text }}</div>
                                        <span class="w-5 flex justify-center lg:justify-end" v-if="item.childrens && item.childrens.length > 0">
                                            <svg width="12" height="7"  :class="[active.Id3==item._id ? 'rotate-180 transition-all delay-150 ease-linear' : '']"  viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg"><path d="M11.39.6a.54.54 0 00-.78 0L6 5.21 1.39.6a.54.54 0 00-.78 0 .55.55 0 000 .77L6 6.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                        </span>
                                    </a>
                                </li>
                                <transition name="slide">
                                    <div class="relative" >
                                        <div v-if="item._id == active.Id3" class="footer-color footer-text h-56 z-10 overflow-auto absolute bottom-6 left-0 right-0 border border-gray-200 px-6 py-3 bg-white">
                                            <div class="pb-1" v-for="(item,i) in item.childrens" :key="i" >
                                                <a class="text-sml link-hover" :href="item.url">{{item.text}}</a>
                                                <ul v-if="item.childrens && item.childrens.length > 0">
                                                    <li class="px-2 pt-1" v-for="(child,ii) in item.childrens" :key="ii">
                                                        <a :href="child.url">
                                                           <span class="text-sml link-hover" > > {{ child.text }}</span> 
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                        </transition>
                    </ul>
                </div>
                <!-- Lang -->
                <!-- Curr -->
                <div v-if="$settings.sections.footer.icons.currency" class="Curr border-t lg:border-0 border-gray-200 py-8 px-5 lg:py-0 lg:px-0" :class="$settings.sections.footer.icons.language ? 'lg:mt-8' : ''">
                    <ul v-for="(item, i) in currMenu" :key="i" class="flex flex-col">
                        <div @click="showCurr" class="flex items-center justify-between transition-all ease-in-out delay-150 cursor-pointer lg:cursor-auto" >
                            <h4 class="ml-font-bold text-sml">{{ item.title }}</h4>
                            <span class="lg:hidden" :class="[isVisible.Curr ? 'rotate-45 transition-all delay-150 ease-linear' : ''] ">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 9.4h-4.9V4.5a.6.6 0 10-1.2 0v4.9H4.5a.6.6 0 000 1.2h4.9v4.9a.6.6 0 001.2 0v-4.9h4.9a.6.6 0 100-1.2z" fill="currentColor"></path></svg>
                            </span>
                        </div>
                        <transition name="slide">
                            <div v-if="windowWidth < 1024 ? isVisible.Curr : true">
                                <li class="border-b border-primary mt-8" @click="active.Id3 = active.Id3 != item._id ? item._id : null" :class="item.childrens.length > 0 ? 'primary-hover cursor-pointer' : ''">
                                    <a class="flex items-center justify-between" :href="item.url">
                                        <div class="text-sml">{{ item.text }}</div>
                                        <span class="w-5 flex justify-center lg:justify-end" v-if="item.childrens && item.childrens.length > 0">
                                            <svg width="12" height="7"  :class="[active.Id3==item._id ? 'rotate-180 transition-all delay-150 ease-linear' : '']"  viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg"><path d="M11.39.6a.54.54 0 00-.78 0L6 5.21 1.39.6a.54.54 0 00-.78 0 .55.55 0 000 .77L6 6.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                        </span>
                                    </a>
                                </li>
                                <transition name="slide">
                                    <div class="relative" >
                                        <div v-if="item._id == active.Id3" class="footer-color footer-text h-56 z-10 overflow-auto absolute bottom-6 left-0 right-0 border border-gray-200 px-6 py-3 bg-white">
                                            <div class="pb-1" v-for="(item,i) in item.childrens" :key="i" >
                                                <a class="text-sml link-hover" :href="item.url">{{item.text}}</a>
                                                <ul v-if="item.childrens && item.childrens.length > 0">
                                                    <li class="px-2 pt-1" v-for="(child,ii) in item.childrens" :key="ii">
                                                        <a :href="child.url">
                                                            <span class="text-sml link-hover" > {{ child.text }}</span> 
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                        </transition>
                    </ul>
                </div>
                <!-- Curr -->
                <!-- payment_methods  -->
                <div class="payment_methods border-t lg:border-0 border-gray-200 py-8 px-5 lg:py-0 lg:px-0" :class="$settings.sections.footer.icons.language || $settings.sections.footer.icons.currency ? 'lg:mt-8' : ''">
                    <div @click="showPaymentMethods" class="flex items-center justify-between transition-all ease-in-out delay-150 cursor-pointer  lg:cursor-auto">
                        <h4 class="ml-font-bold text-sml">{{ footer.methods.title }}</h4>
                        <span class="lg:hidden" :class="[isVisible.PaymentMethods ? 'rotate-45 transition-all delay-150 ease-linear' : ''] ">
                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 9.4h-4.9V4.5a.6.6 0 10-1.2 0v4.9H4.5a.6.6 0 000 1.2h4.9v4.9a.6.6 0 001.2 0v-4.9h4.9a.6.6 0 100-1.2z" fill="currentColor"></path></svg>
                        </span>
                    </div> 
                    <div class="lg:block" v-if="windowWidth < 1024 ? isVisible.PaymentMethods : true">
                        <div class="payment_images flex flex-wrap mt-4">
                            <div class="footer-text flex ml-mr-4 mt-4" v-for="item in methods.filter(m=>$settings.sections.footer.methods[m.name])" :key="item.name" >
                                <svg width="40" height="40" :viewBox="item.view" fill="none" xmlns="http://www.w3.org/2000/svg"><path :d="item.image" fill="currentColor"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- payment_methods -->
            </div>
            <!-- courency and language dropdown & payment_methods  -->
          </div>
        </footer>
        <!-- End fotter Section -->
      </div>
      <si-app-loader placement="AFTER_FOOTER"/>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
            active : {
                Id1:null,
                Id2:null,
                Id3:null,
            },
            isVisible : {
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
            description: this.$settings.sections.footer.copyright.text,
          methods: [
                    {
                        name: 'visa',
                        image: 'm33.6 24h-31.2c-1.325 0-2.4-1.075-2.4-2.4v-19.2c0-1.325 1.075-2.4 2.4-2.4h31.2c1.325 0 2.4 1.075 2.4 2.4v19.2c0 1.325-1.075 2.4-2.4 2.4zm-15.76-9.238-.359 2.25c.79.338 1.709.535 2.674.535.077 0 .153-.001.229-.004h-.011c.088.005.19.008.294.008 1.109 0 2.137-.348 2.981-.941l-.017.011c.766-.568 1.258-1.469 1.258-2.485 0-.005 0-.01 0-.015v.001c0-1.1-.736-2.014-2.187-2.72-.426-.208-.79-.426-1.132-.672l.023.016c-.198-.13-.33-.345-.343-.592v-.002c.016-.26.165-.482.379-.6l.004-.002c.282-.164.62-.261.982-.261.042 0 .084.001.126.004h-.006.08c.023 0 .05-.001.077-.001.644 0 1.255.139 1.806.388l-.028-.011.234.125.359-2.171c-.675-.267-1.458-.422-2.277-.422-.016 0-.033 0-.049 0h.003c-.064-.003-.139-.005-.214-.005-1.096 0-2.112.347-2.943.937l.016-.011c-.752.536-1.237 1.404-1.237 2.386v.005c-.01 1.058.752 1.972 2.266 2.72.4.175.745.389 1.054.646l-.007-.006c.175.148.288.365.297.608v.002.002c0 .319-.19.593-.464.716l-.005.002c-.3.158-.656.25-1.034.25-.015 0-.031 0-.046 0h.002c-.022 0-.049 0-.075 0-.857 0-1.669-.19-2.397-.53l.035.015-.343-.172zm10.125 1.141h3.315q.08.343.313 1.5h2.407l-2.094-10.031h-2c-.035-.003-.076-.005-.118-.005-.562 0-1.043.348-1.239.84l-.003.009-3.84 9.187h2.72l.546-1.499zm-13.074-8.531-1.626 10.031h2.594l1.625-10.031zm-9.969 2.047 2.11 7.968h2.734l4.075-10.015h-2.746l-2.534 6.844-.266-1.391-.904-4.609c-.091-.489-.514-.855-1.023-.855-.052 0-.104.004-.154.011l.006-.001h-4.187l-.031.203c3.224.819 5.342 2.586 6.296 5.25-.309-.792-.76-1.467-1.326-2.024l-.001-.001c-.567-.582-1.248-1.049-2.007-1.368l-.04-.015zm25.937 4.421h-2.16q.219-.578 1.032-2.8l.046-.141c.042-.104.094-.24.16-.406s.11-.302.14-.406l.188.859.593 2.89z',
                        view: '0 -6 36 36'
                    },
                    {
                        name: 'mastercard',
                        image: 'M15.051,25.813c-1.058,0-1.869,0.34-1.869,0.34l-0.224,1.33c0,0,0.669-0.272,1.682-0.272c0.575,0,0.995,0.064,0.995,0.531   c0,0.284-0.051,0.389-0.051,0.389s-0.453-0.037-0.663-0.037c-1.335,0-2.737,0.568-2.737,2.287c0,1.354,0.919,1.663,1.49,1.663   c1.089,0,1.559-0.706,1.583-0.708l-0.051,0.59h1.359l0.606-4.25C17.17,25.871,15.597,25.813,15.051,25.813z M14.289,30.75   c-0.479,0-0.604-0.365-0.604-0.583c0-0.422,0.229-0.93,1.36-0.93c0.264,0.001,0.292,0.028,0.336,0.036   C15.411,29.533,15.219,30.75,14.289,30.75z M19.11,27.741c0,0.771,1.839,0.392,1.839,2.31c0,2.051-1.987,1.961-2.334,1.961   c-1.295,0-1.695-0.178-1.732-0.188l0.206-1.351c0.002-0.01,0.65,0.236,1.371,0.236c0.416,0,0.956-0.041,0.956-0.537   c0-0.746-1.932-0.566-1.932-2.334c0-1.559,1.158-2.015,2.3-2.015c0.882,0,1.424,0.121,1.424,0.121l-0.195,1.362   c0,0-0.837-0.069-1.054-0.069C19.409,27.238,19.11,27.358,19.11,27.741z M22.773,30.089c-0.034,0.211,0.025,0.498,0.562,0.498   c0.137,0,0.292-0.046,0.398-0.046l-0.193,1.312c-0.155,0.043-0.594,0.199-1.157,0.203c-0.719,0.007-1.23-0.397-1.23-1.308   c0-0.612,0.877-5.655,0.911-5.688h1.543l-0.157,0.9h0.77l-0.197,1.452h-0.817L22.773,30.089z M28.727,29.452   c0,0,0.203-1,0.203-1.407c0-1.017-0.506-2.257-2.2-2.257c-1.552,0.001-2.701,1.673-2.701,3.563c0,2.181,1.439,2.699,2.666,2.699   c1.132,0,1.63-0.254,1.63-0.254l0.272-1.488c0,0-0.861,0.38-1.639,0.38c-1.657,0-1.367-1.236-1.367-1.236H28.727z M26.735,27.171   c0.871,0,0.71,0.979,0.71,1.057h-1.713C25.732,28.128,25.894,27.171,26.735,27.171z M12.737,24.583l-1.217,7.35H9.94l0.879-5.541   l-1.983,5.541H7.773l-0.138-5.541l-0.939,5.541H5.207l1.234-7.35h2.252l0.079,4.51l1.521-4.51H12.737z M32.26,23.615h-8.014   c0.079-0.15,0.359-0.754,0.781-1.553h6.607C31.871,22.564,32.079,23.082,32.26,23.615z M30.799,20.539h-4.913   c0.315-0.52,0.663-1.052,1.033-1.552h2.754C30.081,19.479,30.458,19.997,30.799,20.539z M28.235,38.991   c-0.537-0.485-1.023-1.022-1.482-1.584h2.993c-0.451,0.553-0.944,1.071-1.472,1.552h-0.003c0,0.001,0.001,0.001,0.001,0.001   C28.26,38.97,28.247,38.98,28.235,38.991z M30.817,35.913h-5.143c-0.313-0.5-0.605-1.013-0.856-1.552h6.843   C31.41,34.897,31.129,35.415,30.817,35.913z M32.651,25.905c-0.205,0.418-0.386,0.801-0.574,1.79   c-1.071-0.379-1.155,1.695-1.604,4.25h-1.584l0.963-5.982h1.437L31.15,26.83c0,0,0.512-0.943,1.203-0.943   C32.555,25.885,32.651,25.905,32.651,25.905z M35.508,30.548c0.52,0,1.276-0.379,1.276-0.379l-0.276,1.684   c0,0-0.83,0.211-1.35,0.211c-1.842,0-2.777-1.271-2.777-3.196c0-2.903,1.733-4.449,3.514-4.449c0.804,0,1.738,0.378,1.738,0.378   l-0.252,1.635c0,0-0.631-0.441-1.416-0.441c-1.05,0-1.992,1.002-1.992,2.824C33.973,29.712,34.412,30.548,35.508,30.548z    M50.574,31.082c-0.075,0.04-0.133,0.098-0.175,0.174c-0.042,0.075-0.063,0.153-0.063,0.234s0.021,0.158,0.063,0.232   c0.041,0.074,0.099,0.133,0.173,0.175c0.075,0.041,0.152,0.062,0.232,0.062c0.082,0,0.16-0.021,0.233-0.062   c0.074-0.042,0.132-0.101,0.173-0.175c0.043-0.074,0.062-0.151,0.062-0.232c0-0.082-0.02-0.16-0.062-0.234   c-0.041-0.076-0.101-0.134-0.176-0.174c-0.074-0.041-0.15-0.061-0.23-0.061C50.727,31.021,50.65,31.041,50.574,31.082z    M51.143,31.293c0.035,0.063,0.054,0.128,0.054,0.195s-0.017,0.133-0.052,0.194c-0.034,0.062-0.082,0.109-0.145,0.146   c-0.062,0.034-0.126,0.052-0.193,0.052c-0.068,0-0.133-0.018-0.194-0.052c-0.063-0.035-0.11-0.083-0.146-0.146   s-0.052-0.127-0.052-0.194s0.017-0.132,0.054-0.195c0.035-0.062,0.082-0.11,0.146-0.145s0.127-0.05,0.192-0.05   s0.129,0.017,0.19,0.05C51.061,31.183,51.108,31.23,51.143,31.293z M44.877,29.517c0,1.265,0.629,2.504,1.913,2.504   c0.925,0,1.437-0.645,1.437-0.645l-0.067,0.551h1.501l1.18-7.339l-1.548,0.003l-0.333,2.065c0,0-0.58-0.803-1.49-0.803   C46.055,25.854,44.877,27.559,44.877,29.517z M48.575,28.618c0,0.815-0.403,1.904-1.239,1.904c-0.556,0-0.816-0.466-0.816-1.198   c0-1.197,0.537-1.986,1.216-1.986C48.29,27.339,48.575,27.72,48.575,28.618z M51.086,36.347c-0.011-0.01-0.025-0.021-0.043-0.026   c0.043-0.003,0.079-0.019,0.105-0.046c0.025-0.027,0.039-0.059,0.039-0.096c0-0.026-0.008-0.051-0.023-0.074   s-0.037-0.04-0.064-0.049c-0.025-0.01-0.068-0.015-0.127-0.015h-0.174v0.505l0,0h0.082v-0.215h0.047   c0.028,0,0.051,0.006,0.064,0.018c0.021,0.017,0.051,0.056,0.086,0.117l0.044,0.08h0.101l-0.062-0.099   C51.131,36.401,51.106,36.368,51.086,36.347z M50.979,36.263h-0.1v-0.152h0.094c0.039,0,0.065,0.003,0.08,0.009   c0.016,0.006,0.026,0.015,0.035,0.026c0.008,0.012,0.012,0.025,0.012,0.039c0,0.023-0.008,0.043-0.025,0.057   S51.025,36.263,50.979,36.263z M55.026,9.939H1.454C0.65,9.939,0,10.59,0,11.393v33.695c0,0.803,0.65,1.454,1.454,1.454h53.572   c0.804,0,1.454-0.651,1.454-1.454V11.393C56.48,10.59,55.83,9.939,55.026,9.939z M51.409,36.519   c-0.042,0.076-0.099,0.134-0.173,0.175s-0.152,0.062-0.232,0.062c-0.082,0-0.16-0.021-0.234-0.062   c-0.073-0.041-0.131-0.099-0.174-0.175c-0.041-0.073-0.062-0.151-0.062-0.232s0.021-0.158,0.063-0.234   c0.041-0.076,0.101-0.133,0.175-0.174c0.075-0.039,0.151-0.06,0.231-0.06c0.079,0,0.155,0.021,0.229,0.06   c0.075,0.041,0.134,0.098,0.175,0.174c0.042,0.076,0.062,0.154,0.062,0.234S51.451,36.447,51.409,36.519z M52.457,28.241   c0.002,8.005-6.484,14.497-14.49,14.499c-3.744,0.001-7.158-1.418-9.73-3.749c-2.572,2.327-5.979,3.745-9.717,3.745   c-8.001,0-14.495-6.493-14.495-14.495c0-7.97,6.443-14.444,14.402-14.496c0.031,0,0.062,0,0.093,0c3.738,0,7.146,1.418,9.718,3.745   c2.571-2.328,5.981-3.747,9.722-3.748c8.006-0.003,14.497,6.486,14.499,14.492C52.457,28.236,52.457,28.238,52.457,28.241z    M50.6,31.244v0.504h0.082v-0.214h0.047c0.029,0,0.052,0.006,0.066,0.017c0.021,0.018,0.049,0.056,0.086,0.119l0.043,0.079h0.101   l-0.062-0.099c-0.029-0.047-0.055-0.08-0.074-0.1c-0.012-0.011-0.025-0.02-0.043-0.026c0.043-0.003,0.078-0.019,0.104-0.046   c0.025-0.026,0.04-0.06,0.04-0.096c0-0.025-0.008-0.051-0.024-0.074c-0.016-0.022-0.037-0.039-0.062-0.049   s-0.069-0.015-0.128-0.015L50.6,31.244L50.6,31.244z M50.891,31.347c0.009,0.013,0.013,0.024,0.013,0.041   c0,0.022-0.009,0.041-0.024,0.055c-0.019,0.015-0.05,0.021-0.097,0.021h-0.099v-0.152h0.092c0.04,0,0.066,0.003,0.082,0.008   C50.871,31.327,50.883,31.334,50.891,31.347z M40.069,25.813c-1.06,0-1.87,0.34-1.87,0.34l-0.225,1.33c0,0,0.67-0.272,1.682-0.272   c0.575,0,0.996,0.064,0.996,0.531c0,0.284-0.053,0.389-0.053,0.389s-0.452-0.037-0.664-0.037c-1.334,0-2.735,0.568-2.735,2.287   c0,1.354,0.92,1.663,1.49,1.663c1.088,0,1.558-0.706,1.583-0.708l-0.051,0.59h1.358l0.606-4.25   C42.189,25.871,40.615,25.813,40.069,25.813z M39.309,30.75c-0.48,0-0.604-0.365-0.604-0.583c0-0.422,0.229-0.93,1.36-0.93   c0.263,0.001,0.291,0.028,0.336,0.036C40.43,29.533,40.237,30.75,39.309,30.75z M45.034,27.694   c-1.071-0.379-1.153,1.694-1.604,4.25h-1.584l0.963-5.982h1.438l-0.138,0.867c0,0,0.513-0.943,1.204-0.943   c0.201,0,0.297,0.02,0.297,0.02C45.405,26.323,45.223,26.706,45.034,27.694z',
                        view: '0 0 56.48 56.48'
                    },
                    {
                        name: 'transfer',
                        image: 'M0,29.94L28.91,9.43l29.06,20.51H0L0,29.94z M25.7,76.13l18.46-4.73l-3.47,5.79 c6.37,5.86,13.11,7.64,20.79,4.72c-7.57,10.93-18.63,11.76-27.71,6.83l-3.54,5.9L25.7,76.13L25.7,76.13L25.7,76.13L25.7,76.13z M64.9,47.08l28.91-20.51l29.06,20.51H64.9L64.9,47.08z M66.66,80.61v-6.72h1.99l1.9-1.49V54.53h-3.88v-4.28h54.29v4.28h-3.87V72.4 l1.9,1.49h2.03v6.72H66.66L66.66,80.61z M79.59,73.88h2.19l1.9-1.49V54.53h-5.98V72.4L79.59,73.88L79.59,73.88L79.59,73.88z M92.72,73.88h2.19l1.9-1.49V54.53h-5.98V72.4L92.72,73.88L92.72,73.88L92.72,73.88z M105.85,73.88h2.19l1.9-1.49V54.53h-5.98V72.4 L105.85,73.88L105.85,73.88L105.85,73.88z M85.98,18.71L67.3,22.53l3.75-5.61c-6.08-6.17-12.72-8.28-20.53-5.74 c8.1-10.54,19.19-10.83,28.01-5.45L82.35,0L85.98,18.71L85.98,18.71L85.98,18.71L85.98,18.71z M1.76,63.47v-6.72h1.99l1.9-1.49 V37.39H1.77v-4.28h54.29v4.28h-3.87v17.86l1.9,1.49h2.03v6.72H1.76L1.76,63.47z M14.69,56.74h2.19l1.9-1.49V37.39h-5.98v17.86 L14.69,56.74L14.69,56.74L14.69,56.74z M27.82,56.74h2.19l1.9-1.49V37.39h-5.98v17.86L27.82,56.74L27.82,56.74L27.82,56.74z M40.95,56.74h2.19l1.9-1.49V37.39h-5.98v17.86L40.95,56.74L40.95,56.74L40.95,56.74z',
                        view: '0 0 122.88 94.64'
                    },
                    {
                        name: 'paypal',
                        image: 'm33.6 24h-31.2c-1.325 0-2.4-1.075-2.4-2.4v-19.2c0-1.325 1.075-2.4 2.4-2.4h31.2c1.325 0 2.4 1.075 2.4 2.4v19.2c0 1.325-1.075 2.4-2.4 2.4zm-19.568-13.675c-.058.001-.109.028-.142.07-.038.039-.062.092-.063.15 0 .021.098.32.308.933l.454 1.326.211.618q.355 1.04.371 1.106c-.451.556-.879 1.176-1.259 1.828l-.038.07c-.001.008-.002.016-.002.025 0 .1.081.182.182.182.009 0 .018-.001.027-.002h-.001 1.218c.12-.001.224-.064.283-.159l.001-.001 4.032-5.819c.02-.027.033-.06.033-.097 0-.005 0-.01-.001-.015v.001c-.002-.059-.025-.111-.063-.15-.033-.042-.084-.069-.141-.07h-1.219c-.12.001-.225.064-.284.159l-.001.001-1.68 2.466-.695-2.372c-.037-.147-.168-.254-.323-.254-.009 0-.017 0-.026.001h.001zm13.978-.111c-.008 0-.017 0-.026 0-.758 0-1.439.329-1.909.851l-.002.002c-.495.513-.8 1.212-.8 1.982v.027-.001c-.002.029-.002.064-.002.098 0 .537.209 1.026.549 1.389l-.001-.001c.354.344.838.556 1.371.556.032 0 .065-.001.097-.002h-.005c.337-.004.657-.073.949-.197l-.016.006c.295-.111.545-.284.742-.504l.002-.002c-.01.057-.021.105-.034.151l.002-.01c-.017.056-.028.121-.032.188v.002c0 .168.069.253.206.253h1.091c.009.001.018.001.029.001.17 0 .309-.133.319-.3v-.001l.648-4.127c.002-.012.004-.026.004-.04 0-.052-.019-.1-.051-.137-.036-.049-.093-.08-.157-.08-.001 0-.002 0-.003 0h-1.2c-.147 0-.24.175-.27.522-.307-.391-.779-.639-1.31-.639-.067 0-.134.004-.199.012l.008-.001zm-17.963 0c-.008 0-.018 0-.028 0-.757 0-1.438.329-1.906.851l-.002.002c-.495.513-.8 1.212-.8 1.982v.027-.001c-.001.029-.002.062-.002.096 0 .538.209 1.027.55 1.39l-.001-.001c.354.344.838.556 1.372.556.032 0 .064-.001.096-.002h-.005c.332-.005.647-.074.934-.197l-.016.006c.299-.114.553-.286.758-.505l.001-.001c-.037.098-.06.212-.063.33v.002c0 .168.07.253.206.253h1.09c.009.001.018.001.029.001.17 0 .309-.133.319-.3v-.001l.649-4.127c.002-.011.003-.023.003-.036 0-.053-.019-.102-.051-.139-.036-.049-.093-.08-.157-.08-.001 0-.002 0-.003 0h-1.2c-.147 0-.24.175-.269.522-.312-.39-.788-.638-1.322-.638-.064 0-.126.004-.188.01l.008-.001zm22.565-2.214c-.005 0-.01-.001-.016-.001-.1 0-.182.077-.19.174v.001l-1.028 6.578c-.004.015-.007.032-.007.049 0 .051.021.098.054.132.037.044.092.071.154.071h.006 1.044c.01.001.021.002.032.002.166 0 .3-.134.3-.3 0-.001 0-.001 0-.002l1.026-6.465c.001-.007.001-.014.001-.022 0-.059-.02-.114-.053-.158v.001c-.035-.037-.085-.061-.14-.061-.005 0-.01 0-.015.001h.001zm-11.67 0c-.012-.002-.026-.003-.04-.003-.168 0-.305.135-.308.302l-1.027 6.452c-.002.011-.003.023-.003.036 0 .053.019.101.05.138.035.049.092.08.156.08h.004 1.297.004c.123 0 .225-.088.248-.204v-.002l.285-1.834c.009-.083.05-.155.111-.205h.001c.066-.054.148-.09.237-.103h.003c.081-.015.174-.023.269-.024h.001c.084 0 .184.005.3.016s.19.016.222.016c.048.003.104.004.16.004.763 0 1.457-.293 1.976-.773l-.002.002c.482-.512.779-1.204.779-1.965 0-.057-.002-.113-.005-.17v.008c.003-.038.005-.082.005-.127 0-.5-.24-.943-.61-1.223l-.004-.003c-.416-.265-.923-.422-1.467-.422-.045 0-.089.001-.133.003h.006zm-17.982 0c-.01-.001-.021-.002-.032-.002-.166 0-.3.134-.3.3v.002l-1.028 6.452c-.002.011-.003.024-.003.037 0 .052.019.1.05.137.035.049.092.08.156.08h.004 1.2c.012.002.026.003.04.003.168 0 .305-.135.308-.302l.285-1.739c.009-.083.05-.155.11-.205h.001c.066-.054.148-.09.237-.103h.003c.08-.015.173-.023.268-.024h.001c.084 0 .184.005.3.016s.19.016.222.016c.048.003.103.004.159.004.763 0 1.457-.293 1.977-.773l-.002.002c.482-.512.779-1.205.779-1.966 0-.057-.002-.113-.005-.169v.008c.003-.038.005-.082.005-.127 0-.5-.24-.943-.61-1.223l-.004-.003c-.416-.265-.923-.423-1.467-.423-.042 0-.084.001-.126.003h.006zm24.984 5.835c-.014.001-.031.001-.048.001-.266 0-.509-.096-.698-.255l.002.001c-.176-.163-.286-.395-.286-.653 0-.015 0-.03.001-.045v.002c0-.009 0-.019 0-.029 0-.374.151-.713.396-.959.241-.247.577-.4.949-.4h.033-.002c.01 0 .022-.001.034-.001.269 0 .514.099.702.262l-.001-.001c.181.168.294.408.294.674 0 .016 0 .032-.001.048v-.002.024c0 .369-.153.703-.4.94-.243.242-.579.391-.949.391-.008 0-.017 0-.025 0h.001zm-17.979 0c-.015.001-.032.001-.05.001-.262 0-.503-.096-.687-.255l.001.001c-.171-.164-.278-.395-.278-.651 0-.016 0-.032.001-.047v.002c0-.009 0-.019 0-.029 0-.374.151-.713.396-.959.241-.247.576-.4.948-.4h.035-.002c.01 0 .022-.001.034-.001.269 0 .514.099.702.262l-.001-.001c.181.168.293.408.293.673 0 .016 0 .033-.001.049v-.002.035c0 .369-.153.701-.4.938-.247.237-.583.384-.954.384-.012 0-.024 0-.036 0h.002zm11.907-2.56.269-1.691c.008-.098.09-.174.189-.174.006 0 .012 0 .017.001h-.001.285c.018 0 .04-.001.061-.001.173 0 .344.012.511.035l-.019-.002c.155.028.29.098.396.198.118.112.191.269.191.444 0 .013 0 .026-.001.038v-.002c.005.038.008.081.008.126 0 .31-.137.587-.354.775l-.001.001c-.266.153-.585.244-.925.244-.042 0-.083-.001-.125-.004h.006l-.505.016zm-17.979 0 .269-1.691c.008-.098.089-.174.188-.174.006 0 .012 0 .018.001h-.001.3c.038-.003.082-.005.126-.005.288 0 .561.069.801.191l-.01-.005c.189.121.253.378.19.766-.011.305-.17.57-.408.726l-.003.002c-.344.129-.742.204-1.158.204-.11 0-.219-.005-.326-.016z',
                        view: '0 -6 36 36'
                    },
                    {
                        name: 'cash',
                        image: 'M29.82,7.46h0A2.54,2.54,0,0,0,27.24,10v5.76l-7.45,7.45V6.88A6.91,6.91,0,0,1,21.8,2h0a7,7,0,0,1,4.87-2H116a7,7,0,0,1,4.87,2h0a7.11,7.11,0,0,1,2,4.86V80.24c0,1.83-.45,3.94-2,4.87h0a6.92,6.92,0,0,1-4.86,2H61.68A22,22,0,0,0,60.06,82l2.4-2.39h50.45a2.54,2.54,0,0,0,2.52-2.53V10a2.54,2.54,0,0,0-2.54-2.54H99.09V33.89L84.51,26.6,70,33.89V7.46ZM9.34,77.7l-3.18,18a1.41,1.41,0,0,1-.3.64,7,7,0,0,0-1.61,3.28,1.82,1.82,0,0,0,.5,1.82L16.28,113a5.27,5.27,0,0,0,2.8,1.43,7.07,7.07,0,0,0,3.75.11l.09,0,2.17-.54c3.33-.81,6.23-1.53,8.93-4l3.46-3.61a1.15,1.15,0,0,1,.14-.17c.05,0,.39-.39.85-.82,2.36-2.32,5.3-5.18,3.51-7.68l-1.39-1.39c-.67.65-1.38,1.28-2.06,1.9s-1.21,1.06-1.75,1.6a1.46,1.46,0,0,1-2.07-2.07c.53-.54,1.2-1.13,1.88-1.74,2.35-2.06,5-4.43,3.59-6.5l-1.37-1.37-.2-.25c-.79.81-1.66,1.58-2.51,2.33-.62.55-1.2,1.06-1.74,1.6a1.47,1.47,0,0,1-2.07,0,1.45,1.45,0,0,1,0-2.07c.53-.54,1.2-1.13,1.88-1.73,2.35-2.07,5-4.44,3.59-6.51l-1.37-1.37a1.78,1.78,0,0,1-.24-.32l-4,4a1.46,1.46,0,0,1-2.07-2.07l7.55-7.55c1.81-1.81,2.22-3.69,1.75-5.12-.17-.52,0-.53-.38-.9a3.33,3.33,0,0,0-.63-.49h0c-.11,0-.19-.06-.3-.17a2.78,2.78,0,0,0-.4-.16c-1.25-.42-2.44.32-4.08,1.71l-.07.06c-.18.15-.36.31-.54.49L17.27,85.34a1.47,1.47,0,0,1-2.07,0,1.45,1.45,0,0,1-.14-1.91L9.34,77.7Zm9.46,1.08.51-.5L29.64,67.94a10.08,10.08,0,1,1,11.28-2.08l-.1.1a2.39,2.39,0,0,1,.23.22,6.11,6.11,0,0,1,.85,1L54.72,54.41a5.08,5.08,0,0,1,0-7.15l-9.55-9.55a5.05,5.05,0,0,1-7.14,0L11.46,64.28a5.08,5.08,0,0,1,0,7.15l7.34,7.35Zm22.54-3.4a10.48,10.48,0,0,1-1.22,1.42l-1.49,1.5,0,0a1.67,1.67,0,0,1,.32.24l1.43,1.44a1.83,1.83,0,0,1,.21.26,4.93,4.93,0,0,1,.26,6,1.46,1.46,0,0,1,.53.34l1.43,1.43a1.78,1.78,0,0,1,.21.27,5,5,0,0,1,0,6.35,1.19,1.19,0,0,1,.18.15l1.43,1.43a2.78,2.78,0,0,1,.21.27c3.33,4.55-.64,8.41-3.83,11.53l-.82.82-3.55,3.73-.12.11c-3.25,3-6.48,3.74-10.21,4.65l-2.13.53-.06,0a12.7,12.7,0,0,1-5.49.39A8.1,8.1,0,0,1,14.28,116L1.89,103.55A4.6,4.6,0,0,1,.55,99.08,11.82,11.82,0,0,1,3,94.39L6.26,75.62v-.08c0-.23.08-.49.13-.78L0,68.38,42.16,26.22,66.33,50.39l-25,25Z',
                        view: '0 0 122.88 118.34'
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
                        image: 'M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973 0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355-.537 0-.856.371-.997.728-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01 1.279 0 2.238.857 2.238 2.699v3.699z',
                        view: '0 0 20 20'
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
                    childrens: this.$settings.store_languages.map(l=> {
                        return {
                            _id: l.code,
                            text: l.name,
                            url: `?lang=${l.code}`
                        }
                    })
                },
            ].filter(item=> item.active) ,
            currMenu: [
                {
                    _id: "currency",
                    text: this.$store.state.currency.code,
                    active: this.$settings.sections.footer.icons.currency,
                    title: this.$settings.sections.footer.icons.currency_text,
                    childrens: this.$settings.store_currencies.map(c=> {
                        return {
                            _id: c.code,
                            text: c.name,
                            url: `?cur=${c.code}`
                        }
                    })
                },
            ].filter(item=> item.active) 
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
            this.isVisible.Menu1= !this.isVisible.Menu1;
            }
        },
        showMenu2() {
            if (window.innerWidth < 1024) {
            this.isVisible.Menu2= !this.isVisible.Menu2;
            }
        },
        showPaymentMethods() {
            if (window.innerWidth < 1024) {
            this.isVisible.PaymentMethods= !this.isVisible.PaymentMethods;
            }
        },
        showLang() {
            if (window.innerWidth < 1024) {
            this.isVisible.Lang= !this.isVisible.Lang;
            }
        },
        showCurr() {
            if (window.innerWidth < 1024) {
            this.isVisible.Curr= !this.isVisible.Curr;
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
    