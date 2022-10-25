<template>
  <div class="h-full w-full">

    <div class="container mx-auto  ">
      <div v-for="article in articles" class="hero  bg-base-200 justify-items-start">
        <div class="hero-content flex-col lg:flex-row ">
          <img :src="article.cover" alt="cover" class="max-w-sm rounded-lg shadow-2xl"/>
          <div>
            <h1 class="text-5xl font-bold">{{ article.title }}</h1>
            <p class="py-6">{{ article.desc }}</p>
            <button class="btn btn-primary" @click="onClick(article._id)">See it</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useScroll} from "@vueuse/core";
import {onMounted, ref, watchEffect} from "vue";
import {db} from "../config/cloudbase";
import {Article} from "../type/type";
import {useRouter} from "vue-router";


// this is about data refresh
const {arrivedState} = useScroll(window);

const finished = ref(false);
const loading = ref(false);

const skip = ref(0);
const requestLength = 10;


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

onMounted(async () => {
  await onLoad();
})

watchEffect(() => {
  if (arrivedState.bottom && !loading.value && !finished.value) {
    onLoad();
  }
})

// this is router
let router = useRouter();

function onClick(id: string) {
  router.push('/articles/' + id);
}

</script>


<style scoped>

</style>