<template>
  <div class="verse-view">
    <event-dialog
      v-if="item"
      :node="JSON.parse(item.events)"
      uuid="uuid"
      @postEvent="postEvent"
      ref="dialog"
    />
    <resource-dialog
      @selected="selectResources"
      @cancel="openResources()"
      ref="resourceDialog"
    />
    <el-row :gutter="20" style="margin: 28px 18px 0">
      <el-col :sm="16">
        <el-card v-if="item" class="box-card">
          <div slot="header">
            <el-form ref="item" :rules="rules" v-if="item" :model="item" label-width="80px">
            <el-form-item label="名称" prop="title">
              <el-input v-model="item.title" @change="submit"></el-input>
            </el-form-item>
            <el-form-item label="图片" prop="title">
              <div class="box-item" @click="selectImage">
                <el-image
                  fit="contain"
                  style="width: 100%; height: 300px"
                  :src="image"
                />
              </div>
            </el-form-item>
            <el-form-item v-if="prefab" label="Info" prop="title">
              <el-input v-model="item.info" @change="submit"></el-input>
            </el-form-item>
          </el-form>
          </div>
          <div v-if="events && events.outputs && events.outputs.length > 0" >
            <el-divider content-position="left">输出事件</el-divider>
            <span v-for="(item, index) in events.outputs" :key="index">
              <el-tag size="mini">
                {{ item.title }}
              </el-tag>
              &nbsp;
            </span>
          </div>
          <div
            v-if="events && events.inputs && events.inputs.length > 0"
            label="输入事件"
          >
            <el-divider content-position="left">输入事件</el-divider>
            <span v-for="(item, index) in events.inputs" :key="index">
              <el-tag size="mini">
                {{ item.title }}
              </el-tag>
              &nbsp;
            </span>
          </div>
        </el-card>
        <br />
        <el-card v-if="item !== null" class="box-card">
          <el-button-group style="float: right; padding: 3px 0" >
            <el-button @click="openDialog" icon="el-icon-magic-stick">
              事件设置
            </el-button>
            <el-button
              @click="editor"
              type="primary"
              icon="el-icon-edit-outline"
            >
              场景编辑器
            </el-button>
          </el-button-group>
        <br/>
          <br />
        </el-card>
        <br/>
      </el-col>

      <el-col :sm="8">
        <el-card class="box-card">
          <div slot="header">
            <b>【元数据】信息</b>
          </div>
          <div class="box-item">{{ item }}</div>
          <br />
        </el-card>
        <br />
        <br />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ResourceDialog from '@/components/MrPP/ResourceDialog.vue'
import EventDialog from '@/components/Rete/EventDialog.vue'
export default {
  data() {
    return {
      rules: {
        title: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
        ],
      },
      item: null
    }
  },
  components: {
    EventDialog,
    ResourceDialog
  },
  computed: {
    prefab: {
      get() {
        return this.item.prefab == 1
      },
      set(value) {
        this.item.prefab = value?1:0
      }
    },
    
    events() {
      if (this.item) {
        return JSON.parse(this.item.events)
      }
      return { inputs: {}, outputs: {} }
    },
    image() {
      if (this.item && this.item.image) return this.item.image.url
      return ''
    },
    id() {
      return parseInt(this.$route.query.id)
    }
  },
  mounted() {
    this.refresh()
  },
  methods: {
    editor() { 
      this.$router.push({
        path: '/meta/scene',
        query: { id: this.id, prefab: this.prefab }
      })
    },
    openResources(
      { value, callback, type } = { value: null, callback: null, type: null }
    ) {
      //alert(JSON.stringify({ value, callback, type }))
    },
    async selectResources(data) {
      this.item.image_id = data.image_id
      await this.putItem(this.id, this.item)

      this.$message({
        message: '保存成功',
        type: 'success'
      })
      await this.refresh()
    },

    async selectImage() {
      this.$refs.resourceDialog.openIt({ type: 'picture' })
    },
    async postEvent({ uuid, node, inputs, outputs }) {
      if (this.item) {
        this.item.events = JSON.stringify({ inputs, outputs })
      }

      this.$refs.dialog.close()
      this.submit()
    },
    async openDialog() {
      this.$refs.dialog.open()
    },
    async refresh() {
      const data = await this.getItem(this.id, {
        expand: 'image,author'
      })
      this.item = data
     
    },
     getItem(id, expand){
       return new Promise((resolve, reject) => {
         try {
          this.$emit("getItem",id, expand, (data) => { 
            resolve(data)
          })
        }catch(e){
          reject(e)
        }
      })
    },
     putItem(id, data){
      return new Promise((resolve, reject) => {
        try {
          this.$emit("putItem",id, data, (ret) => { 
              resolve(ret)
          })
        }catch(e){
          reject(e)
        }
      })
    },
    async submit() {

      this.$refs['item'].validate(async (valid) => {
        if (!valid) {
          console.log('error submit!!');
          return
         }
          this.item.prefab = this.item.prefab ? 1:0;
          
          await this.putItem(this.id, this.item)
          this.$message({
            message: '保存成功',
            type: 'success'
          })
          await this.refresh()
      });
       
      
    }
  }
}
</script>
