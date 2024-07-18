<template>
  <div>
    <el-card class="box-card">
      <div slot="header">
        <font-awesome-icon icon="qrcode" />
        <b id="title"> 扫码连接</b>

      </div>
      <div class="box-item">
        <aside style="margin-top: 15px" />
        你好，可以启动iPad 连接工具扫码连接此系统。
        <br>
        <br>
        <el-card style=" width: 400px;" class="box-card">
          <div slot="header">
            <b id="title">
              程序扫码，连接服务器 [{{ ip }}]
            </b>

          </div>
          <qrcode-vue :value="value" :size="360" level="H" />
        </el-card>
      </div>

    </el-card>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
import environment from '@/environment.js'
import { mapState } from 'vuex'
export default {
  name: 'LocalPage',
  components: {
    QrcodeVue
  },
  data() {
    const qrcode = {
      data: {
        ip: environment.ip
      },
      veri: 'MrPP.com'
    }
    return {
      value: JSON.stringify(qrcode)
    }
  },

  computed: {
    ...mapState({
      document: state => state.document.index
    }),
    ip() {
      return environment.ip
    }

  },
  created: function() {

  }
}
</script>
