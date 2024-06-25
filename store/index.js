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
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdG9yZSI6eyJfaWQiOiI2NjY2Y2UwOWZmYjdlYmU0Y2MyZmNkZGIiLCJuYW1lIjoiZ29sZFRoZW1lIiwic3ViZG9tYWluIjoiZ29sZHRoZW1lLnN0b3JlaW5vLndvcmxkIn0sInVzZXIiOnsicG9zaXRpb24iOiJDTElFTlQiLCJfaWQiOiI2NjY2Y2U2N2ZmYjdlYmU0Y2MyZmNlMzQiLCJmaXJzdG5hbWUiOiJyYWphIiwibGFzdG5hbWUiOiJlbCBnaGF6aSIsImVtYWlsIjoic3RvcmVpbm9yYWphQGdtYWlsLmNvbSJ9LCJjb21wYW55Ijp7InN0YXR1cyI6IlVOQ09NUExFVEVEIiwiX2lkIjoiNjA0MGFjZTg0ZTg3MjQwOTUwYTdkOGM5IiwibmFtZSI6InN0b3JlaW5vIn0sInRva2VuSWQiOiIzNjA2MDBUUVJVU1gzNjAzMzZNRk9NS0YiLCJpYXQiOjE3MTkzMDY3MDcsImV4cCI6MTcyMDE3MDcwN30.5NKsGH-HHBFWIenddbpxZYFkHEawv4l6bPuwtekCfcE',
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
          brandImage:""
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
