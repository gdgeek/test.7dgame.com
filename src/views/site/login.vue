<template>
  <Site>
    <h2>登录账号</h2>
    <el-form
      ref="form"
      class="login-body"
      :rules="rules"
      :model="form"
      label-width="75px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" suffix-icon="el-icon-user" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="form.password"
          type="password"
          suffix-icon="el-icon-lock"
        />
      </el-form-item>

      <el-form-item class="login-button">
        <el-button style="width: 120px" type="primary" @click="submit('form')">
          进入
        </el-button>
      </el-form-item>
    </el-form>
    <div class="login-link">
      <router-link to="/site/signup">
        <el-link type="primary" :underline="false">注册用户</el-link>
      </router-link>
      <br />
      <router-link to="/site/request-password-reset">
        <el-link type="primary" :underline="false">找回密码</el-link>
      </router-link>
      <br />
    </div>
  </Site>
</template>

<script>
// @ is an alias to /src
import Site from '@/components/Site.vue2'
import { setToken } from '@/utils/auth'
import { login } from '@/api/sites'

export default {
  name: 'Login',
  components: {
    Site
  },
  data() {
    return {
      isShow: false,
      title: 'test',
      form: {
        username: null,
        password: null
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 5, message: '用户名称长度应该大于5', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度应该大于6', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {},

  methods: {
    succeed(data) {
      setToken(data.access_token)
      this.$router.push('/')
    },
    failed(message) {},
    submit(formName) {
      const self = this
      this.$refs[formName].validate(valid => {
        if (valid) {
          login({
            username: self.form.username,
            password: self.form.password
          })
            .then(response => {
              console.log(response)
              if (response.data) {
                self.succeed(response.data)
              }
            })
            .catch(function (error) {
              console.log(error)
              self.failed(error)
            })
        } else {
          return false
        }
      })
    },
    error(msg) {
      this.title = ''
      if (typeof msg === 'string') {
        this.title = msg
      } else {
        let i = 0
        for (const item in msg) {
          ++i
          this.title += i + '.' + item + ' : ' + msg[item] + '\n'
        }
      }
      this.isShow = true
    }
  }
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-title {
  color: #444444;
  margin: 20px 0 20px;
  text-align: center;
  font-weight: bold;
}
.login-body {
  margin-top: 36px;
  height: 100%;
  max-width: 100%;
  padding: 10px 40px 0px 10px;
}
.login-button {
  text-align: right;
}
.login-link {
  padding: 0 10px;
  margin-bottom: 20px;
}
.login-link a {
  color: rgb(28, 160, 212);
  font-size: 16px;
}
</style>
