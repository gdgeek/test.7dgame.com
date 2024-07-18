<template>
  <mr-p-p-site>
    <h2 class="reset-title">重置密码</h2>
    <p class="reset-tips">请输入您新的密码，用于重置。</p>
    <el-form
      ref="form"
      class="reset-body"
      :rules="rules"
      :model="form"
      label-width="80px"
    >
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="form.password"
          autocomplete="off"
          suffix-icon="el-icon-lock"
          type="password"
        />
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPassword">
        <el-input
          v-model="form.checkPassword"
          type="password"
          autocomplete="off"
          suffix-icon="el-icon-view"
        />
      </el-form-item>
      <el-form-item class="reset-button">
        <el-button style="width: 120px" type="primary" @click="submit('form')">
          确定
        </el-button>
      </el-form-item>
    </el-form>
    <div class="reset-link">
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
import { resetPasswordToken, resetPassword } from '@/api/sites'
import { mapMutations } from 'vuex'
export default {
  name: 'ResetPassword',
  components: {
    MrPPSite
  },
  methods: {
    ...mapMutations([
      'flashSetup'
    ]),
    checkToken: function() {
      const self = this
      resetPasswordToken(self.token).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
        self.flashSetup({
          title: '修改密码失败',
          type: 'error',
          description: '验证码错误或者过期，请重新申请修改密码。'
        })
        self.$router.push({ path: '/site' })
      })
    },
    submit(formName) {
      const self = this
      this.$refs[formName].validate(valid => {
        if (valid) {
          resetPassword(self.token, self.form).then(response => {
            self.flashSetup({
              title: '修改密码成功',
              description: '请登录您的账户。'
            })
            self.$router.push({ path: '/site' })
          }).catch(error => {
            console.log(error)
          })
        }
      })
    }
  },
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.form.checkPassword !== '') {
          this.$refs.form.validateField('checkPassword')
        }
        callback()
      }
    }
    const checkPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }

    return {
      form: {
        password: null,
        checkPassword: null
      },
      rules: {
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度应该大于6', trigger: 'blur' },
          { validator: validatePassword, trigger: 'blur' }
        ],
        checkPassword: [
          { required: true, message: '请输入校验密码', trigger: 'blur' },
          { validator: checkPassword, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    token() {
      return this.$route.query.token
    }
  },
  created: function() {
    this.checkToken()
  }

}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.reset-title {
  color: #444444;
  margin: 20px 0 20px;
  text-align: center;
  font-weight: bold;
}
.reset-tips {
  margin: 10px 60px 0;
  text-align: center;
}
.reset-body {
  margin-top: 20px;
  height: 100%;
  max-width: 100%;
  padding: 10px 30px 0px 20px;
}
.reset-button {
  text-align: right;
}
.reset-link {
  padding: 0 10px;
  margin-bottom: 20px;
}
.reset-link a {
  color: rgb(28, 160, 212);
  font-size: 16px;
}
</style>
