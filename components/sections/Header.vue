<template>
    <div class="mx-5">
        <si-app-loader placement="BEFORE_HEADER" />
        <!-- header -->
        <div class="relative border-b border-black">

            <div class="header-color header-text" :class="checkSubMenu() ? 'header-height' : 'header-height-no-menu'">
            </div>

            <transition name="header-slide">
                <header>
                    <div id="header" class="absolute top-0 left-0 right-0 z-20 header header-color">
                        <div style="height: 3.8rem;"
                            class="relative flex flex-wrap items-center justify-between px-5 lg:px-10">

                            <!-- show menu botton  -->
                            <div class="block transition-all ease-in-out delay-150 lg:hidden w-1/3">
                                <button @click="$store.state.showHeaderMenu = !$store.state.showHeaderMenu"
                                    aria-label="Search button" class="flex flex-col justify-center">
                                    <svg aria-label="menu icon" width="26" height="26" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.54 5.48H3.5a.48.48 0 01-.463-.662.47.47 0 01.443-.288h13A.48.48 0 0117 5a.49.49 0 01-.46.48zM16.54 15.48H3.5A.49.49 0 013 15a.48.48 0 01.48-.47h13A.471.471 0 0117 15a.48.48 0 01-.46.48zM16.54 10.48H3.5A.49.49 0 013 10a.48.48 0 01.48-.47h13A.48.48 0 0117 10a.49.49 0 01-.46.48z"
                                            fill="currentColor"></path>
                                    </svg>
                                </button>
                            </div>
                            <!-- show menu botton  -->

                            <!-- logo -->
                            <div class=" lg:w-1/6 w-1/3">
                                <div class="w-full ">
                                    <router-link class="flex justify-center w-full" to="/">
                                        <si-image width="60" height="60" property="height"
                                            class="w-1/2 lg:content-start content-center h-14"
                                            :src="section.logo ? section.logo.src : 'https://storeno.b-cdn.net/stores/6-2024/1718120749011.png'"
                                            alt="Store logo" />
                                    </router-link>
                                </div>
                            </div>
                            <!-- logo -->

                            <!-- NavBar Menu -->
                            <nav class="hidden lg:block lg:w-4/6 header-text">
                                <div v-if="menu" class="items-center justify-center hidden lg:flex text-sml scroll">
                                    <ul v-for="(item, i) in menu.items" :key="i"
                                        @mouseover="activeId = activeId = item._id"
                                        @mouseleave="activeId = activeId = null">
                                        <!-- main child -->
                                        <li class="flex items-center py-5 chivron-box ml-mr-2">
                                            <router-link :to="item.url" class=" hover:font-semibold ml-mr-1"
                                                :class="item.childrens.length > 0 ? '' : 'ml-mr-2'">
                                                <span class="truncate">{{ item.text }}</span>
                                            </router-link>
                                            <button aria-label="chivron-down" class="opacity-0 chivron-down"
                                                v-if="item.childrens.length > 0"
                                                @click="activeId = activeId != item._id ? item._id : null">
                                                <svg aria-label="chivron icon" width="6" height="5"
                                                    :class="[activeId == item._id ? 'rotate-180 transition-all delay-150 ease-linear' : '']"
                                                    viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.39.6a.54.54 0 00-.78 0L6 5.21 1.39.6a.54.54 0 00-.78 0 .55.55 0 000 .77L6 6.76l5.39-5.39a.55.55 0 000-.77z"
                                                        fill="currentColor"></path>
                                                </svg>
                                            </button>
                                        </li>
                                        <!-- main child -->
                                        <!-- sub child -->
                                        <transition name="slide">
                                            <div v-if="item._id == activeId && item.childrens.length > 0"
                                                class="absolute left-0 right-0 z-20 px-10 border-t border-b border-gray-300 header-color top-full">
                                                <div class="flex items-center scroll">
                                                    <div v-for="(item, i) in item.childrens" :key="i"
                                                        @mouseover="subItems = subItems = item.collectionId"
                                                        @mouseleave="subItems = subItems = null">
                                                        <div class="flex items-center py-5 chivron-box ml-mr-2">
                                                            <router-link class="hover:font-semibold ml-mr-1"
                                                                :to="item.url"
                                                                :class="item.childrens.length > 0 ? '' : 'ml-mr-2'">
                                                                <span class="truncate">{{ item.text }}</span>
                                                            </router-link>
                                                            <button aria-label="chivron-down"
                                                                class="opacity-0 chivron-down"
                                                                v-if="item.childrens.length > 0"
                                                                @click="subItems = subItems != item.collectionId ? item.collectionId : null">
                                                                <svg aria-label="chivron icon" width="6" height="5"
                                                                    :class="[subItems == item.collectionId ? 'rotate-180 transition-all delay-150 ease-linear' : '']"
                                                                    viewBox="0 0 12 7"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M11.39.6a.54.54 0 00-.78 0L6 5.21 1.39.6a.54.54 0 00-.78 0 .55.55 0 000 .77L6 6.76l5.39-5.39a.55.55 0 000-.77z"
                                                                        fill="currentColor"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <transition name="slide">
                                                            <div v-if="item.collectionId == subItems"
                                                                class="absolute left-0 right-0 z-20 px-10 border-t border-gray-300 header-color top-full">
                                                                <div class="flex flex-col pt-5 mb-2"
                                                                    v-if="item.childrens && item.childrens.length > 0">
                                                                    <div class="mb-3"
                                                                        v-for="(child, ii) in item.childrens" :key="ii">
                                                                        <nuxt-link class="hover:font-semibold"
                                                                            :to="child.url">
                                                                            <span class="truncate">{{ child.text
                                                                                }}</span>
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
                                </div>
                            </nav>
                            <!-- NavBar Menu -->

                            <!-- icons-->
                            <div class="w-1/3 lg:w-1/6 header-text">
                                <div class="flex items-center justify-end">
                                    <div class="flex items-center justify-between lg:gap-5 gap-2">
                                        <!-- search -->
                                        <div class="flex items-center">
                                            <!-- show search -->
                                            <transition name="slide-right">
                                                <div v-if="showSearch" @mouseleave="showSearch = false">
                                                    <form @submit.prevent="search"
                                                        class="flex items-center py-1 border-b search border-primary"
                                                        action="/shop?">
                                                        <input v-model="q" class="bg-transparent outline-none text-sml"
                                                            :placeholder="$settings.sections.header.search_text"
                                                            type="search" name="q">
                                                        <button aria-label="Search button">
                                                            <svg aria-label="search icon" width="24" height="24"
                                                                viewBox="0 0 20 20" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M17.17 16.48L12 11.36a5.5 5.5 0 10-4.22 2 5.41 5.41 0 003.51-1.27l5.14 5.13a.51.51 0 00.7 0 .5.5 0 00.04-.74zm-9.35-4.15a4.5 4.5 0 110-9 4.5 4.5 0 010 9z"
                                                                    fill="currentColor"></path>
                                                            </svg>
                                                        </button>
                                                    </form>
                                                </div>
                                            </transition>
                                            <!-- show search -->
                                            <!-- search icon -->
                                            <transition name="show">
                                                <button class="hidden lg:block py-2" @click="showSearch = true"
                                                    v-if="$settings.sections.header.icons.search && showSearch == false"
                                                    aria-label="Search button" title="Search">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18.279"
                                                        height="22.967" viewBox="0 0 18.279 22.967">
                                                        <path id="Path_14617" data-name="Path 14617"
                                                            d="M8.041,3.874a8.056,8.056,0,1,0,2.842,15.6l3.99,6.228.009.016a2.432,2.432,0,0,0,.528.665,1.493,1.493,0,0,0,.95.358,1.841,1.841,0,0,0,1.3-.511,1.813,1.813,0,0,0,.519-1.3v-.009a1.9,1.9,0,0,0-.332-1.039l-.009-.025L14.72,18.986a.52.52,0,0,0-.876.56l3.11,4.856.009.016a4.625,4.625,0,0,1,.178.487v.016a.747.747,0,0,1-.212.568.769.769,0,0,1-.568.212.371.371,0,0,1-.276-.113,1.593,1.593,0,0,1-.317-.406l-.007-.025L11.84,19.043a8.062,8.062,0,0,0-3.8-15.169m0,1.04a7.007,7.007,0,1,1-.02,0h.02"
                                                            transform="translate(0.05 -3.824)" stroke="#000"
                                                            stroke-width="0.1"></path>
                                                    </svg>
                                                    <small v-if="$route.query.search"
                                                        class="absolute flex items-center justify-center w-1 h-1 p-1 text-white bg-green-700 rounded-full -top-1 -right-1"></small>
                                                </button>
                                            </transition>
                                            <!-- search icon -->
                                        </div>
                                        <!-- search -->
                                        <!-- acount -->
                                        <div v-if="$settings.sections.header.icons.account"
                                            class="transition-all ease-in-out delay-150 user py-2">
                                            <router-link to="/account/orders" title="Account"
                                                class="hidden lg:flex lg:flex-col justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19.909" height="23.142"
                                                    viewBox="0 0 19.909 23.142">
                                                    <path id="Path_14616" data-name="Path 14616"
                                                        d="M63.839,25.266H44.976a.467.467,0,0,1-.5-.488c.015-.14-.039-2.645.05-2.689a9.762,9.762,0,0,1,7.247-8.7A5.717,5.717,0,0,1,49.03,5.661C52.746-1.1,62.862,3.677,59.705,10.712a5.951,5.951,0,0,1-5.348,3.257,8.892,8.892,0,0,0-8.936,8.8v1.466H63.292V22.773a8.684,8.684,0,0,0-3.68-7.088.486.486,0,0,1,.348-.831.453.453,0,0,1,.347.146,10,10,0,0,1,3.921,7.088.358.358,0,0,1,.05.244v2.445a.431.431,0,0,1-.439.488M59.371,8.16a4.905,4.905,0,0,0-5.013-4.789,4.838,4.838,0,1,0,.049,9.675,4.941,4.941,0,0,0,4.964-4.889"
                                                        transform="translate(-44.428 -2.175)" stroke="#000"
                                                        stroke-width="0.1" fill-rule="evenodd"></path>
                                                </svg>
                                            </router-link>
                                        </div>
                                        <!-- acount -->
                                        <!-- wishlist -->
                                        <div v-if="$settings.sections.header.icons.wishlist"
                                            class="hidden lg:block transition-all ease-in-out delay-150 heart py-2">
                                            <router-link to="/wishlist" title="Wishlist"
                                                class="relative flex flex-col justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink" width="23.907"
                                                    height="21.356" viewBox="0 0 23.907 21.356">
                                                    <defs>
                                                        <clipPath id="clip-path">
                                                            <rect id="Rectangle_951" data-name="Rectangle 951"
                                                                width="23.907" height="21.356"
                                                                transform="translate(0 0)"></rect>
                                                        </clipPath>
                                                    </defs>
                                                    <g id="Mask_Group_9081" data-name="Mask Group 9081"
                                                        clip-path="url(#clip-path)">
                                                        <path id="Path_14621" data-name="Path 14621"
                                                            d="M22.1,2.061A5.755,5.755,0,0,0,17.751,0a6.524,6.524,0,0,0-3.745,1.258A7.906,7.906,0,0,0,11.893,3.5,7.913,7.913,0,0,0,9.78,1.259,6.524,6.524,0,0,0,6.035,0a5.754,5.754,0,0,0-4.353,2.06A6.356,6.356,0,0,0,0,6.385a9.179,9.179,0,0,0,1.122,4.161,18.089,18.089,0,0,0,2.9,4,47.516,47.516,0,0,0,4.934,4.421c1.541,1.222,2.714,2.052,2.72,2.055l.009.005a.542.542,0,0,0,.054.031c.015.008.03.017.046.024s.032.01.049.015a.565.565,0,0,0,.058.017c.015,0,.031,0,.047,0s.041,0,.062,0,.034,0,.051-.005.038,0,.057-.008a.5.5,0,0,0,.049-.015.553.553,0,0,0,.057-.02.44.44,0,0,0,.039-.021.586.586,0,0,0,.061-.036l.008,0c.006,0,1.126-.834,2.614-2.054a52.68,52.68,0,0,0,4.823-4.415,18.081,18.081,0,0,0,2.9-4,9.18,9.18,0,0,0,1.122-4.161A6.357,6.357,0,0,0,22.1,2.061Zm-.442,7.92a16.915,16.915,0,0,1-2.715,3.733,51.539,51.539,0,0,1-4.712,4.311c-.733.6-1.376,1.108-1.836,1.462l-.411.315c-.487-.354-1.474-1.085-2.632-2.013a45.063,45.063,0,0,1-4.52-4.075A16.931,16.931,0,0,1,2.124,9.981a7.959,7.959,0,0,1-.986-3.6A5.123,5.123,0,0,1,2.515,2.873a4.627,4.627,0,0,1,3.52-1.681A5.427,5.427,0,0,1,9.141,2.245a6.76,6.76,0,0,1,2.237,2.724c0,.009.009.015.013.024s.02.037.031.055.021.03.031.045a.5.5,0,0,0,.038.043.491.491,0,0,0,.041.04c.013.012.028.022.043.033a.562.562,0,0,0,.052.033c.008,0,.014.01.022.014l.024.009a.6.6,0,0,0,.057.021.493.493,0,0,0,.051.014.5.5,0,0,0,.165.008A.532.532,0,0,0,12,5.3l.051-.014.057-.021.024-.009.022-.014a.607.607,0,0,0,.053-.033l.042-.032a.574.574,0,0,0,.043-.041c.012-.014.025-.027.036-.042s.023-.031.033-.047a.488.488,0,0,0,.029-.051c0-.009.01-.016.015-.025a6.758,6.758,0,0,1,2.237-2.724,5.431,5.431,0,0,1,3.106-1.053,4.63,4.63,0,0,1,3.52,1.681,5.123,5.123,0,0,1,1.377,3.512,7.961,7.961,0,0,1-.986,3.6Z"
                                                            transform="translate(0.001 0)"></path>
                                                    </g>
                                                </svg>
                                                <div v-if="$store.state.wishlist.length > 0"
                                                    class="absolute flex items-center justify-center w-4 h-4 text-xs text-white rounded-full bg-primary -top-2 -right-2">
                                                    <small class="w-auto h-auto">{{ $store.state.wishlist.length }}</small>
                                                </div>
                                            </router-link>
                                        </div>
                                        <!-- wishlist -->
                                        <!-- cart -->
                                        <div v-if="$settings.sections.header.icons.cart"
                                            class=" transition-all ease-in-out delay-150 cart py-2">
                                            <router-link to="/cart" title="Cart" id="cart-icon"
                                                class="relative flex flex-col justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink" width="21.905"
                                                    height="26.095" viewBox="0 0 21.905 26.095">
                                                    <g id="Group_9522" data-name="Group 9522">
                                                        <path id="Path_14634" data-name="Path 14634"
                                                            d="M20.491,24.654a1.342,1.342,0,0,1-.985.418H2.4a1.343,1.343,0,0,1-.985-.418,1.234,1.234,0,0,1-.342-.98L2.808,5.821H5.642v1.1a1.022,1.022,0,0,0-.5.872,1.075,1.075,0,0,0,2.149,0,1.028,1.028,0,0,0-.581-.915V5.821h8.449V6.9a1.026,1.026,0,0,0-.542.895,1.075,1.075,0,0,0,2.149,0,1.025,1.025,0,0,0-.542-.895V5.821H19.1l1.736,17.852a1.233,1.233,0,0,1-.342.98M10.933,1.023A4.162,4.162,0,0,1,15.146,4.8H6.719a4.162,4.162,0,0,1,4.213-3.775M21.894,23.578,20.113,5.262a.525.525,0,0,0-.531-.464H16.215A5.209,5.209,0,0,0,10.933,0,5.209,5.209,0,0,0,5.65,4.8H2.322a.525.525,0,0,0-.531.464L.01,23.578a2.249,2.249,0,0,0,.615,1.765,2.45,2.45,0,0,0,1.773.752H19.506a2.45,2.45,0,0,0,1.773-.752,2.25,2.25,0,0,0,.615-1.765"
                                                            transform="translate(0 0)" fill-rule="evenodd"></path>
                                                    </g>
                                                </svg>
                                                <div v-if="$store.state.cart.length > 0"
                                                    class="absolute flex items-center justify-center w-4 h-4 text-xs text-white rounded-full bg-primary -top-2 -right-2">
                                                    <small>{{ $store.state.cart.length }}</small>
                                                </div>
                                            </router-link>
                                        </div>
                                        <!-- cart -->

                                    </div>
                                </div>
                            </div>
                            <!-- search -->
                        </div>
                    </div>
                    <!--  -->
                </header>
            </transition>
        </div>
        <!-- header -->
        <si-app-loader placement="AFTER_HEADER" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            subItems: null,
            activeId: null,
            showSearch: false,
            lastScrollPosition: 0,
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
                this.$nextTick(() => {
                    document.querySelector('form.search input').focus();
                })
            }
        }
    },
    methods: {
        search() {
            this.$store.state.search = this.q;
            this.$router.push({ path: '/shop', query: { search: this.q } });
        },
        handleScroll() {
            const header = document.getElementById('header');
            const currentScrollPosition = window.pageYOffset;
            if (currentScrollPosition <= 80) {
                header.style.position = 'absolute';
                header.style.animation = 'opacity 2s ease-in-out';
            }
            else {
                if (currentScrollPosition <= this.lastScrollPosition) {
                    header.style.position = 'fixed';
                    header.style.animation = 'opacity 2s ease-in-out';
                } else {
                    header.style.position = 'absolute';
                    header.style.animation = 'opacity 2s ease-in-out';
                }
                this.lastScrollPosition = currentScrollPosition;
            }
        },
        checkSubMenu() {
            const hasChildren = this.menu && this.menu.items.find(parent => parent.childrens && parent.childrens.length > 0);
            if (hasChildren) return true;
            else return false;
        }
    },
}
</script>

<style scoped>
.w-4\.5 {
    width: 18px;
}

.h-4\.5 {
    height: 18px;
}

@keyframes opacity {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
}

.ml-mr-1 {
    margin-right: 0.25rem;
}

[dir="rtl"] .ml-mr-1 {
    margin-left: 0.25rem;
    margin-right: 0;
}

.ml-mr-2 {
    margin-right: 0.5rem;
}

[dir="rtl"] .ml-mr-2 {
    margin-left: 0.5rem;
    margin-right: 0;
}

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

.scroll {
    overflow-x: auto;
}

.scroll::-webkit-scrollbar {
    width: 5px;
    height: 2px;
}

.scroll::-webkit-scrollbar-track {
    background-color: #757575;
}

.scroll::-webkit-scrollbar-thumb {
    background-color: #222;
    border-radius: 10px;
    cursor: pointer;
}

.scroll::-webkit-scrollbar-thumb:hover {
    background-color: #757575;
}

.header-height-no-menu {
    height: 62px;
}

@media (max-width: 1024px) {
    .header-height {
        height: 62px;
    }
}

@media (min-width: 1024px) {
    .header-height {
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

.show-enter-to,
.slide-leave {
    opacity: 1;
}

.show-enter,
.slide-leave-to {
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
