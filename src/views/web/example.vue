<template>
  <div class="background-box screen-main-height">
    <cards />
  </div>
</template>

<script>
import Cards from '@/components/Web/Cards'
export default {
  name: 'Example',
  components: {
    Cards
  }
}
</script>

<style lang="scss" scoped>
.background-box {
  padding: 12px 1.4% 30px;
  // min-height: calc(100% - 125px);
  width: 100%;
  background-color: #d3d6de;
  overflow: hidden;

  background: url('/media/bg/02.jpg')  center no-repeat;
  background-size: cover;
}
.screen-main-height{
    min-height: calc(100vh - 120px);
}
</style>
