<template>
  <el-card class="user-background">
    <el-row>
      <div style="min-height:100px;text-align:center" />
      <el-col :xs="18" :sm="18" :md="20" :lg="20" :xl="20">
        <router-link to="/settings/edit">
          <el-avatar icon="el-icon-user-solid" :src="avatarUrl" :size="100" style="float:left" @click="gotoEdit()" />
        </router-link>
        <div class="avatar-box">
          <h3 class="avatar-name">{{ nickName }}</h3>
          <small v-if="textarea!=''" style="color: #777777">{{ textarea }}</small>
          <small v-else style="color: #777777">个性签名</small>
        </div>
      </el-col>
      <el-col :span="4" align="right">
        <div style="padding-top:66px"> <el-button size="small" @click="gotoEdit()">编辑个人资料</el-button></div>
      </el-col>
    </el-row>
  </el-card>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MrPPUserHeader',
  computed: {
    ...mapGetters(['userData']),
    avatarUrl() {
      if (typeof this.userData.avatar === 'undefined') {
        return ''
      }
      return this.userData.avatar.url
    },
    nickName() {
      if (
        typeof this.userData.nickname === 'undefined' ||
        this.userData.nickname === null
      ) {
        return this.userData.username
      }
      return this.userData.nickname
    }
  },
  created() {
    const info = JSON.parse(this.userData.info)
    if (typeof info.textarea !== 'undefined') {
      this.textarea = info.textarea
    }
    if (typeof info.sex !== 'undefined') {
      this.sex = info.sex
    }
  },
  data() {
    return {
      textarea: '',
      sex: 'man'
    }
  },
  methods: {
    gotoEdit() {
      this.$router.push({ path: '/settings/edit' })
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-box{
  max-width:220px;
  height:100px;
  padding:10px 10px 0 20px;
  word-break:break-all;
  overflow:hidden;
}
.avatar-name{
  font-size:18px;
  font-weight:700;
  color:#555555;
  margin:16px 0 10px;
}
.user-background{
   min-height: 150px;
  background-image: url("/media/image/bgcsky.jpg");
  background-repeat: no-repeat;
  background-size:cover;
  }
</style>
