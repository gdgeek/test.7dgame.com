<template>
  <div class="penkcardtitle">
    <div>background预留</div>
    <small>content</small>
    <el-divider />
    <div>浏览次数</div>
    <small>content</small>
    <el-divider />
    <div>回复次数</div>
    <small>content</small>
    <el-divider />
    <div>论坛规范</div>
    <small>content</small>
  </div>
</template>

<script>
export default {
  name: 'MrPPPenkCard'
}
</script>

<style lang="scss" scoped>
.penkcardtitle {
  color: #58606a;
}
.penkcardtitle div {
  margin: 24px 0 7px 0;
  font-size: 14px;
  font-weight: 400;
  // background-color: pink;
}
</style>
