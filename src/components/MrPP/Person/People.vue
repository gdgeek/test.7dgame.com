
<template>
  <el-card style="width: 200px" :body-style="{ padding: '0px' }">
    <img :src="getUrl(item)"  class="image" />
    <div style="padding: 14px">
      <span>{{ item.username }}</span>
      <div class="bottom clearfix">
        <el-descriptions
          class="margin-top"
          :title="item.nickname"
          :column="1"
          size="mini"
        >
          <el-descriptions-item  label="权限">
            <el-select v-if="isSelect" size="mini" v-model="value" placeholder="请选择">
              <el-option 
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <div v-else>
              {{ getAblity(item.roles) }}
            </div>
          </el-descriptions-item>
        </el-descriptions>
        <el-button v-if="isSelect" type="text" class="button" @click="deleted(item)">
          删除
        </el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
import { changeAuth } from '@/api/v1/person'
import { set } from 'vue'
export default {
  name: 'People',
  data() {
      return {
        _options: [ {
          value: 'admin',
          label: '超级管理员'
        }, {
          value: 'manager',
          label: '管理员'
        }, {
          value: 'user',
          label: '用户'
        }],
        //value: 'user'
      }
  },
  computed: {
    options: function () {
      if (this.$can('root')) {
        return  [ {
          value: 'admin',
          label: '超级管理员'
        },  {
          value: 'manager',
          label: '管理员'
        }, {
          value: 'user',
          label: '用户'
        }]
      }
      if (this.$can('admin')) {

        return [ {
          value: 'manager',
          label: '管理员'
        }, {
          value: 'user',
          label: '用户'
        }]
      }
      return []
    },
    isSelect: function () {
      if (this.item.roles.includes('root')) { 
        return false;
      }
      if (this.$can('root')) { 
        return true;
      }
      if(this.$can('admin') && !this.item.roles.includes('admin')) {
        return true;
      }
      return false
    },
    value: {
      get:function(){ 
        return this.getValue(this.item.roles)
      },
      set: function (auth) {
        this.$confirm('确定修改权限吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          this.item.roles = [auth]
          await changeAuth(this.item.id, auth)
          this.$message({
            message: '修改成功',
            type: 'success'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消修改'
          });          
        });
       
      }
     
    }
  },
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    deleted: function (item) {
      this.$emit('deleted', item)
    },
    getUrl(item) {
      if (!!item && !!item.avatar && !!item.avatar.url) {
        return item.avatar.url
      }

      return require('@/assets/image/author-boy.png')
    },
    getValue(roles) {
      if (roles.includes('root')) {
        return 'root'
      } else if (roles.includes('admin')) {
        return 'admin'
      } else if (roles.includes('manager')) {
        return 'manager'
      } else if (roles.includes('user')) {
        return 'user'
      }
      return 'user'
    },
    getAblity(roles) {
      if (roles.includes('root')) {
        return '根用户'
      } else if (roles.includes('admin')) {
        return '超级管理员'
      } else if (roles.includes('manager')) {
        return '管理员'
      } else if (roles.includes('user')) {
        return '用户'
      }
      return JSON.stringify(roles)
    }
  }
}
</script>

<style lang="scss" scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}
</style>
