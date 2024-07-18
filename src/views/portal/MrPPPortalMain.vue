<template>
  <main style="min-height:500px">
    <el-row :gutter="20">
      <el-col :span="24"><section class="portal-main-section portal-main-background"></section></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24"><section class="portal-main-section">第二幕</section></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24"><section class="portal-main-section">第三幕</section></el-col>
    </el-row>
  </main>

</template>

<script>
export default {
  name: 'MrPPPortalMain',

  data() {
    return {

    }
  }

}
</script>

<style lang="scss" scoped>
.portal-main-section{
  // min-height: 100px;
}
.portal-main-background{
  width: 100%;
  height:260px;
  background: url('/media/image/bgchololens2.jpg')  center no-repeat;
  background-size: cover;
  // background-size: 100%;
}
</style>
