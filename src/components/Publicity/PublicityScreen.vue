<template>
  <!-- 巨幕板块 -->
  <section>
    <!-- 模型通用组件占位 -->
    <!-- <demo-screen-show /> -->
    <el-row>
      <!-- 手机显示 -->
      <el-col :span="24" class="hidden-md-and-up">
        <div class="background-box-image">
          <div class="education-phone-box" align="left">
            <span>{{ infoTitle }}</span>
            <div
              style="
                width: 200px;
                font-weight: 400;
                font-size: 18px;
                color: #00cccc;
                word-wrap: break-word;
                margin: 5px 0;
              "
            >
              {{ infoTitle2 }}
            </div>
          </div>
        </div>
      </el-col>
      <!-- PC显示 -->
      <el-col :span="24" class="hidden-sm-and-down">
        <div class="background-box-image">
          <div class="medical-pc-box" align="left">
            <p class="medical-pc-subtitle">{{ infoTitle }}</p>
            <div class="medical-pc-title">{{ infoTitle2 }}</div>
            <!-- <p class="medical-pc-subtitle">AR元宇宙实景</p> -->
          </div>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
// import DemoScreenShow from '@/components/MrPP/MrPPDemo/DemoScreenShow.vue'

export default {
  name: 'PublicityScreen',
  components: {
    // DemoScreenShow
  },

  data() {
    return {
      infoTitle: 'Welcome to',
      infoTitle2: 'Apple Reality',
      infoTel: 15000159790
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
// @import '~@/styles/screenstyle.scss';
// @import '~@/styles/sandtable.scss';

.background-box-image {
  display: flex;
  align-items: center;
  padding: 1px 30px 20px;
  width: 100%;
  height: 30vw;
  max-height: 600px;
  // background-color: #c9eaf3;
  background: url('/media/bg/publicity-bg.jpg') center no-repeat;
  background-size: cover;
  background-size: 100%;
}

.medical-phone-box {
  margin-left: 3%;
  padding-top: 10px;
}
.medical-pc-box {
  margin-left: 8%;
}
.medical-pc-title {
  margin-bottom: 2%;
  font-size: 46px;
  font-weight: 400;
  color: #00cccc;
  // color: #32373f;
}
.medical-pc-subtitle {
  font-size: 26px;
  font-weight: 400;
  color: #32373f;
}
</style>
