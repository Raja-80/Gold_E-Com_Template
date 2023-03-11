<template>
      <div class="mb-7" v-if="item">
            <!--related product  -->
            <si-carousel :upsell="item" :size="100" component="si-product"  :title="$settings.sections.product.upsell.title" :list="item.products" itemClass="w-full"></si-carousel>
            <!-- related product -->
        </div>
</template>
<script>
export default {
    props: {
        item: { type: Object, default: null },
    }
}
</script>