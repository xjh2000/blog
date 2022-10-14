import cloudbase from "@cloudbase/js-sdk"


export const app = cloudbase.init({
  region: "ap-shanghai",
  env: "xjh-blog-8gu8g9pi25a5a3fb"
});

export const auth = app.auth({persistence: "local"});

export const db = app.database();

