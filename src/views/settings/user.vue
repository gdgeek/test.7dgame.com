<template>
  <div style="padding:0 18px 0">
    <!-- ueser heard -->
    <el-row>
      <el-col :span="24">
        <mr-p-p-user-header />
      </el-col>
    </el-row>

    <!-- user main -->
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="17" :lg="17" :xl="17" style="margin-bottom:10px">
        <mr-p-p-user-main />
      </el-col>
      <!-- right said bar -->
      <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
        <!-- sub right bar [User Info] -->
        <el-row>
          <el-col :span="24">
            <mr-p-p-user-creater />
          </el-col>
        </el-row>
        <!-- sub right bar [User Wallet] -->
        <el-row>
          <el-col :span="24">
            <mr-p-p-user-wallet />
          </el-col>
        </el-row>
        <!-- sub right bar [User Database] -->
        <el-row>
          <el-col :span="24">
            <mr-p-p-right-sub-card class="right-sub-card">
              <template v-slot:subcard-title>用户资源</template>
              <template v-slot:subcard-first-content>占位卡</template>
            </mr-p-p-right-sub-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>

<script>

import MrPPUserHeader from '@/components/MrPP/MrPPUserSettings/MrPPUserHeader.vue'
import MrPPUserMain from '@/components/MrPP/MrPPUserSettings/MrPPUserMain.vue'
import MrPPUserCreater from '@/components/MrPP/MrPPUserSettings/MrPPUserCreater.vue'
import MrPPUserWallet from '@/components/MrPP/MrPPUserSettings/MrPPUserWallet.vue'
import MrPPRightSubCard from '@/components/MrPP/MrPPUserSettings/MrPPRightSubCard.vue'
export default {
  name: 'User',
  components: {
    MrPPUserHeader,
    MrPPUserMain,
    MrPPUserCreater,
    MrPPUserWallet,
    MrPPRightSubCard
  },

  data() {
    return {
    }
  },
  computed: {

  },
  created() {

  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 10px;
  }

</style>

