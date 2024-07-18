<template>
  <mr-p-p-site>
    <el-tabs type="border-card">
      <el-tab-pane label="新用户注册"><mr-p-p-signup>新用户注册</mr-p-p-signup></el-tab-pane>
      <el-tab-pane label="绑定已有用户"><mr-p-p-binding>绑定已有用户</mr-p-p-binding></el-tab-pane>
    </el-tabs>

  </mr-p-p-site>
</template>

<script>

// @ is an alias to /src
import MrPPSite from '@/components/MrPP/MrPPSite'
import MrPPSignup from '@/components/MrPP/MrPPSignup.vue'
import MrPPBinding from '@/components/MrPP/MrPPBinding.vue'
export default {
  name: 'WechatSignup',
  components: {
    MrPPSite,
    MrPPSignup,
    MrPPBinding
  },
  computed: {

    token() {
      return this.$route.query.token
    }
  }
}
</script>
