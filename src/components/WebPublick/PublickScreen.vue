<template>
  <el-row
    class="background-box-image"
    :style="{ 'background-image': 'url(' + bgUrl + ')' }"
  >
    <!-- 手机显示 -->
    <el-col :span="24" class="hidden-md-and-up">
      <div class="public-phone-box font-title" :align="titlePosition">
        <div :style="{ color: titleColor, fontSize: 24 + 'px' }">
          {{ infoTitle2 }}
        </div>
        <p>
          <a
            ref="telPhone"
            :href="'tel' + ':' + infoTel"
            :style="{ color: titleColor }"
            class="phone-boder"
          >
            点击拨打
            <i class="el-icon-phone-outline" />
            {{ infoTel }}
          </a>
        </p>
      </div>
    </el-col>
    <!-- PC显示 -->
    <el-col :span="24" class="hidden-sm-and-down">
      <div class="public-pc-box font-title" :align="titlePosition">
        <div class="public-pc-title" :style="{ color: titleColor }">
          {{ infoTitle }}
        </div>
        <div class="public-pc-title" :style="{ color: titleColor }">
          {{ infoTitle2 }}
        </div>
        <h1
          class="font-text"
          :style="{
            color: titleColor,
            fontWeight: 'lighter'
          }"
        >
          即刻拨打
          {{ infoTel }}
        </h1>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'PublickScreen',
  props: {
    infoTel: {
      type: Number,
      require: true
    },
    infoTitle: String,
    infoTitle2: String,
    titleColor: String,
    titlePosition: {
      type: String,
      require: true
    },
    bgUrl: {
      type: String,
      require: true
    }
  },

  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.background-box-image {
  display: flex;
  align-items: center;
  padding: 1px 3% 20px;
  width: 100%;
  height: 30vw;
  max-height: 650px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.public-phone-box {
  margin: 0 3%;
  padding-top: 20px;
}
.public-pc-box {
  margin: 0 8%;
}
.public-pc-title {
  margin-bottom: 1%;
  font-size: 46px;
  font-weight: 400;
}
.phone-boder {
  border-bottom: 2px solid #82eafa;
}
</style>
