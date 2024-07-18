<template>
  <div class="background">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="font-text">我们的合作伙伴</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">
          更多内容
        </el-button> -->
      </div>
      <div class="block">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>

      <br />
    </el-card>
  </div>
</template>

<script>
import '@/assets/font/font.css'
export default {
  name: 'Cooperation',
  components: {},
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.background {
  padding: 20px;
}

// .button {
//   padding: 0;
//   float: right;
// }
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
