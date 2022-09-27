<script setup lang="ts">

import NavBar from "./components/nav-bar/NavBar.vue";</script>

<template>
  <ALayout>
    <a-layout-header>
      <nav-bar/>
    </a-layout-header>
    <a-layout-content>
      <router-view/>
    </a-layout-content>
  </ALayout>
</template>
