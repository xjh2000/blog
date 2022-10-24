<script setup lang="ts">

import BasicLayout from "./BasicLayout.vue";
import {ref} from "vue";

const activeIndex = ref('/home');

</script>

<template>
  <basic-layout>
    <router-view/>
  </basic-layout>


</template>


<style scoped>


</style>