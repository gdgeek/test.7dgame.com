<template>
  <!-- 列表 -->
  <div class="background-box">
    <el-row class="row-box">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="background-img">
          <div
            class="portal-main-background portal-background-url1 p-positon-auto"
          />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="background-text" align="left">
          <h2>Create the future in waves</h2>
          <p style="font-size: 16px; font-weight: lighter; line-height: 24px">
            We are standing out in the tidal wave of metaverse digitization.
            Will be single-minded, reflect the brand influence, innovation,
            jointly promote the development of related industries.
          </p>
        </div>
      </el-col>
    </el-row>
    <br />
    <br />
    <el-row class="row-box">
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="12"
        :xl="12"
        class="hidden-lg-and-up"
      >
        <div class="background-img">
          <div class="portal-background-url2 p-positon-auto" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="background-text" align="left">
          <h2>Metaverse AR live deployment</h2>
          <p style="font-size: 16px; font-weight: lighter; line-height: 24px">
            Through high-end visual and interactive experience of AR technology,
            deployment is carried out according to various required scenarios
            and schemes to complete the coverage and support of more fields and
            meet the surprise of continuous development.
          </p>
        </div>
      </el-col>
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="12"
        :xl="12"
        class="hidden-md-and-down"
      >
        <div class="background-img">
          <div class="portal-background-url2 p-positon-auto" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
export default {
  name: 'PublicityList',

  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/publicity-position.scss';
.background-box {
  padding: 5% 0 60px;
  background-color: #f7f6f9;
}
.row-box {
  padding: 0 30px;
}
.background-text {
  padding: 14% 20% 0 12%;
  // color: #040707;
  color: #32373f;
}
.background-img {
  position: relative;
  width: 100%;
  height: 50vw;
  max-height: 500px;
}
.portal-background-url1 {
  width: 80%;
  height: 80%;
  border-radius: 5px;
  background: url('/media/bg/exhibition2.jpg') center no-repeat;
  background-size: cover;
}
.portal-background-url2 {
  width: 80%;
  height: 80%;
  border-radius: 5px;
  background: url('/media/bg/m-list2.jpg') center no-repeat;
  background-size: cover;
}
</style>
