<template>
  <el-dialog
    :title="dialogTitle"
    :visible.sync="dialogVisible"
    :close-on-click-modal="false"
    width="70%"
  >
    <el-form
      ref="form"
      :rules="rules"
      :model="form"
      class="signup-form"
      label-width="80px"
    >
      <el-form-item label="用户名" prop="username" style="margin-bottom: 26px">
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
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitForm('form')">注册账号</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { postPerson } from '@/api/v1/person'
export default {
  name: 'PersonCreate',

  props: {
    dialogTitle: {
      type: String,
      default: '选择文件'
    },
    dialogSubmit: {
      type: String,
      default: '确定'
    }
  },
  data: function () {
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
      dialogVisible: false,
      form: {
        username: null,
        password: null,
        checkPassword: null
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 4, message: '用户名称长度至少为4', trigger: 'blur' },
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
  mounted() {
    const self = this
    this.$nextTick(function () {
      this.$on('show', self.show)
      this.$on('hide', self.hide)
    })
  },
  methods: {
    submitForm(formName) {
      const self = this
      this.$refs[formName].validate(valid => {
        if (valid) {
          postPerson(self.form)
            .then(r => {})
            .finally(() => {
              self.$emit('refresh')
              self.hide()
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
      return true
    },
    show() {
      this.dialogVisible = true
    },
    hide() {
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped></style>
