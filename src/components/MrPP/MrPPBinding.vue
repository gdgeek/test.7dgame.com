<template>
  <div>
    <h2>登录账号</h2>

    <el-form
      ref="form"
      class="login-body"
      :rules="rules"
      :model="form"
      label-width="75px"
    >
      <el-form-item label="用户名" prop="username" style="margin-bottom: 26px">
        <el-input v-model="form.username" suffix-icon="el-icon-user" />
      </el-form-item>
      <el-form-item label="密码" prop="password" style="margin-bottom: 26px">
        <el-input
          v-model="form.password"
          type="password"
          suffix-icon="el-icon-lock"
        />
      </el-form-item>

      <el-form-item class="login-button">
        <el-button style="width: 120px" type="primary" @click="submit('form')">
          绑定
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// @ is an alias to /src
import { setToken } from '@/utils/auth'
import { binding } from '@/api/wechats'
export default {
  name: 'Login',
  data() {
    return {
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
  computed: {
    token() {
      return this.$route.query.token
    }
  },

  methods: {
    succeed(data) {
      setToken(data.access_token)
      this.$router.push('/')
    },
    submit(formName) {
      const self = this
      this.$refs[formName].validate(valid => {
        if (valid) {
          binding({
            username: self.form.username,
            password: self.form.password,
            token: self.token
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
    }
  }
}
</script>
