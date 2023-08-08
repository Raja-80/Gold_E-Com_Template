<template>
    <div>
        <!-- loader -->
        <div v-if="loading.cart && loading.upsells" class="flex items-center justify-center my-5">
            <si-loader></si-loader>
        </div>
        <!-- loader -->
        <!-- empty cart -->
        <div v-if="!loading.cart && items.length == 0" class="flex justify-center p-5">
            <div class="flex flex-col items-center">
                <h2 class="w-full mb-3 text-lg text-center">{{ $settings.sections.cart.empty_text }}</h2>
                <nuxt-link to="/shop" class="flex items-center justify-center px-4 py-2 border rounded-full border-primary">
                    <span class="w-full text-sml ml-font-bold-hover">{{ $settings.sections.cart.buttons.back_to_shop_text }}</span>
                </nuxt-link>
            </div>
        </div>
        <!-- empty cart -->
        <div class="mb-16" v-if="!loading.cart && !loading.upsells && items.length > 0">
            <!-- title -->
            <div class="px-5 my-5 xl:px-10">
                <h2 class="text-lg ml-font-bold">{{$settings.sections.cart.title}}</h2>
            </div>
            <!-- title -->
            <div class="flex flex-col">
                <!-- cart -->
                <div class="flex flex-col px-5 cart-items xl:px-10">
                    <div class="hidden lg:flex pb-2.5">
                        <div class="flex items-center w-1/12">
                            <span class="text-sml ml-font-bold">{{ $settings.sections.cart.product_text }}</span>
                        </div>
                        <div class="flex w-11/12">
                            <div class="flex items-center justify-center w-5/12"></div>
                            <div class="flex items-center justify-center w-3/12">
                                <span class="text-sml ml-font-bold">{{ $settings.sections.cart.quantity_text }}</span>
                            </div>
                            <div class="flex items-center justify-center w-2/12">
                                <span class="text-sml ml-font-bold">{{ $settings.sections.cart.price_text }}</span>
                            </div>
                            <div class="flex items-center justify-end w-2/12">
                                <span class="text-sml ml-font-bold">{{ $settings.sections.cart.total_text }}</span>
                            </div>
                        </div>
                    </div>
                    <si-cart-item v-for="(item,i) in items" @remove="remove" :item="item" :key="i" />
                </div>
                <!-- cart -->
                <!-- totla and placeorder -->
                <div class="px-5 pt-5 xl:px-10">
                    <div class="flex flex-col p-5 border border-gray-300 rounded-md" v-if="!loading.cart && items.length > 0">
                        <!--  -->
                        <div class="flex justify-between pb-5 bg-white">
                            <h2 class="text-sml ml-font-bold">{{ $settings.sections.cart.subtotal_text }} ({{items.length}})</h2>
                            <h2 class="text-sml ml-font-bold">{{ $store.state.currency.symbol }} {{ total.toFixed(2) }}</h2>
                        </div>
                        <!--  -->
                        <div class="flex flex-col">
                            <div class="flex items-center justify-center p-4 border rounded-full cursor-pointer border-primary ml-font-bold-hover">
                                <a href="/checkout2">
                                    <span class="text-sml">{{ $settings.sections.cart.buttons.checkout_text }}</span>
                                </a>
                            </div>
                            <div v-if="$settings.sections.cart.buttons.show_back_to_shop" class="flex items-center justify-center p-4 mt-5 border rounded-full cursor-pointer border-primary ml-font-bold-hover">
                                <nuxt-link to="/shop">
                                    <span class="text-sml">{{ $settings.sections.cart.buttons.back_to_shop_text }}</span>
                                </nuxt-link>
                            </div>
                        </div>
                        <!--  -->
                    </div>
                </div>
                <!-- totla and placeorder -->
            </div>                            
            <!-- up sell -->
            <div v-if="$settings.sections.cart.upsell.active" class="flex flex-col bg-white">
                <div class="pt-5 lg:mx-5 xl:mx-10" v-if="upsells.length > 0">
                    <h2 class="pb-8 text-base text-center">{{ $settings.sections.cart.upsell.title }}</h2>
                </div>
                <div class="flex flex-wrap mx-1 xl:mx-5" v-if="upsells.length > 0">
                    <template v-for="(upsell, i) in upsells">
                        <div v-for="(product, ii) in upsell.products" :key="ii+'_'+i" class="w-1/2 px-4 mb-4 md:w-1/4 lg:w-1/4 xl:px-5 lg:mb-8">
                            <si-product :item="product" :upsell="upsell"></si-product>
                        </div>
                    </template>
                    <div>
                </div>
                </div>
            </div>
            <!-- upsell -->
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: { cart: true, upsells: true },
            items: [],
            total: 0,
            upsells: []
        }
    },
    async fetch(){
        this.$store.state.seo.title = this.$settings.sections.cart.title + ' - ' + this.$settings.store_name;
        this.$store.state.seo.description = this.$settings.sections.cart.description || this.$settings.store_description;
        await this.initCart();
        if(this.items.length > 0){
            await this.getUpsells();
        }
    },
    mounted() {
        this.$storeino.fbpx('PageView');
        this.$tools.call('PAGE_VIEW');
    },
    watch: {
        async "$store.state.cart.length"(){
            await this.initCart();
            await this.getUpsells();
        },
        items: {
            deep: true,
            handler(){
                this.calcTotal();
            }
        }
    },
    methods: {
        async getUpsells(){
            const ids = this.$store.state.cart.map(item => item._id);
            this.loading.upsells = true;
            if(ids.length > 0){
                try{
                    const response = await this.$storeino.upsells.search({ 'with': ['products'],'product._id-in': ids, limit: 1000 });
                    this.upsells = response.data.results;
                }catch(e){
                    console.log(e);
                }
            }
            this.loading.upsells = false;
        },
        async initCart(){
            this.items = [];
            const ids = this.$store.state.cart.map(item => item._id);
            this.loading.cart = true;
            if(ids.length > 0){
                try{
                    const response = await this.$storeino.products.search({ '_id-in': ids, limit: 1000 });
                    const products = response.data.results;
                    for (const item of this.$store.state.cart) {
                        const cartItem = {};
                        const product = products.find(p => p._id === item._id);
                        cartItem._id = product._id;
                        cartItem.slug = product.slug;
                        cartItem.name = product.name;
                        cartItem.price = product.price.salePrice;
                        cartItem.quantity = product.quantity;
                        cartItem.quantity.value = item.quantity;
                        cartItem.image = product.images.length > 0 ? product.images[0].src : '';
                        if(item.variant && item.variant._id){
                            cartItem.variant = product.variants.find(variant => variant._id === item.variant._id);
                            cartItem.price = cartItem.variant.price.salePrice;
                        }
                        if(item.upsell){
                            cartItem.upsell = item.upsell;
                            const discount = cartItem.upsell.type == 'percentage' ? cartItem.price * (cartItem.upsell.value / 100) : cartItem.upsell.value
                            cartItem.price = cartItem.price - discount;
                        }
                        cartItem.total = cartItem.price * cartItem.quantity.value;
                        this.items.push(cartItem);
                    }
                    this.calcTotal();
                }catch(e){
                    console.log(e);
                }
            }
            this.loading.cart = false;
        },
        async remove(item){
            this.$tools.call('REMOVE_FROM_CART', item);
        },
        calcTotal(){
            this.total = this.items.reduce((total, item) => total + (item.price * item.quantity.value), 0);
        }
    },
}
</script>
