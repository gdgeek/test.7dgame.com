<template>
  <mr-p-p-site>
    <div class="verify-head">
      <div>
        <p class="verify-lead">正在验证信箱</p>
        <el-alert v-if="fail" title="验证失败" :closable="false" type="error">
          无效的信箱token！
        </el-alert>
      </div>
      <br>
      <div class="module-link">
        <router-link to="/site/index">
          <el-link type="primary" :underline="false">欢迎页面</el-link>
        </router-link>
        <br>
        <router-link to="/site/login">
          <el-link type="primary" :underline="false">登录账号</el-link>
        </router-link>
        <br>
        <router-link to="/site/signup">
          <el-link type="primary" :underline="false">注册用户</el-link>
        </router-link>
      </div>
    </div>
  </mr-p-p-site>
</template>

<script>
// @ is an alias to /src
import MrPPSite from '@/components/MrPP/MrPPSite'
import { verifEmail } from '@/api/sites'
export default {
  name: 'VerifyEmail',
  components: {
    MrPPSite
  },

  data() {
    return {
      fail: false
    }
  },
  computed: {
    token() {
      return this.$route.query.token
    }
  },
  created: function() {
    const self = this
    verifEmail(this.token)
      .then(response => {
        console.log(response)
        self.$store.commit('flashSetup', {
          title: '信箱验证成功',
          description: '邮箱验证成功，请登录平台。'
        })
        self.$router.push({ path: '/site' })
      }).catch(error => {
        console.log(error)
        self.fail = true
      })
  }
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.verify-head {
  padding: 10px 10px 10px 10px;
  max-width: 100%;
}

.verify-title {
  font-size: 14px;
  padding: 10px 10px 10px 10px;
  text-align: center;
  color: #666;
}

.verify-welcome {
  margin-top: 20px;
  font-size: 36px;
  font-weight: normal;
  color: #666;
}

.verify-text {
  font-size: 21px;
  font-weight: lighter;
  color: #666;
}

.verify-lead {
  font-size: 21px;
  font-weight: normal;
  color: #666;
}
</style>
