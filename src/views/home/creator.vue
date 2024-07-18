<template>
  <el-card>
    <el-tabs lazy style="min-height: 500px">
      <el-tab-pane label="我的创作">
        <mr-p-p-creator @refresh="refreshAuthor" />
      </el-tab-pane>
      <el-tab-pane label="我点赞的">
        <mr-p-p-creator @refresh="refreshLiker" />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import MrPPCreator from '@/components/MrPP/MrPPCreator'

import { getMessagesWithLiker } from '@/api/v1/like'
import { getMessagesWithAuthor } from '@/api/v1/message'

import { mapGetters } from 'vuex'
export default {
  name: 'Creator',
  components: {
    MrPPCreator
  },
  data() {
    return {
      post: null,
      thumUp: null
    }
  },
  methods: {
    refreshLiker(data, callback) {
      callback(
        getMessagesWithLiker(
          this.userData.id,
          data.sorted,
          data.search,
          data.page
        )
      )
    },

    refreshAuthor(data, callback) {
      callback(
        getMessagesWithAuthor(
          this.userData.id,
          data.sorted,
          data.search,
          data.page
        )
      )
    }
  },
  computed: {
    ...mapGetters(['userData'])
  }
}
</script>

<style lang="scss" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
