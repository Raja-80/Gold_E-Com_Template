<template>
  <div>
    <si-app-loader  placement="AFTER_HOME_HEADER"/>
    <sections-collections v-if="$settings.sections.collections.active"></sections-collections>
    <div class="px-5 xl:px-10">
      <si-app-loader  placement="BEFORE_HOME_FOOTER"/>
    </div>
  </div>
</template>
<script>
export default {
  async fetch(){
    this.$store.state.seo.title = this.$settings.store_name;
    this.$store.state.seo.description = this.$settings.store_description;
  },
  mounted() {
    this.$tools.call('PAGE_VIEW');
    this.$storeino.fbpx('PageView')
  },
}
</script>
