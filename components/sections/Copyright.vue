<template>
  <div class="p-5  xl:px-10 lg:py-6 copyright-color copyright-text">
    
    <div class="flex items-center copyright justify-center" >
      <div class="text-sml ml-font-bold">
        Made By
        <a style="color:#03a9f4" class=" text-sm font-normal underline" href="//www.storeino.com/" target="_blank">
          Storeino.com
        </a>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 1024px) {
  .copyright {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }

}
</style>