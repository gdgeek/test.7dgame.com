<template>
  <mr-p-p-site>
    <h2 class="request-title">找回密码</h2>
    <p class="request-tips">
      请输入您注册时候的邮箱，一个重置密码的链接将被发送到那里。
    </p>

    <el-form
      ref="form"
      class="request-body"
      :rules="rules"
      :model="form"
      label-width="80px"
    >
      <el-form-item label="注册邮箱" prop="email">
        <el-input v-model="form.email" suffix-icon="el-icon-lock" />
      </el-form-item>

      <el-form-item class="request-button">
        <el-button style="width: 120px" type="primary" @click="submit('form')">
          确定
        </el-button>
      </el-form-item>
    </el-form>
    <div class="request-link">
      <router-link to="/site/login">
        <el-link type="primary" :underline="false">登录账号</el-link>
      </router-link>
      <br />
      <router-link to="/site/signup">
        <el-link type="primary" :underline="false">注册用户</el-link>
      </router-link>
      <br />
    </div>
  </mr-p-p-site>
</template>

<script>
// @ is an alias to /src
import MrPPSite from '@/components/MrPP/MrPPSite'

import { mapMutations } from 'vuex'
import { requestPasswordReset } from '@/api/sites'
export default {
  name: 'RequestPasswordReset',
  components: {
    MrPPSite
  },
  data() {
    return {
      form: {
        email: null
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change']
          }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['flashSetup']),
    submit(formName) {
      const self = this
      this.$refs[formName].validate(valid => {
        if (valid) {
          self.postEmail()
        } else {
          return false
        }
      })
    },
    postEmail() {
      const self = this
      requestPasswordReset(self.form)
        .then(response => {
          console.log(response)
          self.flashSetup({
            title: '提交成功',
            type: 'success',
            description:
              '请检查您的收件箱中的验证邮件，通过链接来重新设置您的密码。'
          })
          self.$router.push({ path: '/site' })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.request-title {
  color: #444444;
  margin: 20px 0 20px;
  text-align: center;
  font-weight: bold;
}
.request-tips {
  margin: 10px 60px 0;
  text-align: center;
}
.request-body {
  margin-top: 20px;
  height: 100%;
  max-width: 100%;
  padding: 10px 30px 0px 20px;
}
.request-button {
  text-align: right;
}
.request-link {
  padding: 0 10px;
  margin-bottom: 20px;
}
.request-link a {
  color: rgb(28, 160, 212);
  font-size: 16px;
}
</style>
