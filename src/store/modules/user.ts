import {defineStore} from 'pinia';
import store from "../index";


export const useUserStore = defineStore('user', {
    state: () => ({
        online: true,
    }),
    actions: {},
    persist: true
});

export function getUserStore() {
    return useUserStore(store);
}
