<template>
  <div>
    {{ option }}
    <br />

    <el-button type="primary" @click="doit">主要按钮</el-button>
  </div>
</template>

<script>
import { getToken } from '@/api/v1/token'
// import axios from 'axios'
var wx = require('weixin-js-sdk')
const randomstring = require('random-string')
const sha1 = require('sha1')
export default {
  name: 'Test',
  data() {
    return {
      loaded: false,
      option: null
    }
  },
  created() {},
  mounted() {
    const self = this
    getToken().then(ret => {
      // console.error(ret.data.token)

      const href = window.location.href.split('#')

      const timestamp = Date.parse(new Date()) / 1000

      const noncestr = randomstring({ length: 16 })
      const jsapi_ticket = ret.data.token
      const url = href[0]
      self.option = {
        noncestr,
        jsapi_ticket,
        timestamp,
        url
      }
      var sigList = []
      for (var k in self.option) {
        sigList.push(k.trim() + '=' + self.option[k])
      }
      sigList.sort()
      const sigStr = sigList.join('&')

      const signature = sha1(sigStr)
      self.appid = ret.data.appid
      wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: self.appid, // 必填，公众号的唯一标识
        timestamp: self.option.timestamp, // 必填，生成签名的时间戳
        nonceStr: self.option.noncestr, // 必填，生成签名的随机串
        signature: signature, // 必填，签名
        jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表
      })
      wx.ready(function () {
        self.loaded = true
        console.log('微信 isReady')
      })
      wx.error(function (res) {
        alert(res)
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
      })
    })
  },
  methods: {
    doit() {
      wx.checkJsApi({
        jsApiList: ['chooseWXPay'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
        success: function (res) {
          console.error(res)
          alert(res)
        }
      })
    }
  }
}
</script>
