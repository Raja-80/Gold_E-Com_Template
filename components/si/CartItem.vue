<template>
    <div class="w-full border-t border-gray-300">
        <div class="relative flex flex-wrap justify-between h-full py-5">
            <!--  -->
            <!--  -->
            <div class="w-1/4 lg:w-1/12">
                <div class="relative pb-full">
                    <nuxt-link :to="`/products/${item.slug}`" :title="item.name" :aria-label="item.name">
                        <si-image  width="400" height="400" class="absolute inset-0 object-cover w-full h-full"  :src="item.image" :alt="item.name"/>
                    </nuxt-link>
                </div>
            </div>
            <!--  -->
            <!--  -->
            <div class="flex flex-wrap w-3/4 px-4 lg:w-11/12 lg:px-0">
                <div class="w-full pb-2 border-b border-gray-300 lg:w-5/12 lg:border-0 lg-pb-0 -order-2">
                    <div class="flex flex-col justify-center h-full lg:px-3">
                        <nuxt-link :to="`/products/${item.slug}`">
                            <span class="text-sml ml-font-bold">{{ item.name }}</span>
                        </nuxt-link>
                        <nuxt-link :to="`/products/${item.slug}`">
                            <span class="text-sml text-primary" v-if="item.variant">{{ item.variant.name }}</span>
                        </nuxt-link>
                        <div v-if="item.upsell">
                            <b class="text-primary text-sml ml-font-bold">-{{ item.upsell.value }} {{ item.upsell.type == 'percentage' ? '%' : $store.state.currency.symbol }}</b>
                        </div>
                        <div class="pt-1 cursor-pointer text-sml ml-font-bold" @click="remove">
                            <svg aria-label="remove icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20" height="20" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19,6 L19,18.5 C19,19.8807119 17.8807119,21 16.5,21 L7.5,21 C6.11928813,21 5,19.8807119 5,18.5 L5,6 L4.5,6 C4.22385763,6 4,5.77614237 4,5.5 C4,5.22385763 4.22385763,5 4.5,5 L9,5 L9,4.5 C9,3.67157288 9.67157288,3 10.5,3 L13.5,3 C14.3284271,3 15,3.67157288 15,4.5 L15,5 L19.5,5 C19.7761424,5 20,5.22385763 20,5.5 C20,5.77614237 19.7761424,6 19.5,6 L19,6 Z M6,6 L6,18.5 C6,19.3284271 6.67157288,20 7.5,20 L16.5,20 C17.3284271,20 18,19.3284271 18,18.5 L18,6 L6,6 Z M14,5 L14,4.5 C14,4.22385763 13.7761424,4 13.5,4 L10.5,4 C10.2238576,4 10,4.22385763 10,4.5 L10,5 L14,5 Z M14,9.5 C14,9.22385763 14.2238576,9 14.5,9 C14.7761424,9 15,9.22385763 15,9.5 L15,16.5 C15,16.7761424 14.7761424,17 14.5,17 C14.2238576,17 14,16.7761424 14,16.5 L14,9.5 Z M9,9.5 C9,9.22385763 9.22385763,9 9.5,9 C9.77614237,9 10,9.22385763 10,9.5 L10,16.5 C10,16.7761424 9.77614237,17 9.5,17 C9.22385763,17 9,16.7761424 9,16.5 L9,9.5 Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <!--  -->
                <!--  -->
                <div class="w-full py-2 border-b border-gray-300 lg:w-3/12 lg:py-0 lg:border-0">
                    <div class="flex items-center h-full lg:justify-center">
                        <si-product-quantity @selected="quantitySelected" :quantity="item.quantity"/>
                    </div>
                </div>
                <!--  -->
                <!--  -->
                <div class="w-full py-2 border-b border-gray-300 lg:w-2/12 lg:py-0 lg:border-0 -order-1">
                    <div class="flex items-center h-full lg:justify-center">
                        <span class="text-sml ml-font-bold text-primary">{{ item.price.toFixed(2) }} {{ $store.state.currency.symbol }}</span>
                    </div>
                </div>
                <!--  -->
                <!--  -->
                <div class="w-full py-2 lg:w-2/12 lg:py-0">
                    <div class="flex items-center h-full lg:justify-end">
                        <h2 class="text-sml ml-font-bold">{{ item.total.toFixed(2) }} {{ $store.state.currency.symbol }}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: { type: Object, required: true },
        quantity: { type: Number, default: 1 }
    },
    mounted() {
        this.quantitySelected(this.item.quantity.value);
    },
    methods: {
        remove() {
            this.$emit("remove", this.item);
        },
        quantitySelected(quantity) {
            this.item.quantity.value = quantity;
            this.item.total = this.item.price * quantity;
            let item = null;
            if (this.item.variant) item = this.$store.state.cart.find(i => i._id == this.item._id && this.item && i.variant._id == this.item.variant._id);
            else item = this.$store.state.cart.find(i => i._id == this.item._id && this.item && !i.variant);
            this.$tools.call('ADD_TO_CART', { ...item, quantity: quantity });
        }
    },
}
</script>

<style scoped>
@media (max-width: 1024px) {
    .\-order-1 {
        order: -1;
    }

    .\-order-2 {
        order: -2;
    }
}
</style>    