<template>
  <!-- 一个简单的直接引用video公共组件 -->
  <section class="bigbox">
    <div class="background-box-image" />
    <video-player
      ref="videoPlayer"
      style="width: 100%; height: 100%; margin: 0 auto"
      :playsinline="true"
      :options="playerOptions"
      class="video-js vjs-big-play-centered vjs-fluid"
    />
  </section>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
export default {
  name: 'SimpleVideo',
  components: { videoPlayer },
  // 直接引用组件，传入SRC地址即可
  props: {
    vdsrc: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      playerOptions: {
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: 'video/mp4',
            // url地址
            src: this.vdsrc
          }
        ],
        // 你的封面地址
        // poster: this.vdbg,
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bigbox {
  margin: 0 auto;
  max-width: 1600px;
  max-height: 1440px;
}
</style>
