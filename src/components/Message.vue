<template>
  <div id="Message">
    <el-divider
      v-if="tagsMap && message && message.messageTags"
      content-position="left"
    >
      <mr-p-p-tags
        v-if="message && tagsMap"
        :tags-map="tagsMap"
        :message="message"
      />
    </el-divider>
    <el-dialog :title="'修改内容'" :visible.sync="dialog" width="70%">
      <mr-p-p-message-from ref="editor" :data="message" @post="changeMessage" />
    </el-dialog>
    <br />
    <el-card>
      <div slot="header" class="clearfix">
        <span v-if="message === null">载入...</span>
        <span v-else>
          <h4 style="display: inline; color: #494949">{{ message.title }}</h4>
        </span>

        <el-button-group
          v-if="message && tagsMap"
          style="float: right"
          :inline="true"
        >
          <el-button
            v-if="canUpdate(message)"
            size=""
            style="padding: 0 0 0 10px; color: #2190ac"
            type="text"
            @click="dialog = true"
          >
            修改内容
          </el-button>
          <el-button
            v-if="canDelete(message)"
            size=""
            style="padding: 0 0 0 10px; color: #2190ac"
            type="text"
            @click="deletedWindow(message.id, deletedMessage)"
          >
            删除帖子
          </el-button>
        </el-button-group>
        <!-- <div>预留</div> -->
      </div>

      <el-skeleton v-if="message === null" :rows="6" animated />
      <div
        v-else
        style="min-height: 100px; font-size: 15px; margin-bottom: 30px"
        v-html="message.body"
      />
      <el-row>
        <el-col :span="14">
          <el-button
            v-if="message"
            size="mini"
            :type="message.like ? 'primary' : ''"
            @click="ILike(message.like)"
          >
            <font-awesome-icon icon="fa-solid fa-thumbs-up" />
            赞同
            <span v-if="message.likesCount != 0">{{ message.likesCount }}</span>
          </el-button>
        </el-col>
        <el-col :span="10" align="right">
          <small v-if="message" style="color: #8790a7">
            {{ userData.nickname }} 编辑于 {{ message.updated_at }}
          </small>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import MrPPMessageFrom from '@/components/MrPP/MrPPMessageFrom.vue'
import { getMessage, deleteMessage, putMessage } from '@/api/v1/message'
import { postLike, removeLike } from '@/api/v1/like'
import { AbilityMessage } from '@/ability/ability'
import MrPPTags from '@/components/MrPP/MrPPTags.vue'


import moment from 'moment'
moment.locale('zh-cn')
// import Doing2 from '@/views/document/workdata/doing/doing2'
export default {
  name: 'Message',
  components: {
    MrPPTags,
    MrPPMessageFrom
  },
  data() {
    return {
      dialog: false,
      message: null
    }
  },
  computed: {
    ...mapGetters(['userData']),
    ...mapState({
      tagsMap: state => state.tags.tagsMap
    })
  },
  props: {
    message_id: {
      type: Number,
      default: -1
    }
  },
  watch: {
    message: function () {
      this.$emit('setMessage', this.message)
    }
  },
  created() {
    const self = this
    if (self.tagsMap == null) {
      self.refreshTags()
    }
    self.refresh()
  },
  methods: {
    ...mapActions('tags', {
      refreshTags: 'refreshTags'
    }),
    refresh() {
      const self = this
      getMessage(self.message_id).then(r => {
        self.message = r.data
      })
    },
    canDelete(message) {
      const self = this
      let managed = 0
      message.messageTags.forEach(item => {
        const tag = self.tagsMap.get(item.tag_id)
        if (tag.managed !== 0) {
          managed |= 1
          return
        }
      })
      return self.$can('delete', new AbilityMessage(message.author_id, managed))
    },
    canUpdate(message) {
      const self = this
      let managed = 0
      message.messageTags.forEach(item => {
        const tag = self.tagsMap.get(item.tag_id)
        if (tag.managed !== 0) {
          managed |= 1
          return
        }
      })
      return self.$can('update', new AbilityMessage(message.author_id, managed))
    },
    async ILike(like) {
      const self = this
      try {
        if (like) {
          await removeLike(self.message_id)
          this.$message({
            type: 'success',
            message: '已撤销'
          })
        } else {
          await postLike(self.message_id)
          this.$message({
            type: 'success',
            message: '已点赞'
          })
        }
      } catch (e) {
        console.error(e)
      }
      self.refresh()
    },

    deletedWindow: function (id, deleted) {
      this.$confirm('是否确定删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        closeOnClickModal: false,
        type: 'warning'
      })
        .then(() => {
          deleted(id)
          this.$message({
            message: '确定删除'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },

    deletedMessage: function (id) {
      const self = this
      deleteMessage(id)
        .then(response => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          self.message = null
          self.$router.push({ path: '/community/index' })
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    changeMessage: function (data) {
      const self = this
      putMessage(self.message_id, data).then(response => {
        self.refresh()
        self.dialog = false
      })
    }
  }
}
</script>
