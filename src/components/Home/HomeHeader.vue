<template>
  <div class="home-header">
    <el-row :gutter="10">
      <el-col :md="14" :span="24">
        <div class="home-avatar-container">
          <el-avatar
            class="home-avatar-child"
            icon="el-icon-user-solid"
            :src="avatarUrl"
            :size="100"
            style="float: left"
            @click="gotoEdit()"
          />
          <div>
            <div class="home-avatar-info">
              <h3 class="home-avatar-name">{{ nickName }}</h3>
              <small v-if="textarea != ''" style="color: #777777">
                {{ textarea }}
              </small>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :md="10" :span="24">
        <div class="hidden-sm-and-down hidden-box" />
        <div class="home-header-button">
          <el-button size="small" @click="gotoEdit()">编辑个人资料</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
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
    if (!!info && typeof info.textarea !== 'undefined') {
      this.textarea = info.textarea
    }
    if (!!info && typeof info.sex !== 'undefined') {
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
.home-avatar-name {
  font-size: 18px;
  font-weight: 700;
  color: #555555;
  margin: 16px 0 10px;
}
.home-header {
  min-height: 150px;
  background-image: url('/media/image/header_bg.jpg');
  // background-image: url('/media/image/bgcsky.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.hidden-box {
  height: 90px;
}

.home-header-button {
  margin: 22px 50px 18px 0;
  float: right;
}

.home-avatar-container {
  margin-top: 25px;
  margin-left: 50px;
  margin-right: 50px;
  height: 100px;
  // outline: dashed 1px black;
  /* Setup */
  position: relative;
}
.home-avatar-info {
  margin-top: 10px;
  margin-left: 120px;
  position: absolute;
}

.home-avatar-child {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 0%;
  margin-top: -50px; /* Half this element's height */
  // margin-left: -50px; /* Half this element's height */
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
