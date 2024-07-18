<template>
  <mr-p-p-site>
    <div class="logout-head">
      <h1 class="logout-welcome"> 正在登出</h1>
      <p class="logout-text">向服务器注销此次登陆</p>
      <div>
        <p class="logout-lead" />
      </div>
    </div>
  </mr-p-p-site>
</template>

<script>
// @ is an alias to /src
import MrPPSite from '@/components/MrPP/MrPPSite'
export default {
  name: 'Logout',
  components: {
    MrPPSite
  },
  created: function() {
    this.logout()
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/site?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.logout-head {
  padding: 10px 10px 10px 10px;
  max-width: 100%;
}

.logout-title {
  font-size: 14px;
  padding: 10px 10px 10px 10px;
  text-align: center;
  color: #666;
}

.logout-welcome {
  margin-top: 20px;
  font-size: 36px;
  font-weight: normal;
  color: #666;
}

.logout-text {
  font-size: 21px;
  font-weight: lighter;
  color: #666;
}

.logout-lead {
  font-size: 21px;
  font-weight: lighter;
  color: #666;
}
</style>
