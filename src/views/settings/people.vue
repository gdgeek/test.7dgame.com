<template>
  <div>
    <!-- <home-header /> -->
    <el-container>
      <el-main>
        <el-row :gutter="20">
          <el-col :sm="16">
            <!-- main部分 -->
            <el-card style="min-height: 460px">
              <section>
                <el-avatar
                  icon="el-icon-user-solid"
                  :src="avatarUrl"
                  :size="100"
                  style="float: left"
                />
                <div class="avatar-box">
                  <h3 class="avatar-name">{{ nickName }}</h3>
                  <small v-if="!!textarea" style="color: #777777">
                    {{ textarea }}
                  </small>
                  <small v-else style="color: #777777">个性签名</small>
                </div>
              </section>
              <el-divider />
              <h4>他的创作</h4>
              <mr-p-p-creator @refresh="refreshLiker" />
            </el-card>
            <br />
          </el-col>

          <el-col :sm="8">
            <!-- 右边card部分-->
            <mr-p-p-user-profile />
            <!-- <mr-p-p-user-creater /> -->
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// import HomeHeader from '@/components/Home/HomeHeader.vue'
// import MrPPUserCreater from '@/components/MrPP/MrPPUserSettings/MrPPUserCreater.vue'
import MrPPCreator from '@/components/MrPP/MrPPCreator'
import MrPPUserProfile from '@/components/MrPP/MrPPUserSettings/MrPPUserProfile.vue'
import { getMessagesWithLiker } from '@/api/v1/like'
import { mapGetters } from 'vuex'

export default {
  name: 'SettingsPeople',
  components: {
    // HomeHeader,,
    // MrPPUserCreater,
    MrPPUserProfile,
    MrPPCreator
  },
  data() {
    return {
      nickName: 'test3326',
      textarea: '用户简介'
    }
  },
  computed: {
    ...mapGetters(['userData'])
  },
  methods: {
    // 替换这个API方法
    refreshLiker(data, callback) {
      callback(
        getMessagesWithLiker(
          this.userData.id,
          data.sorted,
          data.search,
          data.page
        )
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 10px;
}
.user-background {
  min-height: 150px;
  // background-image: url("/media/image/bgcsky.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.avatar-box {
  max-width: 220px;
  height: 100px;
  padding: 10px 10px 0 20px;
  word-break: break-all;
  overflow: hidden;
}
.avatar-name {
  font-size: 18px;
  font-weight: 700;
  color: #555555;
  margin: 16px 0 10px;
}
</style>
