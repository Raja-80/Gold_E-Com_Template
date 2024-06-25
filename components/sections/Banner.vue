<template>
    <div class="container pt-72 pb-72">

        <div class="text-white flex flex-col justify-center items-center">
            <h2>
                Summer Essentials have arrived
                <!-- {{ banner.title }} -->
            </h2>
            <router-link to="/shop" class="text-white underline mt-8 py-3 px-7 border border-white hover:bg-black hover:border-black hover:shadow">
                <!-- :to="banner.button.url" -->
                <button>
                    Shop All
                    <!-- {{ banner.button.text }} -->
                </button>
            </router-link>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            /* banner: this.$settings.sections.banner, */
        }
    },

}
</script>

<style></style>