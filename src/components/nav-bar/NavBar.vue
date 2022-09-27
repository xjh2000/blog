<script setup lang="ts">

import {ref, watch} from "vue";
import router from "../../router";
import {useRoute} from "vue-router";

const current = ref<string[]>(['mail']);
const menuClick = ({key}: { key: string }) => {
  router.push(key);
}

let route = useRoute();

watch(route, (route) => {
  current.value[0] = route.path;
})


</script>

<template>
  <AMenu v-model:selectedKeys="current" mode="horizontal" theme="dark" @click="menuClick">
    <AMenuItem key="/home">
      Home
    </AMenuItem>
    <AMenuItem key="/about">
      About
    </AMenuItem>
  </AMenu>
</template>


<style scoped>

</style>