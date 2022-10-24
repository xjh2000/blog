<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label @click="subMenuShow=true" tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/>
          </svg>
        </label>
        <ul tabindex="0" v-show="subMenuShow"
            class=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li @click="subMenuShow=false">
            <router-link to="home">
              <a>Home</a>
            </router-link>
          </li>
          <li @click="subMenuShow=false">
            <router-link to="articles">
              <a>Articles</a>
            </router-link>
          </li>

        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <router-link to="home">
        <a class="btn btn-ghost normal-case text-xl">Xjh Blog</a>
      </router-link>

    </div>
    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";

const subMenuShow = ref(false);

</script>

<style lang="less" scoped>

</style>