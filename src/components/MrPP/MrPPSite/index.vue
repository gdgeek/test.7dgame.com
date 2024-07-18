<template>
  <div class="container">
    <div class="main">
      <!-- box start-->
      <div class="box">
        <el-card shadow="hover" :body-style="{ padding: '15px' }">
          <slot />
        </el-card>
      </div>
      <!-- box end -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.linkcolor a {
  color: rgb(28, 160, 212);
}

.container {
  min-height: calc(100% - 125px);
  width: 100%;
  background-color: #d3d6de;
  overflow: hidden;

  background: url('/media/bg/02.jpg') center no-repeat;
  background-size: cover;
  .main {
    position: relative;
    width: 500px;
    max-width: 100%;
    padding: 30px 30px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .box {
    position: relative;
    height: 100%;
    width: 400px;
    max-width: 100%;
    padding: 10px 10px 10px 10px;
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: #fff;
    overflow: hidden;
  }
  .title {
    font-size: 35px;
    color: #444444;
    margin: 12px auto 30px auto;
    text-align: center;
    font-weight: bold;
  }
  .sub-title {
    font-size: 14px;
    padding: 10px 10px 10px 10px;
    text-align: center;
    color: #666;
  }
  .footer {
    height: 100%;
    padding: 10px 10px 10px 10px;
    border-radius: 5px;
    background-color: #fff;
    overflow: hidden;
  }
  .foot-summary {
    height: 46px;
    padding: 12px 10px;
  }
  .foot-tips {
    margin: 30px 0 70px 0;
    overflow: hidden;
  }
  .mrpp-title {
    font-size: 15px;
    padding: 0px 0px 0px 0px;
    color: #666;
  }
  .card-title {
    white-space: nowrap;
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
