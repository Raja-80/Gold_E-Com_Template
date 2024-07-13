<template>
    <!-- v-if="callaction.show_section" -->
    <div class="px-12 lg:pt-20 lg:pb-32 pb-20 pt-8 flex lg:flex-row flex-col justify-around items-center w-full">

        <!-- left Side Image -->

        <div class="lg:w-1/4 w-1/3 lg:py-0 py-20">

            <!-- v-if="callaction.show_image_1" -->
            <div class=" lg:px-10 lg:w-full ">
                <nuxt-img class="border-solid border-3 border-black shadow-xl lg:h-72 w-full h-auto"
                    :style="{ transform: 'rotate(-5deg)' }"
                    :src="callaction.first_img ? callaction.first_img.src : 'https://storeno.b-cdn.net/stores/6-2024/1719198391874.jpeg'" alt="image description" />
            </div>

        </div>


        <div class="flex flex-col lg:px-6 px-0 justify-center items-center lg:w-2/4 w-full">

            <div class="flex flex-col">
                
                <h1 v-if="this.$settings.sections.callaction.show_title" class="text-black text-center font-medium lg:text-4xl md:text-3xl sm:text-2xl text-2xl pb-6 lg:mx-12">

                    {{ this.$settings.sections.callaction.title }}

                </h1>
                
                <p v-if="callaction.show_desc"  class="text-black lg:text-sm md:text-sm sm:text-xs text-xs font-light text-center leading-loose ">

                    {{ callaction.description }}

                </p>

                <div v-if="callaction.show_btn" class="flex flex-col justify-center items-center pt-4">
                    
                    <router-link :to="`${callaction.btn_url}`" to="/pages"
                        class="button underline text-center py-4 px-8 border border-black hover:bg-black hover:border-black hover:shadow hover:text-white">
                        
                        {{ callaction.btn_txt }}

                    </router-link>
                </div>
            </div>


        </div>

        <!-- Right Side Image -->

        <div class="lg:w-1/4 w-1/3 lg:pt-32 pt-20">
            <!--  v-if="callaction.show_image_2"  -->
            <div class=" lg:px-10 lg:w-full px-0 lg:mx-auto ">
                <nuxt-img class=" border-solid border-3 border-black shadow-xl lg:h-64 w-full h-auto"
                    :style="{ transform: 'rotate(5deg)' }"
                    :src=" callaction.secnd_img ? callaction.secnd_img.src :  'https://storeno.b-cdn.net/stores/6-2024/1719204527346.jpeg'" alt="image description" />
            </div>

        </div>



    </div>
</template>

<script>
export default {
    data() {
        return {
            callaction: this.$settings.sections.callaction,

        }
    },
}
</script>

<style></style>