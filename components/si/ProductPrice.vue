<template>
    <div>
        <meta itemprop="priceCurrency" :content="$store.state.currency.code" />
        <div class="price flex flex-wrap items-center" v-if="type=='simple'">
            <b class="text-primary">{{ price.salePrice.toFixed(2) }}{{ $store.state.currency.symbol }}</b>
            <span class="flex w-2"></span>
            <span v-if="price.comparePrice > 0">
                <del class="text-gray-600">{{ price.comparePrice.toFixed(2) }}{{ $store.state.currency.symbol }}</del>
            </span>
            <meta itemprop="price" :content="price.salePrice" />
        </div>
        <div class="price flex flex-wrap items-center" v-else-if="minPrice != maxPrice">
            <meta itemprop="price" :content="minPrice" />
            <b class="text-primary">{{ minPrice.toFixed(2) }}{{ $store.state.currency.symbol }}</b>
            <span class="flex">~</span>
            <b class=" text-primary">{{ maxPrice.toFixed(2) }}{{ $store.state.currency.symbol }}</b>
        </div>
        <div class="price flex flex-wrap items-center" v-else-if="variants.length > 0">
            <meta itemprop="price" :content="variants[0].price.salePrice" />
            <b class="text-primary">{{ variants[0].price.salePrice.toFixed(2) }}{{ $store.state.currency.symbol }}</b>
            <span class="flex w-2"></span>
            <span v-if="variants[0].price.comparePrice > 0">
                <del class="text-gray-600">{{ variants[0].price.comparePrice.toFixed(2) }}{{ $store.state.currency.symbol }}</del>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        type: String,
        price: Object,
        originalPrice: { type: Object, default: null },
        variants: { type: Array, default: [] }
    },
    data() {
        return {
            minPrice : this.type == 'variable' ? Math.min(...this.variants.map(v=>v.price.salePrice)) : 0,
            maxPrice : this.type == 'variable' ? Math.max(...this.variants.map(v=>v.price.salePrice)) : 0,
        }
    },
}
</script>
<style>
.compare-price{
    height: 0.2em;
    transform: rotate(-12deg);
    opacity: .5;
}
</style>