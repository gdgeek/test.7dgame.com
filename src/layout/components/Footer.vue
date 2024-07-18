<template>
  <el-card>
    <div :class="{ 'background-screen-max': maxwidth }">
      <div style="float: right; height: 40px; padding-right: 10px">
        <span v-for="item in information.data.companies" :key="item.name">
          <el-link :href="item.url" target="_blank" :underline="false">
            <i class="el-icon-s-home" />
            <span class="font-text">
              {{ item.name }} ({{ information.data.description }})
            </span>
          </el-link>
        </span>

        <span v-if="information.data.beian">
          |
          <el-link
            href="https://beian.miit.gov.cn/"
            target="_blank"
            :underline="false"
          >
            <i class="el-icon-s-order" />
            <span class="font-text">
              {{ information.data.beian }}
            </span>
          </el-link>
        </span>
        <span v-if="information.data.version">
          |
          <el-link target="_blank" :underline="false">
            <i class="el-icon-info" />
            <span class="font-text">
              {{ information.data.version }}
            </span>
          </el-link>
        </span>
      </div>
    </div>
  </el-card>
</template>

<script>
import '@/assets/font/font.css'
import { mapState } from 'vuex'

export default {
  props: {
    maxwidth: {
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
@import '~@/styles/screenstyle.scss';
</style>
