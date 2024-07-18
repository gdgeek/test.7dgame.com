<template>
  <el-card style="min-height:200px;" body-style="padding:0">
    <div class="info-title"><span style="margin: 0 30px;">支付中心</span></div>

    <el-row style="padding:24px 30px 10px" class="right-sub-title">
      <el-col> 账号 <el-tag size="mini"> {{ userData.username }} </el-tag></el-col>
      <el-col><span> M币 0 </span><span> 积分 0 </span> </el-col>
      <el-col v-show="$route.path=='/settings/user'"><router-link to="/settings/pay"><el-button type="primary" plain size="mini" style="width:100%">快速充值 </el-button></router-link></el-col>
      <el-col v-show="$route.path=='/settings/pay'"><router-link to="/settings/pay"><el-button type="primary" plain size="mini" style="width:100%">订单管理 </el-button></router-link></el-col>
    </el-row>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MrPPUserWallet',
  computed: {
    ...mapGetters(['userData'])
  }
}
</script>

<style lang="scss" scoped>
.el-col{
  margin-bottom:20px;
  font-size: 14px;
  font-weight: 400;
  color: #282a2b;
}
.info-title{
  height:39px;
  font-weight: 700;
  color: #666666;
  line-height:39px;
  border-bottom: 1px solid #e2e5ec
}
.right-sub-title span{
  margin-right: 26px;
}
</style>

