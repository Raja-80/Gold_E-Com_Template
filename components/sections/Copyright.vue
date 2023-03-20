<template>
    <div class="border-t border-gray-300 px-5 xl:px-10 py-8 lg:py-6 copyright-color copyright-text">
        <!-- Start copyright Section -->
        <div class="copyright flex items-center " :class="copyright_menu == null? 'justify-center' : 'justify-between'">
            <div
              class="text-sml ml-font-bold" 
              v-html="description.replace(/__YEAR__/gi, year)"
            ></div>
            <!-- Menu -->
            <div v-if="copyright_menu">
              <div class="inline-block mt-2 lg:mt-0" v-for="(item,i) in copyright_menu.items" :key="i">
                  <div class="flex flex-row items-center">
                      <h4>
                          <router-link class="mx-3 text-sml underline primary-hover" :to="item.url">{{item.text}}</router-link>
                      </h4>
                  </div>
              </div>
            </div>
            <!-- Menu -->
        </div>
        <!-- End fotter Section -->
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          copyright_menu: this.$settings.sections.footer.copyright.menu,
          year: new Date().getFullYear(),
          description: this.$settings.sections.footer.copyright.text,
        };
      },
    };
  </script>
    
<style scoped>
    @media screen and (max-width: 1024px){
        .copyright {
        flex-direction: column;
        text-align: center;
        justify-content: center;
        }
        
    }
</style>
    