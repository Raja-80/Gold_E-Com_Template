import Vuex from "vuex";
const createStore = () => {
  return new Vuex.Store({
    state: () => {
      return {
        loading: true,
        customer: null,
        IP: undefined,
        showCurrencyModal: false,
        cart: [],
        isPreview: false,
        wishlist: [],
        seo: {
          title: "",
          description: "",
          keywords: [],
          url: "",
          image: "",
          metaTags: [],
          scripts: [],
        },
        settings: null,
        domain: "www.storeino.com",
        apps: [],
        // DEV TOKEN
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdG9yZSI6eyJfaWQiOiI2NTAxNzQ2ZjgzYjllZjFiZjkxNTZlNGEifSwic291cmNlIjoiVEhFTUVTIiwiaWF0IjoxNjk1MDM0NzA3LCJleHAiOjE3MjY1NzA3MDd9.oZ-LNGERaTkvqW1ob-zL0qfUgKrPly5EtYyRgF4GO3g",
        // PROD TOKEN
        // token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdG9yZSI6eyJfaWQiOiI2NDFkODYxMmM1OTIzZTAwZGJhZjJlMTcifSwic291cmNlIjoiVEhFTUVTIiwiaWF0IjoxNjk1MDU0Nzc2LCJleHAiOjE3MjY1OTA3NzZ9.2cX0_wUQdeizPK8x4n_gZgDqr_sBqnzgveRFbKMfe2k',
        primary: {
          rgb: { r: 0, g: 0, b: 0 },
          color: "#000000",
        },
        search: "",
        defaults: {
          image: "https://storeno.b-cdn.net/themes/palest/default-shop.jpg",
          logo: "https://storeno.b-cdn.net/stores/5-2023/1683623353701.png",
          icon: "https://storeno.b-cdn.net/themes/palest/icon.png",
        },
        baseURL: "https://api-stores.storeino.world/api",
        currency: {
          symbol: "DH",
          code: undefined,
        },
        language: {
          name: "Unknown",
          code: undefined,
        },
        fullImage: null,
        showHeaderMenu: false,
      };
    },
    actions: () => {},
    mutations: () => {},
    getters: () => {},
  });
};
export default createStore;
