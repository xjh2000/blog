<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref, watchEffect} from "vue";
import {Article} from "../type/type";
import {db} from "../config/cloudbase";
import 'md-editor-v3/lib/style.css';
import {marked} from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import ClipboardJS from "clipboard";


const route = useRoute();
let renderer = new marked.Renderer();
let codeCount = 0;
new ClipboardJS('.btn');

renderer.code = (code: string, lang: string) => {
  codeCount += 1;

  const language = hljs.getLanguage(lang) ? lang : 'plaintext';
  let esCode = hljs.highlight(code, {language}).value;
  return `<pre class="relative ">
  <div class="overflow-x-scroll"><code id="code${codeCount}" class="language-${lang}">${esCode}</code>
  </div>
  <button  id="btn${codeCount}"  data-clipboard-action="copy" data-clipboard-target="#code${codeCount}"  class="btn btn-ghost absolute top-0 right-0 m-4 md:m-6 lg:m-8 xl:m-10">
    <svg  t="1666668735828" class="icon h-6 md:h-10 lg:h-12 xl:h-14 w-6 md:w-10 lg:w-12 xl:w-14 " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15436" width="200" height="200"><path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32z" p-id="15437"></path><path d="M704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" p-id="15438"></path></svg>
  </button>
</pre>`;
};

marked.setOptions(
    {
      renderer: renderer,
    }
);

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
      .where({_id: _.eq(route.params.articleId)})
      .get()
      .then((res) => {
        return res.data[0];
      })
      .catch((err) => {
        console.log(err);
      });
  article.value.content = marked.parse(article.value.content);
});


</script>

<template>

  <div class="">
    <div class=" p-10 text-base md:text-xl lg:text-2xl xl:text-3xl  bg-primary-content  container mx-auto
    prose prose-img:mx-auto prose-img:w-4/6 prose-pre:bg-accent-content
" v-if="article?.content">
      <div v-html="article.content"/>
    </div>
  </div>


</template>


<style scoped>

</style>