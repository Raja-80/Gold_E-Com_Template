<template>
    <div class="text-white Century-bold">
        <div class="pbres-4/5 relative image-container overflow-hidden">
            <div class="cursor-pointer">
                <nuxt-link  :to="item.childrens.length > 0 ? `/collections/${item.slug}` : `/shop/${item.slug}`">
                    <si-image  width="400" height="400" class="img h-full w-full absolute inset-0 object-cover" :src="item.image ? item.image.src : null" :alt="item.name" srcset=""/>
                </nuxt-link>
            </div>
            <div class="absolute inset-0 flex items-center justify-center cursor-pointer">
                <nuxt-link  :to="item.childrens.length > 0 ? `/collections/${item.slug}` : `/shop/${item.slug}`">
                    <h1 class="text-xl lg:text-2xl text-shadoow">{{ item.name }}</h1>
                    <div class="text-center">
                        <span class="text-active opacity-100 lg:opacity-0 text-sm underline transition ease-in-out delay-100">{{ $settings.sections.collections.description }}</span>
                    </div>
                </nuxt-link>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            item: Object
        },
    }
</script>

<style scoped>

.text-shadoow {
    filter: drop-shadow(0 0 0.625rem rgba(0, 0, 0, 0.8));
}

.pbres-4\/5 {
    padding-bottom: 80%;
}

@media (min-width:768px) and (max-width:1023px) { 
    .pbres-4\/5 {
        padding-bottom: 30%;
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
