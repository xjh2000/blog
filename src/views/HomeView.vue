<script setup lang="ts">

import {ref} from "vue";
import {Article} from "../type/type";
import {db} from "../config/cloudbase";
import {useRouter} from "vue-router";

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

<template>
  <el-row :gutter="10">
    <el-col :md="6" :sm="4" :xs="0">
      <p>this is left</p>
    </el-col>
    <el-col :md="12" :sm="16" :xs="24">
      <div
          v-infinite-scroll="onLoad"
          class="list"
          :infinite-scroll-disabled="finished"
          v-loading="loading"
      >
        <el-space direction="vertical" size="large">

          <el-card @click="onClick(article._id)" v-for="(article,index) in articles" :key="index" class="list-item">
            <el-row :gutter="40">
              <el-col :span="8">
                <el-image style="border-radius: 20px" lazy :src="article.cover"></el-image>
              </el-col>
              <el-col :span="16">
                <p style="font-size: 1em">{{ article.title }}</p>
                <p style="font-size: 0.8em">{{ article.desc }}</p>
                <el-tag v-for="tag in article.tags">{{ tag }}</el-tag>
              </el-col>
            </el-row>
          </el-card>

        </el-space>

      </div>
    </el-col>
    <el-col :md="6" :sm="4" :xs="0">
      <p>this is right</p>
    </el-col>
  </el-row>


</template>

<style scoped>
.list-item:hover {
  filter: brightness(0.5);
}
</style>
