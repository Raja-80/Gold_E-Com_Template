import Vuex from 'vuex'
const createStore = () => {
    return new Vuex.Store({
      state: ()=>{
        return {
          loading:true,
          customer:null,
          IP: undefined,
          showCurrencyModal: false,
          cart: [],
          isPreview:false,
          whishlist: [],
          seo: {
            title: '',
            description: '',
            keywords: [],
            url: '',
            image: '',
            metaTags: [],
            scripts: [],
          },
          settings: null,
          domain: 'www.storeino.com',
          apps: [],
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdG9yZSI6eyJfaWQiOiI2MThmMDFlZjZmYWYzYzAxOWU1ZGEyZTEifSwic291cmNlIjoiVEhFTUVTIiwiaWF0IjoxNjg2MjI1NTgxLCJleHAiOjE3MTc3NjE1ODF9.m4pFbnIS28juwtYVJZNHYdAO7e2dKZKWloAi9HII9Eo',
          primary: {
            rgb: { r:0, g:0, b:0 },
            color: '#000000'
          },
          search: '',
          defaults: {
              image: "https://storeno.b-cdn.net/themes/palest/default-shop.jpg",
              logo: "https://storeno.b-cdn.net/stores/5-2023/1683623353701.png",
              icon: "https://storeno.b-cdn.net/themes/palest/icon.png"
          },
          baseURL: 'https://api-stores.storeino.world/api',
          currency: {
            symbol: "DH",
            code: undefined
          },
          language: {
            name: "Unknown",
            code: undefined
          },
          //
          fullImage: null,
          showHeaderMenu: false
        }
      },
      actions: ()=>{},
      mutations: ()=>{},
      getters: ()=>{}
    })
  }
export default createStore
