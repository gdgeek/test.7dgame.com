<template>
  <!-- 第三人称视角板块 -->
  <section class="sandtable-section">
    <div align="center">
      <h1 class="section-title-size section-title-dark">第三人称视角</h1>
      <p class="f-text-color">我司算法发明专利</p>
      <p class="section-underline-style" />
    </div>
    <br />
    <div style="padding: 0 2%">
      <el-row :gutter="36">
        <el-col :xs="24" :sm="12" :md="14" :lg="16" :xl="17">
          <div
            style="padding: 40px 42px; background-color: #f8f8f8"
            class="section-radius"
          >
            <div style="margin: 4% 0 10%">
              <h2 style="font-weight: 400; color: #489ddb">
                什么是第三人称视角
              </h2>
              <p class="section-content-size">
                第三人称视角（SpectatorView），我司提出的技术概念，可以把操作者所看到的虚拟物品连同真实世界一起投影到
                屏幕上。早期项目通过多台设备HoloLens和单反相机来实现，因为其操作不方便成本极高已经逐渐被淘汰。
              </p>
            </div>

            <div style="margin-bottom: 10%">
              <h2 style="font-weight: 400; color: #489ddb">
                我司提供的基于iPad Pro方案
              </h2>
              <p class="section-content-size">
                现在主流的第三方视角方案，基于iPad的AR功能和投影功能实现。上海游七网络科技专注于三方视角的研发，提供了大量的稳定和校正算法，并著有发明专利。
                相关内容可参见报道：
                <el-link
                  type="primary"
                  href="https://yivian.com/news/74486.html"
                  target="_blank"
                >
                  https://yivian.com/news/74486.html
                </el-link>
              </p>
            </div>
            <div style="margin-bottom: 10%">
              <h2 style="font-weight: 400; color: #489ddb">大屏幕投影</h2>
              <p class="section-content-size">
                苹果公司提供了airplay投影技术，在无线情况下，保证视频稳定高清。目前大部分智能设备都支持airplay投屏，同时我司也可以免费提供投屏工具给客户使用。
              </p>
            </div>
            <div style="margin-bottom: 10%">
              <h2 style="font-weight: 400; color: #489ddb">多设备互动</h2>
              <p class="section-content-size">
                此第三人称视角方案，可以支持多设备互动，以及iPad相互操作。适用于引导员用iPad给参观者讲解的场景。也可以单独iPad使用和单独HoloLens2使用。相关细节可以扫描秒左侧二维码观看。
              </p>
            </div>
          </div>
          <br />
        </el-col>
        <el-col :xs="24" :sm="12" :md="10" :lg="8" :xl="7">
          <div
            style="background-color: #f8f8f8; padding: 30px; float: right"
            class="section-radius"
          >
            <img
              src="/media/bg/22332.jpg"
              style="width: 100%; max-height: 860px"
            />
          </div>
          <br />
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Thirdman',

  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '~@/styles/screenstyle.scss';
@import '~@/styles/sandtable.scss';
</style>
