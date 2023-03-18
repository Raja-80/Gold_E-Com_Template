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
                                    <a class="h-full flex" :href="$settings.sections.footer.social_media[item.name]" target="_blank" rel="noopener noreferrer">
                                        <si-image class="h-7 w-7" width="40" height="40" :src="item.image" :alt="item.name"/>
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
                            <div v-for="item in methods.filter(m=>$settings.sections.footer.methods[m.name])" :key="item.name" class="flex ml-mr-4 mt-4">
                                <si-image  width="60" height="20" :src="item.image" :alt="item.name" class="h-full w-8 object-contain"/>
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
                        image: 'https://cdn-icons-png.flaticon.com/512/493/493837.png'
                    },
                    {
                        name: 'mastercard',
                        image: 'https://cdn-icons-png.flaticon.com/512/8765/8765366.png'
                    },
                    {
                        name: 'transfer',
                        image: 'https://cdn-icons-png.flaticon.com/512/1771/1771211.png'
                    },
                    {
                        name: 'cash',
                        image: 'https://cdn-icons-png.flaticon.com/512/5074/5074322.png'
                    },
                    {
                        name: 'paypal',
                        image: 'https://cdn-icons-png.flaticon.com/512/356/356107.png'
                    },
                ],
                socialMedia: [
                    {
                        name: 'facebook',
                        image: 'https://cdn-icons-png.flaticon.com/512/4406/4406234.png'
                    },
                    {
                        name: 'twitter',
                        image: 'https://cdn-icons-png.flaticon.com/512/356/356076.png'
                    },
                    {
                        name: 'instagram',
                        image: 'https://cdn-icons-png.flaticon.com/512/1362/1362857.png'
                    },
                    {
                        name: 'youtube',
                        image: 'https://cdn-icons-png.flaticon.com/512/4628/4628711.png'
                    },
                    {
                        name: 'linkedin',
                        image: 'https://cdn-icons-png.flaticon.com/512/356/356096.png'
                    },
                    {
                        name: 'whatsapp',
                        image: 'https://cdn-icons-png.flaticon.com/512/160/160200.png'
                    },
                    {
                        name: 'snapchat',
                        image: 'https://cdn-icons-png.flaticon.com/512/1383/1383333.png'
                    },
                    {
                        name: 'tiktok',
                        image: 'https://cdn-icons-png.flaticon.com/512/3046/3046122.png'
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
    