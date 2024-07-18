<template>
  <div>

    <el-card body-style="padding:0">
      <div class="pay-main-title">支付中心</div>
      <div style="padding: 20px">
        <trades />
      </div>
    </el-card>
  </div>
</template>

<script>
import Trades from '@/components/Trades.vue'

export default {
  name: 'Pay',
  components: {
    Trades
  }
}
</script>

<style lang="scss" scoped>
.pay-main-title {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-weight: 700;
  padding-left: 20px;
  color: #666666;
  background-color: #e6eef1;
  border-bottom: 1px solid #e2e5ec;
}
</style>
