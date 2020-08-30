<template>
  <div class="hello">
    <div>我的是一个alert组件</div>
    <el-alert title="成功提示的文案" type="success"></el-alert>
  </div>
</template>

<script>
export default {
  name: "LhAlert",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
