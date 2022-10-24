<template>
  <div class="bg-primary-content  h-full m-2 md:m-6 lg:m-8 xl:m-10">
    <a> test</a>
  </div>


</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import {Article} from "../type/type";
import {db} from "../config/cloudbase";
import {useRouter} from "vue-router";
import {themeChange} from 'theme-change'

onMounted(() => {
  themeChange(false)
})
const finished = ref(false);
const loading = ref(true);

const skip = ref(0);
const requestLength = 10;

let router = useRouter();

function onClick(id: string) {
  router.push('/article/' + id);
}


async function onLoad() {
  await db
      .collection("article")
      .orderBy("_createTime", "desc")
      .skip(skip.value)
      .limit(requestLength)
      .get()
      .then((res) => {
        articles.value = articles.value.concat(res.data);
        skip.value += res.data.length;
        if (res.data.length < requestLength) {
          finished.value = true;
        }
      })
      .catch((err) => {
        finished.value = true;
        console.log(err);
      });
  loading.value = false;
}

const articles = ref<Article[]>([]);

</script>


<style scoped>

</style>
