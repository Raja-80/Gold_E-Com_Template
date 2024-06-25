<template>
    <!-- v-if="call_action.show_section" -->
    <div class="px-12 lg:pt-20 lg:pb-32 pb-32 pt-8 flex lg:flex-row flex-col justify-around items-center w-full">

        <!-- left Side Image -->

        <div class="w-1/4">

            <!-- v-if="call_action.show_image_1" -->
            <div class=" lg:px-10 lg:w-full">
                <nuxt-img class="border-solid border-3 border-black shadow-xl lg:h-72 w-full h-auto"
                    :style="{ transform: 'rotate(-5deg)' }"
                    :src="'https://storeno.b-cdn.net/stores/6-2024/1719198391874.jpeg'" alt="image description" />
            </div>

        </div>


        <div class="flex flex-col px-6 justify-center items-center w-2/4">

            <div class="flex flex-col">
                <!-- v-if="call_action.show_title" -->
                <h1 class="text-black text-center font-medium text-4xl pb-6 lg:mx-12">

                    Made in Los Angeles with love and Solid Gold
                    <!-- {{ call_action.title }} -->

                </h1>
                <!-- v-if="call_action.show_description"  -->
                <p class="text-black text-sm font-light text-center leading-loose ">
                    “No object can tell a story quite like a piece of jewelry” - says BabyGold™ founder, Helen Ashikian.
                    Our always-14k solid gold, fine-jewelry is sustainably made in our family-owned factory in Downtown
                    Los Angeles, California. We cut traditional mark-ups and offer honest pricing, bringing you the
                    highest quality pieces to love and cherish for decades to come.

                    <!-- {{ call_action.description }} -->
                </p>

                <div class="flex flex-col justify-center items-center pt-4">
                    <!-- :to="call_action.button.url" -->
                    <router-link to="/pages"
                        class="button underline text-center py-4 px-8 border border-black hover:bg-black hover:border-black hover:shadow hover:text-white">
                        Discover More About Us
                        <!-- {{ call_action.button.text }} -->
                    </router-link>
                </div>
            </div>


        </div>

        <!-- Right Side Image -->

        <div class="w-1/4 pt-32">
            <!-- v-if="call_action.show_image_3" -->
            <div class=" px-14 mx-auto w-full ">
                <nuxt-img class=" border-solid border-3 border-black shadow-xl lg:h-64 w-full h-auto"
                    :style="{ transform: 'rotate(5deg)' }"
                    :src="'https://storeno.b-cdn.net/stores/6-2024/1719204527346.jpeg'" alt="image description" />
            </div>

        </div>




    </div>
</template>

<script>
export default {
    data() {
        return {
            call_action: this.$settings.sections.call_action,

        }
    },
}
</script>

<style></style>