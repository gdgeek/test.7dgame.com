<template>
  <!-- 子幕图 -->
  <section class="font-text">
    <el-row>
      <!-- 手机显示 -->
      <el-col :span="24" class="hidden-md-and-up">
        <div class="background-box-image">
          <div class="column-title" align="center">
            <h3>{{ infoTel }}</h3>
            <p style="font-weight: lighter">{{ infoTitle }}</p>
          </div>
        </div>
      </el-col>
      <!-- PC显示 -->
      <el-col :span="24" class="hidden-sm-and-down">
        <div class="background-box-image">
          <div class="column-title" align="center">
            <div style="font-size: 36px">{{ infoTel }}</div>
            <p style="font-weight: lighter; font-size: 20px">{{ infoTitle }}</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  name: 'MedicalColumn',

  data() {
    return {
      infoTel: '融合AR/MR生态，引领创造未来!',
      infoTitle: '助力用户开启创造之门。'
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.background-box-image {
  display: flex;
  align-items: center;
  padding: 0 3% 20px;
  width: 100%;
  height: 40vw;
  max-height: 400px;
  background: url('/media/bg/column-bg.jpg') center no-repeat;
  background-size: cover;
}
.column-title {
  width: 100%;
  text-align: center;
  color: #fff;
}
</style>
