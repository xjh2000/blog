<template>
  <basic-layout>
    <nav-bar/>
    <router-view/>
  </basic-layout>


</template>

<script setup lang="ts">

import BasicLayout from "./BasicLayout.vue";
import {ref} from "vue";
import NavBar from "../compose/NavBar.vue";

const activeIndex = ref('/home');

</script>


<style scoped>


</style>