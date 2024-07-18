<template>
  <div class="partner-background">
    <div align="center" class="partner-title">
      <h1 class="font-text" style="font-weight: 400">我们的合作伙伴</h1>
      <p class="font-text">
        我们服务过全球超过百家知名企业，与其达成了长期合作的信赖关系。
      </p>
    </div>
    <div align="center" class="partner-img">
      <img src="/media/bg/partner.jpg" style="width: 90%" />
    </div>
  </div>
</template>

<script>
import '@/assets/font/font.css'
export default {
  name: 'Partner',

  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.partner-background {
  width: 100%;
  padding: 20px 10px 40px;
  background-color: #f5f5f5;
}
.partner-title {
  padding: 20px;
}
.partner-img {
  padding: 0 3%;
}
</style>
