<template>
  <div>
    <h2>微信扫码（登陆/注册）</h2>
    <div
      v-if="active"
      v-loading="expire"
      element-loading-text="二维码过期(点击刷新)"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      @click="reload()"
    >
      <el-image
        :src="qrcode"
        style="width: 100%; height: 300px"
        fit="contain"
        lazy
      >
        <div slot="error" class="image-slot">
          <div
            v-loading="loading"
            element-loading-text="读取微信二维码"
            class="father"
          />
        </div>
      </el-image>
    </div>
  </div>
</template>

<script>
import { UpdateAbility } from '@/ability/ability'
import { qrcode, openid } from '@/api/wechats'
import { setToken } from '@/utils/auth'
// @ is an alias to /src
export default {
  name: 'MrPPQrcode',
  props: {
    active: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      loading: true,
      qrcode: null,
      token: null,
      interval: null,
      expire: false
    }
  },
  watch: {
    active(value) {
      const self = this
      if (value) {
        if (self.qrcode === null) {
          self.init()
        }
        self.enable()
      } else {
        self.disable()
      }
    }
  },
  beforeDestroy() {
    this.disable()
  },

  methods: {
    load() {
      const self = this
      qrcode().then(response => {
        self.qrcode =
          'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=' +
          response.data.qrcode
        self.token = response.data.token
        setTimeout(() => {
          self.expire = true
        }, response.data.lifetime * 1000)
        self.expire = false
      })
    },
    reload() {
      const self = this
      if (self.expire) {
        self.load()
      }
    },
    init() {
      const self = this
      self.load()
    },
    refresh() {
      const self = this
      if (self.expire) {
        return
      }
      openid(this.token).then(response => {
        if (typeof response.data !== 'undefined') {
          if (
            typeof response.data.token !== 'undefined' &&
            response.data.token === self.token
          ) {
            if (typeof response.data.access_token !== 'undefined') {
              setToken(response.data.access_token)
              this.$store.commit('user/setUser', response.data.user)

              UpdateAbility(self.$ability, response.data.user.roles)
              this.$router.push('/')
            } else {
              this.$router.push({
                path: '/site/wechat-signup',
                query: { token: response.data.token }
              })
            }
          }
        }
      })
    },
    enable() {
      const self = this
      self.interval = setInterval(() => {
        self.refresh()
      }, 3000)
    },
    disable() {
      const self = this
      clearInterval(self.interval)
    }
  }
}
</script>
<style scoped>
.father {
  position: absolute;
  height: 300px;
  width: 100%;
  background-color: #2aabd2;
}
</style>
