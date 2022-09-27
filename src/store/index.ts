import {createPinia} from "pinia";

let pinia = createPinia();
pinia.use(({store}) => {
  store.$subscribe((mutation, state) => {
    localStorage.setItem(mutation.storeId, JSON.stringify(state));
  });
});

export default pinia;