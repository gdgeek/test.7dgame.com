<template>
  <div id="CommuityPost">
    <el-container>
      <el-header style="padding:0">
        <div class="postheader">
          <span>交流论坛</span>
          <span style="font-size:13px;padding-left:20px;font-weight:500">欢迎提供对平台的意见。</span>
        </div>
      </el-header>

      <el-main style="padding:0" class="contentcolor">
        <el-row :gutter="20" style="margin: 0px 0px 0">
          <el-col :sm="16">
            <message :message_id="id" @setMessage="setMessage" />
            <reply :message_id="id" />
          </el-col>
          <el-col :sm="8">
            <el-container>
              <el-main style="padding-left:6px">
                <info-card v-if="message && message.info !== null" :info="JSON.parse(message.info)" />
                <mr-p-p-user-creater />

              </el-main>
            </el-container>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Message from '@/components/Message.vue'
import Reply from '@/components/Reply'
import MrPPUserCreater from '@/components/MrPP/MrPPUserSettings/MrPPUserCreater.vue'
import InfoCard from '@/components/InfoCard.vue'

export default {
  name: 'CommunityPost',
  components: {
    MrPPUserCreater,
    Message,
    InfoCard,
    Reply
  },
  data() {
    return {
      message: null
    }
  },
  computed: {
    id() {
      return parseInt(this.$route.query.id)
    }

  },
  methods: {
    setMessage(message) {
      this.message = message
    }
  }
}
</script>

<style lang="scss" scoped>
.postheader{
  width: 100%;
  height: 100%;
  padding-left: 40px;
  line-height: 60px;
  font-weight:500;
  font-size: 18px;
  color:#31829f;
  background-color: #f1f6f3;
}
.replytitle{
  position: relative;
  top:-9px;
  height: 32px;
  min-width: 200px;
}
.replyicon{
  float: left;
  width: 32px;
  height: 32px;
  background-color: rgb(205, 206, 199);
  text-align: center;
  line-height: 32px;
  border-radius:50%
}
.replynickname{
  float: left;
  height: 100%;
  line-height: 48px;
  margin-left: 6px;
  color: #444343;
}
</style>
