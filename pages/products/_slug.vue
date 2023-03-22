<template>
    <div class="bg-white">
        <!-- Loader -->
        <div v-if="loading" class="flex justify-center items-center my-5">
            <si-loader></si-loader>
        </div>
        <!-- Loader -->
        <div v-if="!loading && item">
            <!-- Product id -->
            <meta itemprop="productID" :content="item._id" />
            <!-- Product id -->
            <div class="lg:p-5 xl:py-7 xl:px-10">
                <div class="flex flex-wrap justify-between">
                    <!-- shows images when click -->
                    <transition name="fade">
                        <div v-if="showImageSlider" class="bg-white fixed inset-0 z-50">
                            <div @click="showBodyScroll">
                                <div @click="showImageSlider=false" class="absolute top-0 right-0 z-50 cursor-pointer py-8 px-4 md:px-10 md:py-10">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.71 10l4.65-4.66a.495.495 0 10-.7-.7L10 9.29 5.34 4.64a.495.495 0 00-.7.7L9.29 10l-4.65 4.66a.48.48 0 000 .7.481.481 0 00.7 0L10 10.71l4.66 4.65a.482.482 0 00.7 0 .48.48 0 000-.7L10.71 10z" fill="currentColor"></path></svg>
                                </div>  
                            </div>
                            <div class="flex items-center flex-wrap justify-between h-full lg:p-10 relative">
                                <div class="hidden lg:flex flex-col items-center">
                                    <div @click="increaseSize" class=" border border-gray-300 hover:border-primary transition delay-150 ease-in-out m-2.5 w-7 h-7 flex items-center justify-center cursor-pointer">
                                        <svg class="w-2.5 h-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 9.4h-4.9V4.5a.6.6 0 10-1.2 0v4.9H4.5a.6.6 0 000 1.2h4.9v4.9a.6.6 0 001.2 0v-4.9h4.9a.6.6 0 100-1.2z" fill="currentColor"></path></svg>
                                    </div>
                                    <div class="flex items-center justify-center ">
                                        <span class="text-base"> {{ zoom }} %</span>
                                    </div>
                                    <div @click="decreaseSize" class=" border border-gray-300 hover:border-primary transition delay-150 ease-in-out m-2.5 w-7 h-7 flex items-center justify-center cursor-pointer">
                                        <svg class="w-2.5 h-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 9.45h-11a.55.55 0 000 1.1h11a.55.55 0 000-1.1z" fill="currentColor"></path></svg>
                                    </div>
                                </div>
                                <div class="flex-1 lg:px-20 xl:px-40 lg:relative">
                                    <div class="overflow-hidden" @dblclick="toggleZoom" @mousedown.prevent @mousedown="startDrag" @mousemove="dragImage" @mouseup="stopDrag">
                                        <div class="pb-3/5-res relative" ref="image" :style="{ transform: 'scale(' + imageScale + ') translate(' + posX + 'px, ' + posY + 'px)'}" v-show="visibleSlide === index" v-for="(image, index) in item.images" :key="index" :index="index">
                                            <si-image width="400" height="400" class="h-full w-full absolute inset-0 object-contain cursor-pointer" :src="image ? image.src : null " :alt="item.name" />
                                        </div>
                                    </div>
                                    <div class="absolute lg:static my-8 md:my-10 lg:my-0 bottom-0 lg:bottom-auto left-1/2 lg:left-auto transform lg:transform-none -translate-x-1/2 lg:translate-x-0">
                                        <div class="flex lg:block items-center">
                                            <button v-if="item.images.length > 1" class="mx-5 lg:absolute lg:top-1/2 lg:left-1 xl:left-5 lg:transform lg:-translate-y-1/2 p-2 md:p-2.5 bg-white transition-all ease-linear delay-150  rounded-full border border-gray-300 hover:border-primary" @click="prev">
                                                <svg class="rotate-chivron w-5 h-5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 15.54a.54.54 0 01-.39-.16L6.72 10l5.39-5.4a.551.551 0 11.78.78L8.28 10l4.61 4.61a.56.56 0 010 .78.54.54 0 01-.39.15z" fill="currentColor"></path></svg>
                                            </button>
                                            <div v-if="item.images.length > 1" class="flex items-center justify-center lg:hidden">
                                                <div class="mx-1" v-for="(image, index) in item.images" :key="index" >
                                                    <div class="h-1.5 w-1.5 rounded-full cursor-pointer" :class="visibleSlide == index ? 'bg-primary w-2 h-2' : 'bg-gray-300'" @click="setImage(index)"></div>
                                                </div>
                                            </div>
                                            <button v-if="item.images.length > 1" class="mx-5 lg:absolute lg:top-1/2 lg:right-1 xl:right-5 lg:transform lg:-translate-y-1/2 p-2 md:p-2.5 bg-white transition-all ease-linear delay-150 rounded-full border border-gray-300 hover:border-primary" @click="next">
                                                <svg class="rotate-chivron w-5 h-5"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.89 4.6a.552.552 0 00-.78.78L11.72 10l-4.61 4.6a.56.56 0 000 .78.56.56 0 00.78 0L13.28 10 7.89 4.6z" fill="currentColor"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="hidden lg:block scroll overflow-y-scroll">
                                    <div style="max-height: 70vh;">
                                        <si-image  class="w-16 h-16 cursor-pointer object-cover mb-4" :class="visibleSlide == index ? 'opacity-100' : 'opacity-50'" v-for="(image, index) in item.images" @click="setImage(index)" :key="index" :src="image.src" :alt="`${item.name} - ${image.title}`"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                    <!-- shows images when click -->
                    <!--  -->
                    <div style="height: fit-content;"  class="w-full lg:w-3/5 lg:sticky lg:top-7">
                        <div class="flex flex-col">
                            <div class="w-full">
                                <div v-show="visibleSlide === index" v-for="(image, index) in item.images" :key="index" :index="index" class="pb-2/3-res relative overflow-hidden">
                                    <div @click="hideBodyScroll">
                                        <si-image width="400" height="400" class="h-full w-full absolute inset-0 object-cover cursor-pointer" @click="showImageSlider=true" :src="image ? image.src : null " :alt="item.name" />
                                    </div>
                                    <div v-if="$settings.sections.products.add_to_wishlist.active">
                                        <transition name="fade">
                                            <button v-if="$store.state.wishlist.find(i=>i._id==item._id)" @click="removeFromWishlist" title="Wishlist" class="box-shadow-xs bg-white rounded-full absolute z-10 top-0 right-0 m-2 md:m-3 p-3 md:p-3.5 transition-all ease-linear delay-150  hover-bg">
                                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 translate text-primary align-middle"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                                            </button>
                                        </transition>
                                        <transition name="fade">
                                            <button v-if="!$store.state.wishlist.find(i=>i._id==item._id)" @click="addToWishlist" title="Wishlist" class="box-shadow-xs bg-white rounded-full absolute z-10 top-0 right-0 m-2 md:m-3 p-3 md:p-3.5 transition-all ease-linear delay-150 hover-bg">
                                                <svg class="w-5 h-5 translate" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.48 3.91a3.25 3.25 0 012.68 1.62L10 6.85l.83-1.33a3.12 3.12 0 012.63-1.61 2.8 2.8 0 012.08.93c1.48 1.59 1.33 3.78-.37 5.57L10 15.66l-5.22-5.3c-1.67-1.85-1.8-4-.36-5.53a2.8 2.8 0 012.06-.92zm0-1a3.8 3.8 0 00-2.79 1.24C1.94 6 2 8.73 4 11l6 6.06 5.9-6c2.16-2.27 2.15-5.06.4-6.95a3.871 3.871 0 00-2.82-1.25A4.1 4.1 0 0010 5a4.23 4.23 0 00-3.52-2.09z" fill="currentColor"></path></svg>
                                            </button>
                                        </transition>
                                    </div>
                                    <div v-if="item.images.length > 1" class="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:hidden">
                                        <div class="flex py-5">
                                            <div class="mx-1" v-for="(image, index) in item.images" :key="index" >
                                                <div class="h-1.5 w-1.5 rounded-full cursor-pointer" :class="visibleSlide == index ? 'bg-primary w-2. h-2' : 'bg-gray-300'" @click="setImage(index)"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hidden lg:flex flex-wrap pt-2.5">
                                <div class="w-1/2 products-padding py-2.5" v-for="(image, index) in item.images.slice(1)"  :key="index">
                                    <div @click="hideBodyScroll" class="pb-full relative overflow-hidden">
                                        <si-image  class="h-full w-full absolute inset-0 object-cover cursor-pointer" @click="showImageSlider=true;setImage(index)"  :src="image.src" :alt="`${item.name} - ${image.title}`"/>
                                    </div>   
                                </div>
                            </div> 
                        </div>
                    </div>
                    <!--  -->
                    <!-- Product content -->
                    <div style="height: fit-content;"  class="content-part w-full lg:w-2/5 pl-6% lg:sticky lg:top-5">
                        <div class="px-5 lg:px-0 pt-5 lg:pt-0">
                            <div class="bg-white ">
                            <!--  product name hidden-->
                            <meta itemprop="name" :content="item.name" />
                            <!--  product name hidden-->
                            <!--  Product Name -->
                            <h4 class="text-xl md:text-2xl my-3">{{ item.name }}</h4>
                            <!--  Product Name -->
                            <!-- Price  -->
                            <div class="flex justify-between items-center">
                                <!-- Price -->
                                <si-product-price class="flex items-center text-base" :type="'simple'" :price="price" :variants="[]"></si-product-price>
                                <!-- Price -->
                                <!-- reviews -->
                                <div class="flex items-center justify-start" v-if="$settings.sections.product.reviews.active">
                                    <div class="flex mx-1">
                                        <span class="mx-0.5 bg-text-primary" v-for="(star,i) in 5" :class="star <= item.review.rating ? 'text-yellow-500 ': ''" :key="i">
                                            <svg class="w-3 h-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg>
                                        </span>
                                    </div>
                                    <span class="text-sml" key="count">({{ item.review.reviews.length }} {{$settings.sections.product.reviews.name}})</span>
                                </div>
                                <!-- reviews -->
                            </div>
                            <!-- Price -->
                            <!-- short description -->
                            <p class="text-sml pt-3">{{ item.description }}</p>
                            <!-- short description -->
                            <!-- variant -->
                            <si-product-variants class="flex text-sml" v-if="item.type=='variable'" :options="item.options" :variants="item.variants" @selected="variantSelected"></si-product-variants>
                            <!-- variant -->
                            <!-- product cart -->
                            <!-- product quantity -->
                            <div class="flex items-center justify-between my-3" :class="item.type!='variable'?'border-t border-gray-300 pt-3':''">
                                <h2 class="text-sml ">{{ $settings.sections.product.quantity.text }}</h2>
                                <div class="">
                                    <si-product-quantity @selected="quantitySelected" :quantity="quantity" page="product"></si-product-quantity>
                                </div>
                            </div>
                            <!-- product quantity -->
                            <!--  -->
                            <div v-if="$settings.sections.product.add_to_cart.active || $settings.sections.product.buy_now.active" class="py-3">
                                <si-app-loader placement="BEFORE_ADD_TO_CART"/>
                                <!-- add to cart -->
                                <button v-if="$settings.sections.product.add_to_cart.active" :class="$settings.sections.product.buy_now.active ? 'mb-3':''" @click="addToCart" class="text-sml ml-font-bold-hover w-full flex  justify-center border border-primary rounded-full p-4 px-5 click-effect">
                                    <span>{{ $settings.sections.product.add_to_cart.text }}</span>
                                </button>
                                <!-- add to cart -->
                                <si-app-loader placement="AFTER_ADD_TO_CART"/>
                                <si-app-loader placement="BEFORE_BUYNOW"/>
                                <si-app-loader placement="REPLACE_BUYNOW"/>
                                <!-- buy now -->
                                <button v-if="$settings.sections.product.buy_now.active" v-show="!$store.state.apps.find(a=>a.placement.indexOf('REPLACE_BUYNOW') >= 0)" @click="buyNow" class="text-sml ml-font-bold-hover w-full flex  justify-center border border-primary rounded-full p-4 px-5 click-effect">
                                    <span>{{ $settings.sections.product.buy_now.text }}</span>
                                </button>
                                <si-app-loader placement="AFTER_BUYNOW"/>
                                <!-- buy now -->
                            </div>
                            <!--  -->
                        </div>
                        </div>
                        <!-- Description -->
                        <div class="pt-3">
                            <si-app-loader placement="BEFORE_DESCRIPTION"/>
                            <div class="border-t border-b lg:border-l lg:border-r border-gray-300 text-sml lg:rounded-md p-5">
                                <div @click="showDescription" class="flex justify-between items-center cursor-pointer">
                                    <div>
                                        <span class="text-sml ml-font-bold">{{ $settings.sections.product.description.title }}</span>
                                    </div>
                                    <div>
                                        <svg width="20" height="20" :class="description ? 'rotate-180 transition-all delay-150 ease-linear':''" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 7.6a.54.54 0 00-.78 0L10 12.21 5.39 7.6a.54.54 0 00-.78 0 .55.55 0 000 .77L10 13.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor"></path></svg>
                                    </div>
                                </div>
                                <transition name="slide">
                                    <div class="pt-3" v-if="description == true && item.html.length > 0">
                                        <div id="description" v-html="item.html"></div>
                                    </div>
                                </transition>
                            </div>
                            <si-app-loader placement="AFTER_DESCRIPTION"/>
                        </div>
                        <!-- Description -->
                        <!-- share products icons -->
                        <div v-if="$settings.sections.product.share_buttons.active">
                            <h3 class="text-center-res text-sml ml-font-bold py-3">{{ $settings.sections.product.share_buttons.title }}</h3>
                            <div class="flex items-center justify-center lg:justify-start gap-3">
                                <div v-for="item in socialMedia.filter(s=>$settings.sections.product.share_buttons[s.name])" :key="item.name" class="flex items-center justify-center">
                                    <a class="h-full flex" :href="item.url" target="_blank" rel="noopener noreferrer">
                                        <svg class="opacity-90" fill-rule="evenodd" width="30" height="30" :viewBox="item.view" fill="none" xmlns="http://www.w3.org/2000/svg"><path :d="item.image" fill="currentColor"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- share products icons -->
                    </div>
                    <!-- Product content -->
                </div>
            </div>
            <div class="flex flex-col pb-16">
                <div class="replace-reviews">
                    <div v-if="item && $settings.sections.product.reviews.active" class="reviews">
                        <sections-reviews v-show="!$store.state.apps.find(a=>a.placement.indexOf('REPLACE_REVIEWS') >= 0)" :item="item"></sections-reviews>
                    </div>
                    <div class="px-5 xl:px-10">
                        <si-app-loader  placement="REPLACE_REVIEWS"/>
                    </div>
                </div>
                <!-- upsells  -->
                <div v-if="item && $settings.sections.product.upsell.active" class="upsells">
                    <sections-upsell :item="item.upsell"/>
                </div>
                <!-- upsells -->
                <!-- related Products  -->
                <div v-if="item && $settings.sections.product.related.active" class="related">
                    <sections-related-products :item="item"/>
                </div>
                <!-- related Products  -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showImageSlider:false,
                zoomed: false,
                zoom: 0,
                imageScale: 1,
                posX: 0,
                posY: 0,
                isDragging: false,
                startMouseX: 0,
                startMouseY: 0,
                description: true,
                Reviews: false,
                visibleSlide: 0,
                direction:'',
                loading: true,
                item: null,
                image: null,
                tab: 'description',
                quantity: {},
                variant: null,
                price: { salePrice: 0, comparePrice: 0 },
                socialMedia: [
                    {
                    name: "whatsapp",
                    url: "https://api.whatsapp.com/send?text={title}%20{url}",
                    image:
                        "M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm700 952c-175-175-407-271-655-271-510 0-925 415-925 925 0 163 43 322 124 462l-131 480 491-129c135 74 287 113 442 113 510 0 925-415 925-925 0-247-96-480-271-655zm-654 1424c-138 0-274-37-392-107l-28-17-291 76 78-284-18-29c-77-122-118-264-118-409 0-424 345-769 770-769 205 0 399 80 544 225 145 146 225 338 225 544 0 424-345 770-769 770zm422-576c-23-12-137-67-158-75s-37-12-52 12c-15 23-60 75-73 91-14 15-27 18-50 6s-98-36-186-115c-69-61-115-137-129-160s-2-36 10-47c11-10 23-27 35-41s15-23 23-39c8-15 4-29-2-41s-52-125-71-172c-19-45-38-39-52-40s-29-1-44-1-40 6-62 29c-21 23-81 79-81 193s83 224 94 239c12 15 163 249 395 349 55 24 98 38 132 49 55 17 106 15 146 9 44-7 137-56 156-110s19-100 14-110-21-16-44-28z",
                    view: "0 0 3333 3333"
                    },
                    {
                    name: "facebook",
                    url: "https://www.facebook.com/sharer.php?u={url}",
                    image:
                        "M30.996 16.091c-0.001-8.281-6.714-14.994-14.996-14.994s-14.996 6.714-14.996 14.996c0 7.455 5.44 13.639 12.566 14.8l0.086 0.012v-10.478h-3.808v-4.336h3.808v-3.302c-0.019-0.167-0.029-0.361-0.029-0.557 0-2.923 2.37-5.293 5.293-5.293 0.141 0 0.281 0.006 0.42 0.016l-0.018-0.001c1.199 0.017 2.359 0.123 3.491 0.312l-0.134-0.019v3.69h-1.892c-0.086-0.012-0.185-0.019-0.285-0.019-1.197 0-2.168 0.97-2.168 2.168 0 0.068 0.003 0.135 0.009 0.202l-0.001-0.009v2.812h4.159l-0.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814v-0z",
                    view: "0 0 32 32"
                    },
                    {
                    name: "twitter",
                    url: "https://twitter.com/intent/tweet?url={url}&text={title}",
                    image:
                        "M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2  c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7  c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9  C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5  c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6  c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z",
                    view: "-143 145 512 512"
                    },
                    {
                    name: "linkedin",
                    url: "https://www.linkedin.com/sharing/share-offsite/?url={url}",
                    image:
                        "M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9  V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7  C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6  c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z  ",
                    view: "-143 145 512 512"
                    }
                ]
            }
        },
        async fetch() {
            const { slug } = this.$route.params;
            try{
                const { data } = await this.$storeino.products.get({ slug }) 
                this.item = data;
                this.$store.state.seo.title = (this.item.seo.title || this.item.name) + ' - ' + this.$settings.store_name;
                this.$store.state.seo.description = this.item.seo.description || this.item.description || this.$settings.store_description;
                this.$store.state.seo.keywords = this.item.seo.keywords.length > 0 ? this.item.seo.keywords || [] : this.$settings.store_keywords || [];
                if(this.item.images.length > 0){ this.$store.state.seo.image = this.item.images[0].src; }
                // New meta tags
                [ { hid: "product:price:amount", property: "product:price:amount", content: this.price.salePrice },
                { hid: "productID", itemprop: "productID", content: this.item && this.item ? this.item._id : 'productID' }
                ].forEach(meta=>{
                    const index = this.$store.state.seo.metaTags.findIndex(m=>m.hid === meta.hid);
                    if(index > -1){ this.$store.state.seo.metaTags.splice(index, 1, meta); }
                    this.$store.state.seo.metaTags.push(meta);
                });
                this.loading = false;
                this.quantity = this.item.quantity;
                // Set default image if exists
                if(this.item.images.length > 0) this.setImage(0);
                // Set default variant if exists
                if(this.item.type == 'variable' && this.item.variants.length > 0) this.variantSelected(this.item.variants[0]);
                // Set default quantity
                this.quantitySelected(this.quantity.default);
                // Generate share urls
                let url = `https://${this.$store.state.domain}/posts/${slug}`;
                for (const button of this.socialMedia) {
                    button.url = button.url.replace(/\{title\}/gi, this.item.name).replace(/\{url\}/gi, url);
                }
                if(!process.server){
                    this.$storeino.fbpx('PageView')
                this.$storeino.fbpx('ViewContent',{
                content_name: this.item.name?this.item.name:'',
                content_ids: [this.item._id],
                content_type: "product",
                value: this.item.price.salePrice,
                currency: this.$store.state.currency.code
                })
                    this.$tools.call('PAGE_VIEW', this.item);
                }
            }catch(e){
                // Redirect to error page if product not exists
                this.$nuxt.error({ statusCode: 404, message: 'product_not_found' })
            }
        },
        mounted() {
            if(this.item) this.$tools.call('PAGE_VIEW', this.item);
            window.addEventListener("APP_LOADER", () => {
                window.dispatchEvent(new CustomEvent('CURRENT_PRODUCT', {
                    detail: {
                        product_id: this.item._id,
                        product_quantity: this.quantity.value,
                        product_variant: this.variant ? this.variant._id : undefined,
                        product_currency: this.$store.state.currency.code,
                        product_price: this.price
                    }
                }));
            });
            if(this.item){
                this.$storeino.fbpx('PageView')
                this.$storeino.fbpx('ViewContent',{
                    content_name: this.item.name?this.item.name:'',
                    content_ids: [this.item._id],
                    content_type: "product",
                    value: this.item.price.salePrice,
                    currency: this.$store.state.currency.code
                })
            }
            if(this.item){
                const iframes=document.querySelectorAll('iframe')
                for(const ifram of iframes){
                const parent = ifram.parentNode
                if (!parent.classList.contains('video-wrapper')) {
                    const div = document.createElement("div");
                    ifram.after(div)
                    div.classList.add('video-wrapper');
                    ifram.style.width=null;
                    ifram.style.height=null;
                    ifram.setAttribute('width','');
                    ifram.setAttribute('height','');
                    div.appendChild(ifram)
                }
                }
            }
        },
        computed: {
            slidesLen() {
                return this.item.images.length
            }
        }
        ,
        methods: {
            toggleZoom() {

                    if(window.innerWidth < 1024) {
                        if (this.zoomed) {
                            // Zoom out
                            this.imageScale = 1;
                            this.zoom = 0;
                            this.zoomed = false
                        } else {
                            // Zoom in
                            this.imageScale = 4;
                            this.zoom = 60;
                            this.zoomed = true
                        }
                    }
                },
            startDrag(event) {
                this.isDragging = true;
                this.startMouseX = event.clientX;
                this.startMouseY = event.clientY;
            },
            dragImage(event) {
                if (this.isDragging && this.imageScale > 1) {
                    const deltaX = event.clientX - this.startMouseX;
                    const deltaY = event.clientY - this.startMouseY;
                    this.posX += deltaX;
                    this.posY += deltaY;
                    this.startMouseX = event.clientX;
                    this.startMouseY = event.clientY;
                }
            },
            stopDrag() {
                this.isDragging = false;
                this.posX  = 0; 
                this.posY  = 0; 
            },
            increaseSize() {
                const currentScale = this.imageScale;
                if (currentScale < 6) {
                    this.imageScale = currentScale + 1;
                    this.zoom = this.zoom + 20;
                }
            },
            decreaseSize() {
                const currentScale = this.imageScale;
                if (currentScale > 1) {
                    this.imageScale = currentScale - 1;
                    this.zoom = this.zoom - 20;
                }
            },
            next(){
                if(this.visibleSlide >= this.slidesLen - 1 ){
                    this.visibleSlide = 0
                }else {
                    this.visibleSlide ++
                }
                this.direction = 'left'
            },
            prev() {
                if(this.visibleSlide <= 0 ){
                    this.visibleSlide = this.slidesLen - 1
                }else {
                    this.visibleSlide --
                }
                this.direction = 'right'
            },
            addToCart() {
                // Call add to cart event
                this.$tools.call('ADD_TO_CART', {
                    _id: this.item._id,
                    quantity: this.quantity.value,
                    price: this.variant?this.variant.price.salePrice : this.item.price.salePrice,
                    variant: this.variant ? { _id: this.variant._id } : null
                });
                if(this.$settings.sections.products.add_to_cart_to_checkout){
                    setTimeout(() => {
                            window.location.href = '/checkout2';
                    }, 500);
                }
                this.$tools.toast(this.$settings.sections.alerts.added_to_cart);
            },
            addToWishlist(){
                this.$tools.call('ADD_TO_WISHLIST', this.item);
                this.$tools.toast(this.$settings.sections.alerts.added_to_wishlist);
            },
            removeFromWishlist(){
                this.$tools.call('REMOVE_FROM_WISHLIST', this.item);
                this.$tools.toast(this.$settings.sections.alerts.removed_from_wishlist);
            },
            buyNow() {
                // Add to cart and redirect to checkout
                this.addToCart();
                setTimeout(() => {
                    window.location.href = '/checkout2';
                }, 500);
            },
            quantitySelected(quantity) {
                this.item.quantity.value = quantity;
                if(this.variant){
                    this.price.salePrice = this.variant.price.salePrice * quantity;
                    this.price.comparePrice = this.variant.price.comparePrice * quantity;
                }else{
                    this.price.salePrice = this.item.price.salePrice * quantity;
                    this.price.comparePrice = this.item.price.comparePrice * quantity;
                }
            },
            variantSelected(variant) {
                this.variant = variant;
                if(variant.imageId && this.item.images.length > 0){
                    let index = this.item.images.findIndex(i=>i._id == variant.imageId);
                    if(index == -1) index = 0;
                    this.image = this.item.images[index];
                }else if(this.item.images.length > 0){
                    this.image = this.item.images[0];
                }
                this.quantitySelected(this.item.quantity.value);
            },
            setImage(index){
                this.visibleSlide = index
                //   this.image = this.$tools.copy(this.item.images[index]);
            },
            setTab(tab){
                this.tab = tab;
                if(tab == 'reviews' && this.reviews.results.length == 0) this.getReviews();
            },
            hideBodyScroll() {
                document.body.style.overflow = 'hidden';
            },
            showBodyScroll() {
                document.body.style.overflow = 'auto';
            },
            showDescription(){
                this.description = !this.description;
            }
        },
    }
