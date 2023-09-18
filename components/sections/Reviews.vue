<template>
    <div v-if="item && item.review.reviews.length > 0">
        <div class="pt-5 border-t mt-7 lg:mx-5 xl:mx-10">
            <h2 class="pb-8 text-base text-center">{{ $settings.sections.product.reviews.title }}</h2>
            <div v-if="loading" class="flex items-center justify-center my-5">
                <si-loader></si-loader>
            </div>
        </div>
        <div class="mx-5 reviews xl:mx-10 pb-7" id="reviews">
            <div class="flex flex-wrap ">
                <div v-for="(review,index) in reviews.results" :key="index" class="w-full mb-4">
                    <div class="flex flex-col justify-between h-full">
                        <div class="flex flex-col">
                            <div class="flex items-center mb-3">
                                <si-avatar :name="`${review.customer.firstname} ${review.customer.lastname}`"></si-avatar>
                                <span class="m-1"></span>
                                <div>
                                    <b class="capitalize ml-font-bold text-sml">{{ `${review.customer.firstname} ${review.customer.lastname}` }}</b>
                                </div>
                            </div>
                            <div class="flex mb-3">
                                <span class="bg-text-primary" v-for="(star,i) in 5" :class="star <= review.rating ? ' text-yellow-500 ': 'text-gray-400'" :key="i">
                                    <svg aria-label="star icon" class="w-3 h-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg>
                                </span>
                            </div>
                            <div class="text-sml" >{{ review.content }}</div>
                        </div>
                        <div v-if="review.images.length > 0" class="w-full mt-3 overflow-auto scroll">
                            <div class="flex gap-2">
                                <si-image width="100" height="100" class="w-12 h-12 cursor-pointer" v-for="(image, index) in review.images" :key="index" :src="image" @click="$store.state.fullImage=image" :alt="`${review.rating} stars - ${review.content}`"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: { type: Object, default: null }
    },
    data() {
        return {
            reviews: { paginate: { page: 0 }, results: [] },
            loading: true
        }
    },
    async fetch() {
        const { data } = await this.$storeino.reviews.search({
            "product._id": this.item._id,
            page: this.reviews.paginate.page + 1
        })
        this.reviews = data;
        this.loading = false;
    }
}
</script>