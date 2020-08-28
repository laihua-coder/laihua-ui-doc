---
title: usge
---

## 使用

::: warning 注意
为了展示如何编写示例, 用于标记代码部分结束的三点增加了空格分隔，使用时需要将空格去除。
:::

在 Markdown 文件中编写以下代码：

````html
::: demo 此处放置代码示例的描述信息，支持 `Markdown`
语法，**描述信息只支持单行** ```html
<template>
  <div class="red-center-text">
    <p>{{ message }}</p>
    <input v-model="message" placeholder="Input something..." />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        message: "Hello Vue"
      };
    }
  };
</script>
<style>
  .red-center-text {
    color: #ff7875;
    text-align: center;
  }
</style>
` ` ` :::
````

运行效果如下

::: demo 此处放置代码示例的描述信息，支持 `Markdown` 语法，**描述信息只支持单行**

```html
<template>
  <div class="red-center-text">
    <p>{{ message }}</p>
    <input v-model="message" placeholder="Input something..." />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        message: "Hello Vue"
      };
    }
  };
</script>
<style>
  .red-center-text {
    color: #ff7875;
    text-align: center;
  }
</style>
```

:::
