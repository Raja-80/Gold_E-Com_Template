<template>
  <div class="">
    <!-- title -->
    <!-- <div class="pt-5 border-t mt-7 lg:mx-5 xl:mx-10">
      <h2 class="pb-8 text-base text-center">{{ this.title }}</h2>
    </div> -->
    <!-- title -->
    <!-- content -->
    <div class="relative">
      <!-- <div class="px-1 overflow-hidden carousel-container xl:px-5">
        <div class="flex carousel" :style="`width: ${items.length*width}%`">
            <div v-for="(item,i) in items" :key="i" class="px-4 carousel-item xl:px-5 b-4 lg:pb-8" :class="itemClass">
              <component :is="component" :upsell="upsell" :item="item"></component>
            </div>
        </div>
      </div>
      <div v-if="items.length > 2">
        <button aria-label="chivron-left" class="absolute left-0 transform -translate-y-1/2 rounded-full top-1/2" @click="move(-1)">
            <svg aria-label="chivron left" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 15.54a.54.54 0 01-.39-.16L6.72 10l5.39-5.4a.551.551 0 11.78.78L8.28 10l4.61 4.61a.56.56 0 010 .78.54.54 0 01-.39.15z" fill="currentColor"></path></svg>
        </button>
        <button aria-label="chivron-right" class="absolute right-0 transform -translate-y-1/2 rounded-full top-1/2" @click="move(1)">
            <svg aria-label="chivron right" class="w-5 h-5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.89 4.6a.552.552 0 00-.78.78L11.72 10l-4.61 4.6a.56.56 0 000 .78.56.56 0 00.78 0L13.28 10 7.89 4.6z" fill="currentColor"></path></svg>
        </button>
      </div> -->
    </div>
    <!-- content -->
  </div>
</template>

<script>
export default {
  props: {
    /* title: { type: String, default: '' },
    list: { type: Array, default: function () { return []; } },
    size: { type: Number, default: 100 },
    component: { type: String, default: null },
    itemClass: { type: String, default: "w-full sm:w-1/2 md:w-1/3 lg:w-1/4" },
    defaultWidth: { type: Number, default: 300 },
    upsell: { type: Object, default: null, require: false } */
  },
  data() {
    return {
      /* loading: true,
      items: this.list,
      width: this.defaultWidth,
      parentWidth: 1000, */
    }
  },
  watch: {
    /* parentWidth(val, oldVal) { */
    /*   if (val < 640) this.width = 100; */
    /*   if (val >= 640 && val < 768) this.width = 50; */
    /*   if (val >= 768 && val < 1024) this.width = 33.33; */
    /*   if (val >= 1024) this.width = 25; */
    /* } */
  },
  methods: {
    /* move(n) {
      let get = 'pop', set = 'unshift', width = document.querySelector('.carousel-item') ? document.querySelector('.carousel-item').offsetWidth : 360;
      if (n == 1) { get = 'shift', set = 'push', width = `-${width}` }
      document.querySelector('.carousel').style.transform = `translateX(${width}px)`;
      document.querySelector('.carousel').style.transition = `500ms`;
      setTimeout(() => {
        document.querySelector('.carousel').style.transform = `translateX(0px)`;
        document.querySelector('.carousel').style.transition = `none`;
        const el = this.items[get]();
        this.items[set](el);
      }, 500);
    } */
  },
  mounted() {
    /* this.$nextTick(() => {
      const element = document.querySelector('.carousel-container');
      if (element) {
        this.parentWidth = element.clientWidth;
        window.onresize = () => {
          this.parentWidth = element.clientWidth;
        }
      }
    }) */
  },
};
</script>
