<template>
  <!-- 产品中心 -->
  <section>
    <div>title</div>
    <el-row :gutter="40">
      <!-- content部分 -->
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" align="center">
        <div style="width: 100%; height: 600px; background-color: pink">
          left
        </div>
      </el-col>
      <!-- 视频位置 -->
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" align="center">
        <div style="width: 100%; height: 600px; background-color: pink">
          right
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  name: 'MedicalVideo',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
// @import '~@/styles/sandtable.scss';
</style>
