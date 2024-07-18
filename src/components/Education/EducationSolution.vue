<template>
  <div>
    <!-- 震撼沙盘板块 -->
    <section class="sandtable-section section-bgc-gray">
      <br />
      <div align="center">
        <h1 class="section-title-size section-title-dark title-lighter">
          应用场景
        </h1>
        <h4>强大的技术支持，适用广泛应用场景</h4>
        <p class="section-underline-blue" />
      </div>
      <el-row :gutter="30" class="section-card-padding">
        <el-col
          v-for="(item, index) in items.slice(0, videoSlice)"
          :key="index"
          align="center"
          :xs="24"
          :sm="12"
          :md="12"
          :lg="24 / videoSlice"
          :xl="24 / videoSlice"
        >
          <basic-video :item="item" :video-padding="videoPadding" />
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
import BasicVideo from '@/components/WebPublick/BasicVideo.vue'
import { data } from '@/views/web/data/examples.js'
// import { data } from '@/views/web/data/sandshow.js'

export default {
  name: 'EducationSolution',
  components: {
    BasicVideo
  },
  data() {
    return {
      // 视频展示数量
      videoSlice: 4,
      // 视频,边框厚度px，默认则无边框
      videoPadding: '0'
    }
  },
  computed: {
    items() {
      return data
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/screenstyle.scss';
@import '~@/styles/sandtable.scss';
</style>
