<template>
    <!-- v-if="callaction.show_section" -->
    <div class="px-12 lg:pt-20 lg:pb-32 pb-32 pt-8 flex lg:flex-row flex-col justify-around items-center w-full">

        <!-- left Side Image -->

        <div class="w-1/4">

            <!-- v-if="callaction.show_image_1" -->
            <div class=" lg:px-10 lg:w-full">
                <nuxt-img class="border-solid border-3 border-black shadow-xl lg:h-72 w-full h-auto"
                    :style="{ transform: 'rotate(-5deg)' }"
                    :src="callaction.first_img ? callaction.first_img.src : 'https://storeno.b-cdn.net/stores/6-2024/1719198391874.jpeg'" alt="image description" />
            </div>

        </div>


        <div class="flex flex-col px-6 justify-center items-center w-2/4">

            <div class="flex flex-col">
                
                <h1 v-if="callaction.show_title" class="text-black text-center font-medium text-4xl pb-6 lg:mx-12">

                    {{ callaction.title }}

                </h1>
                
                <p v-if="callaction.show_desc"  class="text-black text-sm font-light text-center leading-loose ">

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

        <div class="w-1/4 pt-32">
            
            <div v-if="callaction.show_image_2" class=" px-14 mx-auto w-full ">
                <nuxt-img class=" border-solid border-3 border-black shadow-xl lg:h-64 w-full h-auto"
                    :style="{ transform: 'rotate(5deg)' }"
                    :src="callaction.secnd_img ? callaction.secnd_img.src : 'https://storeno.b-cdn.net/stores/6-2024/1719204527346.jpeg'" alt="image description" />
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