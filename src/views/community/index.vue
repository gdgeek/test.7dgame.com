<template>
  <div id="CommuityIndex">

    <br>
    <el-container>

      <el-header>
        <mr-p-p-header :sorted="''" :searched="searched" @search="search">
          <!-- MrPPHeader title -->
          <div style="line-height: 28px">
            <!--颜色备选 #666666 #ef7d63 #76b9b4 #28a4c4-->
            <div
              style="
                display: inline;
                margin-right: 30px;
                font-weight: 700;
                color: #666666;
              "
            >
              交流论坛
            </div>
            <router-link
              style="font-size: 14px; color: #606266"
              to="/community/index"
            >
              <el-button size="mini" :disabled="!tagId">全部</el-button>
            </router-link>
            <el-divider direction="vertical" />

            <span v-for="(tag, index) in tagsMap" :key="index">
              <span
                v-if="tag[1].managed === 1"
                style="width: 80px; text-align: center"
              >
                <el-tag
                  v-if="tagId !== tag[0]"
                  style="cursor: pointer"
                  size="small"
                  :type="tag[1].type"
                  :color="tag[1].color"
                  @click="searchTagId(tag[0])"
                >
                  {{ tag[1].name }}
                </el-tag>
                <el-tag
                  v-else
                  :type="'info'"
                  style="cursor: not-allowed"
                  effect="plain"
                  size="small"
                >
                  {{ tag[1].name }}
                </el-tag>

                <el-divider direction="vertical" />
              </span>
            </span>
            <el-dropdown slot="dropdown" placement="bottom">
              <span class="el-dropdown-link">
                其他标签
                <i class="el-icon-arrow-down el-icon--right" />
              </span>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="(tag, index) in tagsMap"
                  :key="index"
                  style="padding: 0"
                >
                  <div
                    v-if="tag[1].managed === 0 && tagId !== tag[0]"
                    style="width: 80px; text-align: center"
                    @click="searchTagId(tag[0])"
                  >
                    <el-tag
                      size="small"
                      :type="tag[1].type"
                      :color="tag[1].color"
                    >
                      {{ tag[1].name }}
                    </el-tag>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </mr-p-p-header>
      </el-header>
      <el-main>
        <br>
        <el-card class="box-card">
          <mr-p-p-table
            ref="table"
            :items="items"
            :tag-id="tagId"
            :tags-map="tagsMap"
            @refresh="refresh"
          />
          <br>
          <el-pagination
            :current-page="pagination.current"
            :page-count="pagination.count"
            :page-size="pagination.size"
            :total="pagination.total"
            layout="prev, pager, next, jumper"
            background
            @current-change="handleCurrentChange"
          />
        </el-card>
      </el-main>
    </el-container>
    <el-card class="box-card">
      <el-divider content-position="left">发帖</el-divider>
      <mr-p-p-message-from ref="editor" @post="post" />
    </el-card>
  </div>
</template>

<script>
import { getMessages, postMessage } from '@/api/v1/message'

import moment from 'moment'
moment.locale('zh-cn')

import MrPPTable from '@/components/MrPP/MrPPTable.vue'
import MrPPHeader from '@/components/MrPP/MrPPHeader/index.vue'

import { mapGetters, mapState, mapActions } from 'vuex'
import MrPPMessageFrom from '@/components/MrPP/MrPPMessageFrom.vue'

export default {
  name: 'CommuityIndex',
  components: {
    MrPPTable,
    MrPPHeader,
    MrPPMessageFrom
  },
  methods: {
    ...mapActions('tags', {
      refreshTags: 'refreshTags'
    }),
    searchTagId(tag_id) {
      this.$router.push({
        path: '/community/index',
        query: { tag: tag_id }
      })
    },
    refresh() {
      const self = this
      // this.items = null
      getMessages(
        self.sorted,
        self.searched,
        self.pagination.current,
        self.tagId
      )
        .then(response => {
          // page info
          self.pagination = {
            current: parseInt(response.headers['x-pagination-current-page']),
            count: parseInt(response.headers['x-pagination-page-count']),
            size: parseInt(response.headers['x-pagination-per-page']),
            total: parseInt(response.headers['x-pagination-total-count'])
          }

          // get message
          if (response.data) {
            self.items = response.data
          }
        })
        .catch(function(error) {
          console.log(error)
        })
        .finally(() => {
          window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
          })
        })
    },
    handleCurrentChange: function(page) {
      this.pagination.current = page
      this.refresh()
    },
    search: function(value) {
      // make sure searchedTagId is null
      this.searchedTagId = ''
      this.searched = value
      this.refresh()
    },
    post: function(data) {
      const self = this
      postMessage(data).then(response => {
        /* const item = response.data
        item.updated_at = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        item.author = {
          id: self.userData.id,
          username: self.userData.username,
          nickname: self.userData.nickname,
          email: self.userData.email
        }
        self.items.unshift(item)*/
        this.refresh()
        self.$refs.editor.clear()
      })
    }
  },
  computed: {
    ...mapGetters(['userData']),
    ...mapState({
      tagsMap: state => state.tags.tagsMap
    }),
    tagId() {
      return parseInt(this.$route.query.tag)
    }
  },
  data() {
    return {
      items: null,
      searched: '',
      pagination: { current: 1, count: 1, size: 20, total: 20 },

      sorted: '-updated_at'
    }
  },
  watch: {
    '$store.state.tags.tagsMap': function() {
      this.refresh()
    },
    '$route.query.tag': function() {
      this.refresh()
    }
  },

  created() {
    const self = this
    if (self.tagsMap == null) {
      self.refreshTags()
    } else {
      self.refresh()
    }
  }
}
</script>

<style lang="scss" scoped>
.el-dropdown-link {
  cursor: pointer;
}
</style>
