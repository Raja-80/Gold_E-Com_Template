<template>
    <transition name="fade">
        <div class="fixed inset-0 z-50 flex items-center justify-center p-5 md:p-10" :class="$store.state.fullImage!=null ? hideBodyScroll() : null" v-if="$store.state.fullImage">
            <div @click="$store.state.fullImage=null;showBodyScroll()" class="absolute inset-0 bg-white"></div>
            <si-image class="relative z-10 object-contain w-full cursor-pointer md:h-full md:w-auto" :src="$store.state.fullImage" :alt="`Full screen image`"/>
            <div @click="showBodyScroll">
                <div @click="$store.state.fullImage=null;showBodyScroll()" class="absolute top-0 right-0 z-50 px-4 py-8 cursor-pointer md:px-10 md:py-10">
                    <svg aria-label="close icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.71 10l4.65-4.66a.495.495 0 10-.7-.7L10 9.29 5.34 4.64a.495.495 0 00-.7.7L9.29 10l-4.65 4.66a.48.48 0 000 .7.481.481 0 00.7 0L10 10.71l4.66 4.65a.482.482 0 00.7 0 .48.48 0 000-.7L10.71 10z" fill="currentColor"></path></svg>
                </div>  
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    mounted() {
        document.addEventListener('keydown', (e) => {
            if (e.key == 'Escape' && this.$store.state.fullImage != null) this.$store.state.fullImage = null;
        })
    },
    methods: {
        hideBodyScroll() {
            document.body.style.overflow = 'hidden';
        },
        showBodyScroll() {
            document.body.style.overflow = 'auto';
        },
    }
}
</script>