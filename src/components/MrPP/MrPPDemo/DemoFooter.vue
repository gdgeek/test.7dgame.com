<template>
  <div class="footer" :class="{'fixed-footer':fixed}">
    <div class="copyright">
      <el-link href="https://bujiaban.com" target="_blank" :underline="false">
        <i class="el-icon-s-home" />
        {{ information.data.title }}
      </el-link>
      <!-- <br> -->
      <a href="https://beian.miit.gov.cn/" target="_blank" :underline="false">
        <i class="el-icon-s-order" />
        沪ICP备15039333号
      </a>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
export default {
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState({
      information: state => state.information
    })
  }
}
</script>

<style lang="scss" scoped>
.footer {
  text-align:center;
  font-size: 12px;
  margin: 0 30px;
  line-height:80px;
  .copyright a {
    color: rgb(40, 119, 129);
    padding: 0 20px;
    font-size: 14px;
  }
  .copyright a:hover {
    color: rgb(74, 168, 180);
  }
}
.fixed-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
}
</style>
