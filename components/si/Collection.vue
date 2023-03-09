<template>
    <div>
        <div v-if="page=='collections'">
            <nuxt-link  :to="item.childrens.length > 0 ? `/collections/${item.slug}` : `/shop/${item.slug}`">
                <div class="text-white">
                    <div class="pb-res-4/5 relative overflow-hidden">
                        <div class="cursor-pointer">
                            <div class="image">
                                <si-image  width="400" height="400" class="img h-full w-full absolute inset-0 object-cover" :src="item.image ? item.image.src : null" :alt="item.name" srcset=""/>
                            </div>
                        </div>
                        <div class="absolute inset-0 flex items-end cursor-pointer p-5 lg:py-6  lg:px-10">
                            <div class="content">
                                <h1 class="text-base text-shadoow century-bold">{{ item.name }}</h1>
                                <span class="text-sml text-shadoow transition ease-in-out delay-100">{{ item.description }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nuxt-link>
        </div>
        <div v-else> 
            <nuxt-link  :to="item.childrens.length > 0 ? `/collections/${item.slug}` : `/shop/${item.slug}`">
                <div class="text-white century-bold">
                    <div class="pbres-4/5 relative image-container overflow-hidden">
                        <div class="cursor-pointer">
                            <div class="image">
                                <si-image  width="400" height="400" class="img h-full w-full absolute inset-0 object-cover" :src="item.image ? item.image.src : null" :alt="item.name" srcset=""/>
                            </div>
                        </div>
                        <div class="absolute inset-0 flex items-center justify-center cursor-pointer">
                            <div class="content text-center">
                                <h1 class="text-center text-xl lg:text-2xl text-shadoow">{{ item.name }}</h1>
                                <span class="text-active opacity-100 lg:opacity-0 text-sml underline transition ease-in-out delay-100">{{ $settings.sections.collections.description }}</span>
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
            page: {type: String, require: false }
        },
    }
</script>

<style scoped>

.text-shadoow {
    filter: drop-shadow(0 0 0.625rem rgba(0, 0, 0, 0.8));
}

.pbres-4\/5,
.pb-res-4\/5 {
    padding-bottom: 80%;
}

@media (min-width:768px) and (max-width:1023px) { 
    .pbres-4\/5 {
        padding-bottom: 30%;
    }
}

@media (max-width: 1024px) {
  .pb-res-4\/5{
    padding-bottom: 100%;
  }
}

.image-container:hover .text-active{
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
