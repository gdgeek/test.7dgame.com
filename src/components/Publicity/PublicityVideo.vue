<template>
  <!-- 产品中心 -->
  <section class="section-box">
    <!-- content部分 -->
    <div class="body-box" align="center">
      <div class="publicity-title-h3 p-title-m">Magic miracles are coming</div>
      <div class="publicity-title-small">
        It can realize AR real scene display and multi-device digital
        visualization collaboration
      </div>
      <div class="img-box">
        <div class="img-son-box p-title-m">You are the {{ count }} witness</div>
      </div>
      <p class="publicity-content-small p-title-ss">
        We are creating an AR metauniverse reality platform for the future
        metauniverse digital ecology, one-stop to achieve magical visualization
        processing.
      </p>
    </div>
    <br />
    <br />
  </section>
</template>

<script>
export default {
  name: 'PublicityVideo',
  data() {
    return {
      count: '1721'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/responsive-style.scss';
@import '~@/styles/publicity-position.scss';
.section-box {
  padding: 5% 20px 2%;
}
.body-box {
  margin: 30px 0 10px;
}

.publicity-title-h3 {
  font-size: 36px;
  font-weight: 400;
  color: #00cccc;
}
.publicity-title-small {
  color: #5a5a5b;
  font-weight: lighter;
  padding: 15px 0 30px;
  font-size: 18px;
}
.publicity-content-small {
  color: #5a5a5b;
  font-size: 16px;
  max-width: 500px;
  font-weight: lighter;
  line-height: 24px;
}
.img-box {
  position: relative;
  margin-top: 20px;
  height: 60vw;
  max-width: 1000px;
  max-height: 600px;
  background: url('/media/bg/ma-bg.png') center no-repeat;
  background-size: cover;
}
.img-son-box {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 50%;
  height: 20%;
  font-size: 34px;
  font-weight: lighter;
  color: #fff;
}
</style>
