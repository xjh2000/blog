import cloudbase from "@cloudbase/js-sdk"


export const app = cloudbase.init({
  region: "ap-shanghai",
  env: "xjh-blog-8gu8g9pi25a5a3fb"
});

export const auth = app.auth({persistence: "local"});

async function anonymousLogin() {
  const loginState = auth.hasLoginState();
  if (loginState) {
    // 登录态有效
  } else {
    // 没有登录态，或者登录态已经失效
    await auth.anonymousAuthProvider()
      .signIn()
      .then(() => {
        console.log("匿名登录成功")
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

anonymousLogin().then().catch();

export const db = app.database();

