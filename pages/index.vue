<template>
  <div>
    <!-- Pop-Up Placment -->
    <si-app-loader placement="HOME_PAGE" />
    <!-- Pop-Up Placment -->
    <si-app-loader placement="AFTER_HOME_HEADER" />

    <div v-if="sections.banner.show_section">

      <sections-banner></sections-banner>

    </div>

    <sections-collections v-if="$settings.sections.collections.active"></sections-collections>
    <div class="px-5 xl:px-10">
      <si-app-loader placement="BEFORE_HOME_FOOTER" />
    </div>

    <sections-products v-if="sections.homepage.products.show_section"></sections-products>

    <sections-services v-if="sections.services.show"></sections-services>

    <sections-posts v-if="sections.posts.show_section"></sections-posts>

    <sections-reviews-section v-if="sections.reviews.show_section"></sections-reviews-section>

    <sections-brands v-if="sections.brands.show_section"></sections-brands>


    <sections-call-to-action v-if="sections.callaction.show_section"></sections-call-to-action>


  </div>
</template>

<script>
export default {

  data() {
    return {
      sections: this.$settings.sections,
    };
  },

  mounted() {
    // Seo
    this.$store.state.seo.title = this.$settings.store_name;
    this.$store.state.seo.description = this.$settings.store_description;
    // All Pixels
    this.$storeino.fbpx('PageView');
    // Fb Pixels
    this.$tools.call('PAGE_VIEW');
  }
}
</script>
