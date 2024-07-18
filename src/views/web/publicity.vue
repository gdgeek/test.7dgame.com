<template>
  <div class="background-screen-border">
    <!-- 医疗巨幕板块 -->
    <publicity-screen />
    <!-- 视频应用白底色 -->
    <publicity-video />
    <!-- 产品列表灰底色 -->
    <publicity-list />
    <!-- 联系我们板块白底色 -->
    <publicity-relation />
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
import PublicityScreen from '@/components/Publicity/PublicityScreen.vue'
import PublicityVideo from '@/components/Publicity/PublicityVideo.vue'
import PublicityList from '@/components/Publicity/PublicityList.vue'
import PublicityRelation from '@/components/Publicity/PublicityRelation.vue'
export default {
  name: 'Publicity',
  components: {
    PublicityScreen,
    PublicityVideo,
    PublicityList,
    PublicityRelation
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/responsive-style.scss';
</style>
