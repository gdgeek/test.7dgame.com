<template>
  <div>
    <el-descriptions
      label-class-name="info-content-label"
      :column="1"
      size="mini"
      border
    >
      <el-descriptions-item v-if="author">
        <template slot="label">
          <font-awesome-icon class="icon" icon="user" />
          作者
        </template>
        kooriookami
      </el-descriptions-item>

      <el-descriptions-item v-if="course && course.title">
        <template slot="label">
          <font-awesome-icon class="icon" icon="book" />
          学习
        </template>
        <router-link target="_blank" :to="'/home/document?id=' + course.id">
          <el-link target="_blank" v-html="course.title.rendered">
            默认链接
          </el-link>
        </router-link>
      </el-descriptions-item>
      <el-descriptions-item v-if="info.description">
        <template slot="label">
          <font-awesome-icon class="icon" icon="info" />
          说明
        </template>
        {{ info.description }}
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import { Post } from '@/api/wordpress.js'
export default {
  name: 'InfoContent',
  components: {},
  props: {
    info: {
      type: Object,
      required: true
    },
    author: {
      type: Object,
      required: null
    }
  },
  data() {
    return {
      course: null
    }
  },
  created() {
    const self = this
    if (self.info && self.info.course && self.info.course !== -1) {
      Post(self.info.course)
        .then(r => {
          self.course = r.data
        })
        .catch(e => {
          console.error(e)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.info-content-label {
  width: 60px;
}
</style>

<style lang="scss" scoped>
.icon {
  width: 10px;
}
</style>
