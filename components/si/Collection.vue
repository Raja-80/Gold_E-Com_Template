<template>
    <div class="m-2">
        <div v-if="page=='collections'">
            <nuxt-link  :to="item.childrens.length > 0 ? `/collections/${item.slug}` : `/shop/${item.slug}`">
                <div class="text-black">
                    <div class="relative overflow-hidden pb-col-collection-4/5">
                        <div class="cursor-pointer">
                            <div class="image">
                                <si-image  width="200" height="200" class="absolute inset-0 object-cover w-full h-full img" :src="item.image ? item.image.src : null" :alt="item.name" srcset=""/>
                            </div>
                        </div>
                        <div class="absolute inset-20 flex items-end p-5 cursor-pointer lg:py-6 lg:px-10">
                            <div class="content">
                                <h1 class="text-base text-shadoow ml-font-bold">{{ item.name }}</h1>
                                <!-- <span class="transition ease-in-out delay-100 text-sml text-shadoow">{{ item.description }}</span> -->
                            </div>
                        </div>
                    </div>
                </div>
            </nuxt-link>
        </div>
        <div v-else> 
            <nuxt-link  :to="item.childrens.length > 0 ? `/collections/${item.slug}` : `/shop/${item.slug}`">
                <div class="text-black font-normal hover:underline">
                    <div class="relative overflow-hidden pb-col-home-4/5 image-container">
                        <div class="cursor-pointer">
                            <div class="image">
                                <si-image  width="200" height="200" class="absolute inset-0 object-cover w-full h-full img" :src="item.image ? item.image.src : null" :alt="item.name" srcset=""/>
                            </div>
                        </div>
                        <div class="absolute inset-0 flex items-end justify-center cursor-pointer pb-5">
                            <div class="text-center content">
                                <h1 class="text-xl text-center text-black">{{ item.name }}</h1>
                                <!-- <span class="underline transition ease-in-out delay-100 opacity-100 text-active lg:opacity-0 text-sml">{{ $settings.sections.collections.description }}</span> -->
                            </div>
                        </div>
                    </div>
                </div>
            </nuxt-link>
        </div>
    </div>
</template> 

<script>
export default {
    props: {
        item: Object,
        page: { type: String, require: false }
    },
}
</script>

<style scoped>
.text-shadoow {
    filter: drop-shadow(0 0 0.625rem rgba(0, 0, 0, 0.8));
}

.pb-col-collection-4\/5 {
    padding-bottom: 100%;
}

.pb-col-home-4\/5 {
    padding-bottom: 80%;
}

@media (min-width:768px) and (max-width:1023px) {
    .pb-col-home-4\/5 {
        padding-bottom: 30%;
    }
}

.image-container:hover .text-active {
    opacity: 1;
}

.image-container .img {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
}

.image-container:hover .img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
