<template>
  <!-- 产品中心 -->
  <section class="section-box">
    <el-row :gutter="30">
      <el-col :span="22" :offset="2">
        <div class="reletion-title-small">user-centered</div>
        <div :class="[isBlack ? 'reletion-title-black' : 'reletion-title-h1']">
          <div class="p-title-m">Welcome to contact us.</div>
        </div>
        <!-- <div class="reletion-title-h1 p-title-m">欢迎联系我们</div> -->
      </el-col>
      <el-col :xs="22" :sm="22" :md="10" :lg="10" :xl="10" :offset="2">
        <div class="reletion-title-h3 p-title-s">Company Profile</div>
        <div class="qfe_wrapper">
          <div
            style="
              line-height: 32px;
              letter-spacing: 2px;
              width: 90%;
              margin-bottom: 30px;
            "
          >
            <span style="color: rgb(102, 102, 102)">
              <span style="font-family: arial; font-size: 16px">
                Shanghai Apple Reality Network Technology Co. LTD. as the
                earliest high-tech enterprise in the world to produce
                metauniverse AR reality application, Team project development
                experience, flexible and diverse technical solutions. And the
                future digital ecology integration, continuous progress.
              </span>
            </span>
          </div>
        </div>
      </el-col>
      <!-- 视频位置 -->
      <el-col :xs="22" :sm="22" :md="10" :lg="10" :xl="10" :offset="2">
        <div class="reletion-title-h3 p-title-s">Contact Information</div>
        <div class="qfe_wrapper">
          <div style="letter-spacing: 3px; line-height: 40px">
            <span style="color: rgb(102, 102, 102); font-size: 16px">
              <img
                src="/media/icon/relation-icon1.png"
                style="width: 20px; height: 20px"
              />
              25-1 Hongcao Road, Xuhui District, Shanghai
            </span>
            <span style="font-size: 16px" />
          </div>
          <div style="letter-spacing: 3px; line-height: 40px">
            <span style="font-size: 16px">
              <span style="color: rgb(102, 102, 102)">
                <img
                  src="/media/icon/relation-icon2.png"
                  style="width: 18px; height: 18px"
                />
                15000159790
                <br />
              </span>
            </span>
          </div>
          <div style="letter-spacing: 3px; line-height: 40px">
            <span style="color: rgb(102, 102, 102)">
              <span style="font-size: 16px">
                <img
                  src="/media/icon/relation-icon3.png"
                  style="width: 20px; height: 20px"
                />
                dirui@bujiaban.com
              </span>
              <br />
            </span>
          </div>
          <br />
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  name: 'PublicityRelation',
  props: {
    isBlack: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/responsive-style.scss';
.section-box {
  padding: 8% 4% 6%;
}

.reletion-title-h1 {
  font-size: 32px;
  color: #00cccc;
  margin-bottom: 65px;
}
.reletion-title-black {
  font-size: 32px;
  font-weight: 400;
  color: #222222;
  margin-bottom: 65px;
}
.reletion-title-h3 {
  margin-bottom: 16px;
  font-size: 26px;
  color: #32373f;
}
.reletion-title-small {
  color: #2f2f2f;
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: lighter;
}
.reletion-content {
  color: #5a5a5b;
  margin-bottom: 8px;
}

.qfe_wrapper {
  word-wrap: break-word;
  margin-bottom: 30px;
}
</style>
