<template>
    <div class="container pt-72 pb-72">

        <div class="text-white flex flex-col justify-center items-center">
            <h2 v-if="banner.show_title" class="">
                {{ banner.title }}
            </h2>
            <router-link v-if="banner.show_button" :to="`${banner.btn_url}`" class="text-white underline mt-8 py-3 px-7 border border-white hover:bg-black hover:border-black hover:shadow">
                
                <button>
                    {{ banner.btn_txt }}
                </button>
            </router-link>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            banner: this.$settings.sections.banner,
        }
    },

}
</script>

<style></style>