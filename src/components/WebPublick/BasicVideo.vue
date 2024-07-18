<template>
  <!-- 多卡片列表视频播放，公用组件 -->
  <div>
    <!-- 卡片部分 -->
    <el-card
      shadow="hover"
      style="width: 94%"
      :body-style="{ padding: videoPadding + 'px' }"
    >
      <div>
        <img
          :src="item.image"
          class="image"
          style="width: 100%; position: relative; z-index: 0"
          @click="onSelected(item)"
        />
      </div>
      <div style="padding: 14px">
        <div style="height: 60px; text-align: left">
          <span>{{ item.title }}</span>
          <div class="bottom clearfix">
            <time class="time">{{ item.describe }}</time>
            <br />
          </div>
        </div>
        <br />
        <el-button type="text" class="button" @click="onSelected(item)">
          播放视频
        </el-button>
        <br />
      </div>
    </el-card>
    <br />

    <!-- 弹出视频页 -->
    <el-dialog
      :visible.sync="dialogVisible"
      :width="width + '%'"
      :before-close="handleClose"
      :title="video ? video.title : ''"
    >
      <el-card class="box-card" style="text-align: center">
        <video-player
          ref="videoPlayer"
          class="video-player-box"
          :options="playerOptions"
          :playsinline="true"
          custom-event-name="customstatechangedeventname"
          @play="onPlayerPlay($event)"
        />
      </el-card>
    </el-dialog>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import IsMobile from '@/layout/site/mixin/IsMobile'
import { videoPlayer } from 'vue-video-player'
export default {
  name: 'BasicVideo',
  components: {
    videoPlayer
  },

  mixins: [IsMobile],
  // 传入item对象，是url、image、title集合
  props: {
    item: {
      type: Object,
      required: true
    },
    videoPadding: {
      type: String,
      default: '0'
    }
  },
  data() {
    return {
      video: null,
      width: 65,
      playerOptions: {
        width: 400,
        muted: true,
        language: 'en',
        autoplay: true,
        fullscreen: { options: { navigationUI: 'hide' } },
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: 'video/mp4',
            src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
          }
        ],
        poster: 'http://localhost:9528/media/image/logo.gif'
      }
    }
  },
  computed: {
    isFullScreen() {
      if (document.fullscreen) {
        return true
      } else if (document.mozFullScreen) {
        return true
      } else if (document.webkitIsFullScreen) {
        return true
      } else if (document.msFullscreenElement) {
        return true
      } else if (window.fullScreen) {
        return true
      }
      return false
    },
    dialogVisible() {
      return this.video !== null
    },
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  mounted() {
    const self = this
    self.onresize()
    window.addEventListener('resize', self.onresize, false)
  },
  destroyed() {
    window.removeEventListener('resize', self.onresize)
  },
  methods: {
    goto(path) {
      this.$router.push(path)
    },
    onPlayerPlay(player) {
      if (this.$_isXS()) {
        player.requestFullscreen()
      }
    },
    onresize() {
      this.playerOptions.width = window.innerWidth * (this.width / 100) - 80
    },
    handleClose() {
      this.video = null
    },
    onSelected(item) {
      if (this.$_isSM()) {
        this.width = 100
      } else if (this.$_isMD()) {
        this.width = 80
      } else if (this.$_isXL()) {
        this.width = 65
      }
      this.onresize()

      this.playerOptions.sources[0].src = item.url
      this.playerOptions.poster = item.image
      this.video = { title: item.title }
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  cursor: pointer;
}
.time {
  font-size: 13px;
  color: #999;
}

.parent {
  position: absolute;
  z-index: 3;
  margin: 0px;
  opacity: 0.5;
}
.button {
  padding: 0;
  float: right;
}
</style>
