<template>
  <div>
    <el-divider content-position="left">帖子

      <el-tag v-if="tagsMap && tagId" size="small" :type="tagsMap.get(tagId).type" :color="tagsMap.get(tagId).color">{{ tagsMap.get(tagId).name }}</el-tag>
    </el-divider>

    <el-row
      class="mrpp-header"
      :gutter="10"
    >
      <el-col :span="12" style="padding-left:44px">
        <div class="grid-content"><b>标题</b></div>
      </el-col>
      <el-col :span="4" align="center">
        <div class="grid-content"><b>用户</b></div>
      </el-col>
      <el-col :span="4" align="center">
        <div class="grid-content"><b>更新时间</b></div>
      </el-col>
      <el-col :span="4" align="center">
        <div class="grid-content"><b>操作</b></div>
      </el-col>
    </el-row>
    <div v-if="items === null ">
      <br>
      <el-skeleton :rows="10" animated />
    </div>
    <div v-for="item in items" :key="item.id">
      <el-row class="mrpp-row" :gutter="10">
        <el-col :span="9" style="padding-left:20px">
          <div>
            <div class="grid-content">
              <el-popover
                placement="top-start"
                :title="item.title"
                :open-delay="500"
                width="400px"
                trigger="hover"
                :content="html(item.body)"
              >
                <el-link slot="reference" :underline="false" type="primary" style="display:inline;color:#2190ac;line-height:24px" @click="gotoPost(item)">
                  {{ item.title }}
                </el-link>
              </el-popover>
              <mr-p-p-tags v-if="item&&tagsMap" :tags-map="tagsMap" :message="item" />

            </div>
          </div>
        </el-col>
        <el-col :span="3" align="center">
          <span style="color:#fff">
            .&nbsp;
          </span>
        </el-col>
        <el-col :span="4" align="center">
          <div class="grid-content">{{ item.author.nickname }}</div>
        </el-col>
        <el-col :span="4" align="center">
          <div class="grid-content">{{ item.updated_at }}</div>
        </el-col>
        <el-col :span="4" align="center">
          <div class="grid-content">
            <el-button v-if="canDelete(item)" title="删除" size="mini" icon="el-icon-delete" @click="remove(item)" />
          </div>
        </el-col>
      </el-row>
    </div>

    <br>
  </div>
</template>

<script>

import { AbilityMessage } from '@/ability/ability'

import { deleteMessage } from '@/api/v1/message'
import MrPPTags from '@/components/MrPP/MrPPTags.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'MessageTable',
  components: {
    MrPPTags
  },
  props: {
    tagId: {
      type: Number
    },
    items: {
      type: Array
    },
    tagsMap: {
      type: Map
    }
  },
  computed: {
    ...mapGetters([
      'userData'
    ])

  },
  data() {
    return {
    }
  },
  methods: {
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

    cutString(str, len) {
      if (str.length * 2 <= len) {
        return str
      }
      var strlen = 0
      var s = ''
      for (var i = 0; i < str.length; i++) {
        s = s + str.charAt(i)
        if (str.charCodeAt(i) > 128) {
          strlen = strlen + 2
          if (strlen >= len) {
            return s.substring(0, s.length - 1) + '...'
          }
        } else {
          strlen = strlen + 1
          if (strlen >= len) {
            return s.substring(0, s.length - 2) + '...'
          }
        }
      }
      return s
    },
    gotoPost(item) {
      const self = this
      self.$router.push({ path: '/community/post', query: { id: item.id }})
    },
    filterHtml(html) {
      return html.replace(/<[^>]*>/g, '')
    },
    html(body) {
      return this.cutString(this.filterHtml(body), 100)
    },
    remove: function(item) {
      const self = this
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        closeOnClickModal: false,
        type: 'warning'
      })
        .then(() => {
          self.deleted(item.id)
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    deleted: function(id) {
      const self = this

      deleteMessage(id)
        .then(response => {
          self.refresh()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(function(error) {
          console.log(error)
        })
        .finally(() => {
          self.$emit('refresh')
        })
    }

  }
}
</script>

<style lang="scss" scoped>
.tagawesome{
  cursor: pointer;
}
.el-row {
  margin-bottom: 0px;
}
.el-link:hover{
  color: #4db8db!important;
  /* opacity: 0.9; */
}
.mrpp-header {
  border-radius: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: lightgrey;
  background-color:gainsboro;
}
.mrpp-row {
  border-radius: 0px;
  border-style: solid;
  border-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: lightgrey;
}
.grid-content {
  border-radius: 2px;
  height: 50px;
  display: table-cell;
  vertical-align: middle;
  font-size: 14px;
  color: dimgrey;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
</style>