</script>

<style scoped>
@media (max-width: 1024px) {
    [dir='rtl'] svg.rotate-chivron{
      transform: rotateY(180deg);
    }
}

.pb-3\/5-res{
  padding-bottom: 70%;
}

.pb-2\/3-res{
  padding-bottom: 100%;
}

@media (min-width: 1024px) {
    .pb-3\/5-res{
        padding-bottom: 60%;
    }

    .pb-2\/3-res{
        padding-bottom: 66.6667%;
    }
}

/* Product padding */
@media (min-width: 1024px) { 
  .products-padding:nth-child(odd) {
    padding-right: 0.625rem;
  }
  .products-padding:nth-child(even) {
    padding-left: 0.625rem;
  }

  [dir="rtl"] .products-padding:nth-child(odd) {
    padding-left: 0.625rem;
    padding-right: 0;
  }
  [dir="rtl"] .products-padding:nth-child(even) {
    padding-right: 0.625rem;
    padding-left: 0;
  }
}

/* Product padding */
.pl-6\% {
    padding-left: 0%;
}

@media (min-width: 1024px) {
    .pl-6\% {
        padding-left: 6%;
    }

    [dir="rtl"] .pl-6\% {
        padding-right: 6%;
        padding-left: 0;
    }
}

.video-wrapper {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-top: 56.25%;
}

.video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
}

.scroll::-webkit-scrollbar {
    display: none;
}
</style>
  