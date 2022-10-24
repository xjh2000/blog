<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref, watchEffect} from "vue";
import {Article} from "../type/type";
import {db} from "../config/cloudbase";
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const route = useRoute();

const article = ref<Article>({
  content: '',
  _id: "",
  _createTime: '',
  title: '',
  _updateTime: '',
});

watchEffect(async () => {
  let _ = db.command;
  article.value = await db.collection("article")
      .where({_id: _.eq(route.params.id)})
      .get()
      .then((res) => {
        return res.data[0];
      })
      .catch((err) => {
        console.log(err);
      });
});


</script>

<template>
  <div v-if="article?.content">
    <md-editor style="background-color: #121212" v-model="article.content" previewOnly theme="dark"/>
  </div>

</template>


<style scoped>

</style>