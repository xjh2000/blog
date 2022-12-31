<script setup lang="ts">
import {getUserStore} from "./store";

let userStore = getUserStore();

</script>

<template>
  <router-view/>
</template>

<style scoped>

</style>
