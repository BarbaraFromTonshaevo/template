// хранилище состояний компонент таких как шапка, body и др.
import { defineStore } from "pinia";

export const useAppStateStore = defineStore("appStateStore", {
  state: () => ({
    headerIsHidden: false,
    bodyNoScroll: false,
  }),
  actions: {
    // видимость шапки
    makeHeaderVisible() {
      this.headerIsHidden = false;
    },
    makeHeaderHidden() {
      this.headerIsHidden = true;
    },
    // скролл на body
    bodyWithoutScroll() {
      this.bodyNoScroll = true;
    },
    bodyWithScroll() {
      this.bodyNoScroll = false;
    },
  },
});
