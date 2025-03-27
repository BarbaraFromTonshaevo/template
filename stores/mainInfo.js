// хранилище для информации сайта, которая приходит из api
import { defineStore } from "pinia";

export const useMainInfoStore = defineStore("mainInfoStore", {
  state: () => ({
    main: [],
    info: {},
    links: {},
    isReady: true,
  }),
  actions: {
    async setHeaderData(res) {
      this.main = res.data.main;
      this.info = {
        phone: res.data.site_info[0].field_phone,
        email: res.data.site_info[0].field_email,
        address: res.data.site_info[0].field_address,
        social: {
          vk: "",
          telegram: res.data.site_info[0].field_telegram,
          whatsapp: res.data.site_info[0].field_whatsapp,
        },
      };
      this.links = {
				policy: res.links.link_policy.href
			}
      this.isReady = true;
    },
  },
});
