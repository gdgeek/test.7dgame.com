<template>
  <div class="verse-index">
    <person-creater
      v-if="created"
      ref="createdDialog"
      :close-on-click-modal="false"
      :dialog-title="'添加用户'"
      @refresh="refresh"
      dialog-submit="添加用户"
    />

    <br />
    <el-container>
      <el-header>
        <mr-p-p-header
          :sorted="sorted"
          :searched="searched"
          @search="search"
          @sort="sort"
        >
          <el-button-group :inline="true">
            <el-button
              v-if="created"
              size="mini"
              type="primary"
              @click="createWindow()"
            >
              <font-awesome-icon icon="plus" />
              &nbsp;
              <span class="hidden-sm-and-down">添加用户</span>
            </el-button>
          </el-button-group>
        </mr-p-p-header>
      </el-header>
      <el-main>
        <el-row>
          <list :items="items" @refresh="refresh" />
        </el-row>
      </el-main>
      <el-footer>
        <el-card class="box-card">
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
      </el-footer>
    </el-container>
    <br />
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css'
import PersonCreater from './Creater.vue'
import List from '@/components/MrPP/Person/List'
import MrPPHeader from '@/components/MrPP/MrPPHeader'

import { mapState } from 'vuex'
export default {
  name: 'PersonPage',
  components: {
    List,
    MrPPHeader,
    PersonCreater
  },

  props: {
    created: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogVisible: false,
      items: null,
      sorted: '-created_at',
      searched: '',
      pagination: { current: 1, count: 1, size: 20, total: 20 }
    }
  },
  computed: {
    dialogTitle() {
      return ''
    }
  },
  created: function () {
    this.refresh()
  },

  methods: {
    createWindow() {
      this.$refs.createdDialog.$emit('show')
    },
    handleCurrentChange: function (page) {
      this.pagination.current = page
      this.refresh()
      console.log(this.pagination.current)
    },
    sort: function (value) {
      this.sorted = value
      this.refresh()
    },
    search: function (value) {
      this.searched = value
      this.refresh()
    },
    refresh() {
      const self = this
      self.$emit(
        'loaded',
        {
          sorted: self.sorted,
          searched: self.searched,
          current: self.pagination.current
        },
        val => {
          self.items = val.data
          self.pagination = val.pagination
          setTimeout(() => window.dispatchEvent(new Event('resize')), 100)
        }
      )
    }
  }
}
</script>
