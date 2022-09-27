<script setup lang="ts">
import {useRouter} from 'vue-router';

const router = useRouter();
const back = () => {
  // warning： Go to the home
  router.push({name: 'home'});
};
</script>

<template>
  <div class="content">
    <p>not find that url</p>
    <div class="operation-row">
      <button key="back" @click="back"> back</button>
    </div>
  </div>
</template>


<style scoped>

</style>