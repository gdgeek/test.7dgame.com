<template>
  <div>
    <h2 class="mrpp-title">注册新用户</h2>
    <div class="signup-head">
      <el-form
        ref="form"
        :rules="rules"
        :model="form"
        class="signup-form"
        label-width="80px"
      >
        <el-form-item
          label="用户名"
          prop="username"
          style="margin-bottom: 26px"
        >
          <el-input v-model="form.username" suffix-icon="el-icon-user" />
        </el-form-item>
        <el-form-item label="密码" prop="password" style="margin-bottom: 26px">
          <el-input
            v-model="form.password"
            autocomplete="off"
            suffix-icon="el-icon-lock"
            type="password"
          />
        </el-form-item>
        <el-form-item
          label="确认密码"
          prop="checkPassword"
          style="margin-bottom: 26px"
        >
          <el-input
            v-model="form.checkPassword"
            type="password"
            autocomplete="off"
            suffix-icon="el-icon-view"
          />
        </el-form-item>

        <el-form-item>
          <el-button-group class="signup-button">
            <el-button
              style="width: 120px"
              type="primary"
              @click="submit('form')"
            >
              注册
            </el-button>
          </el-button-group>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { signup } from '@/api/wechats'
import { setToken } from '@/utils/auth'
export default {
  name: 'MrPPSignup',
  data() {
    const checkUsername = (rule, value, callback) => {
      this.form.username = value.replace(/[\u4E00-\u9FA5]/g, '')
      callback()
    }
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
        username: null,
        password: null,
        checkPassword: null
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 5, message: '用户名称长度应该大于5', trigger: 'blur' },
          {
            validator: checkUsername,
            message: '用户名请避免使用中文',
            trigger: 'change'
          }
        ],

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
  methods: {
    submit(formName) {
      const self = this
      this.$refs[formName].validate(valid => {
        if (valid) {
          signup({
            username: self.form.username,
            password: self.form.password,
            token: self.token
          }).then(response => {
            setToken(response.data.access_token)
            this.$router.push('/')
          })
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
