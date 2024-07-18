<template>
  <el-card style="min-height:200px;" body-style="padding:0">
    <div class="info-title"><span style="margin: 0 30px;"><slot name="subcard-title" /></span></div>

    <el-row style="padding:24px 30px 10px" class="right-sub-title">
      <el-col><slot name="subcard-first-content" /></el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'MrPPRightSubCard',
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.el-col{
  margin-bottom:20px;
  font-size: 14px;
  font-weight: 400;
  color: #282a2b;
}
.info-title{
  height:39px;
  font-weight: 700;
  color: #666666;
  line-height:39px;
  border-bottom: 1px solid #e2e5ec
}
.right-sub-title span{
  margin-right: 26px;
}
</style>
