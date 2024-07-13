<template>
    <div class="w-full h-full relative overflow-hidden">
        <div v-if="banner.items" class="w-full h-full">
            <div class="carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div v-for="(key, i) in Object.keys(banner.items)" :key="i"
                    class="carousel-item h-full w-full bg-cover bg-center pt-72 pb-72"
                    :style="getBackgroundStyle(banner.items[key])">
                    <div class="relative w-full h-full flex flex-col justify-center items-center">
                        <div
                            class="text-white flex flex-col justify-center items-center w-full lg:px-52 px-10 text-center">
                            <h2 v-if="banner.items[key].show_title" class="text-center">
                                {{ banner.items[key].title }}
                            </h2>
                            <router-link v-if="banner.items[key].show_button" :to="`${banner.items[key].btn_url}`"
                                class="text-white underline mt-14 py-3 px-7 border border-white hover:bg-black hover:border-black hover:shadow">
                                <button>
                                    {{ banner.items[key].btn_txt }}
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <button @click="prevSlide" class="carousel-button left-0">‹</button>
            <button @click="nextSlide" class="carousel-button right-0">›</button>
        </div>
    </div>
</template>



<script>
export default {
    data() {
        return {
            banner: this.$settings.sections.banner,
            defaultBg: 'https://storeno.b-cdn.net/stores/6-2024/1718440905029.jpeg',
            currentIndex: 0,
            interval: null,
        };
    },
    methods: {
        getBackgroundStyle(item) {
            if (item.show_bg) {
                return {
                    backgroundImage: `url(${item.bg_image ? item.bg_image.src : this.defaultBg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center bottom',
                    backgroundSize: 'cover',
                };
            } else {
                return {
                    backgroundColor: 'black',
                };
            }
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % Object.keys(this.banner.items).length;
        },
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + Object.keys(this.banner.items).length) % Object.keys(this.banner.items).length;
        },
        startAutoplay() {
            this.interval = setInterval(this.nextSlide, 5000);
        },
        stopAutoplay() {
            clearInterval(this.interval);
        },
    },
    mounted() {
        this.startAutoplay();
    },
    beforeDestroy() {
        this.stopAutoplay();
    },
};
</script>


<style scoped>
.carousel {
    display: flex;
    transition: transform 0.5s ease;
    width: 100%;
    height: 100%;
}

.carousel-item {
    flex: 0 0 100%;
    max-width: 100%;
}

.carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    font-size: 2rem;
    padding: 1rem;
    cursor: pointer;
}

.carousel-button.left-0 {
    left: 0;
}

.carousel-button.right-0 {
    right: 0;
}
</style>
