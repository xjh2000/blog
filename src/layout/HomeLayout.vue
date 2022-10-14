<script setup lang="ts">

import BasicLayout from "./BasicLayout.vue";
import {ref} from "vue";

const activeIndex = ref('/home');

</script>

<template>
  <basic-layout>
    <el-container>
      <el-header>
        <el-menu
            mode="horizontal"
            :router="true"
        >
          <el-menu-item route="/home">Home</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>

    </el-container>
  </basic-layout>


</template>


<style scoped>


</style>