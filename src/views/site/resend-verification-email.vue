<template>
  <mr-p-p-site>
    <h2 class="resend-title">重新验证邮件</h2>
    <p class="resend-tips">请输入您的邮箱，我们会重新发送验证邮件到这里。</p>
    <el-form
      ref="form"
      class="resend-body"
      :rules="rules"
      :model="form"
      label-width="80px"
    >
      <el-form-item label="电子邮件" prop="email">
        <el-input v-model="form.email" suffix-icon="el-icon-message" />
      </el-form-item>
      <el-form-item class="resend-button">
        <el-button style="width: 120px" type="primary" @click="submit('form')">
          确定
        </el-button>
      </el-form-item>
    </el-form>

    <div class="resend-link">
      <router-link to="/site/login">
        <el-link type="primary" :underline="false">登录账号</el-link>
      </router-link>
      <br>
      <router-link to="/site/signup">
        <el-link type="primary" :underline="false">注册用户</el-link>
      </router-link>
      <br>
    </div>
  </mr-p-p-site>
</template>

<script>
// @ is an alias to /src
import MrPPSite from '@/components/MrPP/MrPPSite'
import { mapMutations } from 'vuex'
import { resendVerificationEmail } from '@/api/sites'

export default {
  name: 'ResendVerificationEmail',
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
    ...mapMutations([
      'flashSetup'
    ]),
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
      resendVerificationEmail(self.form)
        .then(response => {
          self.flashSetup({
            title: '提交成功',
            description: '请检查您的收件箱中的验证邮件，进行接下来的步骤。'
          })
          self.$router.push({ path: '/site' })
        })
        .catch(function(error) {
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
.resend-title {
  color: #444444;
  margin: 20px 0 20px;
  text-align: center;
  font-weight: bold;
}
.resend-tips {
  margin: 30px 100px 0;
  text-align: center;
}
.resend-body {
  margin-top: 20px;
  height: 100%;
  max-width: 100%;
  padding: 10px 30px 0px 20px;
}
.resend-button {
  text-align: right;
}
.resend-link {
  padding: 0 10px;
  margin-bottom: 20px;
}
.resend-link a {
  color: rgb(28, 160, 212);
  font-size: 16px;
}
</style>
