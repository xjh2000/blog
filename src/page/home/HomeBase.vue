<template>
  <t-button @click="()=>{userStore.online = !userStore.online}">toggle</t-button>
</template>

<script setup lang="ts">
import {getUserStore} from "../../store";

let userStore = getUserStore();

</script>

<style scoped>

</style>