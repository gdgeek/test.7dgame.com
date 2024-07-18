<template>
  <div class="verse-scene">
    <resource-dialog
      @selected="selectResources"
      @cancel="cancel()"
      ref="dialog"
    />
    <el-container>
      <el-main>
        <iframe
          id="editor"
          :src="src"
          class="content"
          height="100%"
          width="100%"
        />
      </el-main>
    </el-container>
  </div>
</template>

<script>
var qs = require('querystringify')
var path = require('path')

import ResourceDialog from '@/components/MrPP/ResourceDialog.vue'
import { AbilityEditable } from '@/ability/ability'
import { mapMutations } from 'vuex'
import { putMeta, getMeta } from '@/api/v1/meta'
import { putPrefab, getPrefab } from '@/api/v1/prefab'

export default {

  components: {
    ResourceDialog
  },
  name: 'VerseScene',
  data() {
    const src = path.join('three.js/editor', 'meta-editor.html')

    return {
      isInit: false,
      meta: null,
      src
    }
  },
  computed: {
    id() {
      return parseInt(this.$route.query.id)
    },
    prefab() {
      return this.$route.query.prefab
    },
    title() {
      return this.$route.query.title
    },

  
  },
  destroyed() {
    this.setBreadcrumbs({ list: [] })
  },
  created() {
    window.addEventListener('message', this.handleMessage)
    this.setBreadcrumbs({
      list: [
        {
          path: '/',
          meta: { title: '元宇宙实景编程平台' }
        },
        {
          path: '/meta/list',
          meta: { title: '列表' }
        },

        {
          path: '.',
          meta: { title: '元数据编辑器' }
        }
      ]
    })
  },
  beforeDestroy() {
    window.removeEventListener('message', this.handleMessage)
  },
  methods: {
    putData(id, data) {
      if (this.prefab) {
        return putPrefab(id, data)
      } else {
        return putMeta(id, data)
      }
    },
    getData(id) {
      if (this.prefab) {
        return getPrefab(id)
      } else {
        return getMeta(id)
      }
    },
    cancel() {
     
    },
    selectResources(data) {
      console.error(data)
      this.postMessage({
                action: 'load_resource',
                data: data
              })
    },
    saveable(data) {
      if (data === null) {
        return false
      }
      return this.$can('editable', new AbilityEditable(data.editable))
    },
    loadResource(data) {
      
      this.$refs.dialog.open(null, this.id, data.type)
     
    },
    postMessage(data) { 
      data.verify = 'mrpp.com';
      const iframe = document.getElementById('editor')
      iframe.contentWindow.postMessage(data, '*')
    },
    
    async handleMessage(e) {
      const self = this
      const receive = e.data
      if (receive.from === 'mrpp-editor') {
        switch (receive.action) {
          case 'save-meta':
            self.saveMeta(receive.data)
            break
          case 'load_resource':
            this.loadResource(receive.data)
            break
          case 'goto':
            if (receive.data == 'blockly.js') { 
              
              this.$router.push({ path: '/meta/script', query: { id:this.id, title:this.title } })

            }else if (receive.data == 'rete.js') {
              this.$router.push({ path: '/meta/rete-meta', query: { id:this.id, title:this.title } })
            }
            break;
          case 'ready':
            if (self.isInit == false) {
              self.isInit = true
              const response = await this.getData(this.id)
              this.meta = response.data; 

            
              self.breadcrumb(this.meta)
              self.postMessage({
                action: 'load',
                data: this.meta,
                saveable: this.saveable(this.meta)
              })
            }
            break
        }
      }
    },
    ...mapMutations('breadcrumb', ['setBreadcrumbs']),
    breadcrumb(meta) {
      this.setBreadcrumbs({
        list: [
          {
            path: '/',
            meta: { title: '元宇宙实景编程平台' }
          },
          {
            path: '/meta/index',
            meta: { title: '元数据【'+meta.title+'】'}
          },
          {
            path: '/meta/script?id=' + meta.id,
            meta: { title: '脚本编辑器' }
          },
          {
            path: '.',
            meta: { title: '场景编辑器' }
          }
        ]
      })
    },
    async saveMeta({ data, events }) {
      if (!this.saveable) {
        this.$message({
          type: 'info',
          message: '没有保存权限!'
        })
        return
      }
      await this.putData(this.id, { data, events })
      this.$message({
        type: 'success',
        message: '保存成功!'
      })
  
              
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  height: calc(100vh - 140px);
  border-style: solid;
  border-width: 1px;
}
</style>
