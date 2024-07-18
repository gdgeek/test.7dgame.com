<template>
  <span>
    <router-link
      v-if="course && course.title"
      target="_blank"
      :to="'/home/document?id=' + id"
    >
      <el-link target="_blank" v-html="course.title.rendered"></el-link>
    </router-link>
  </span>
</template>
<script>
import { Post } from '@/api/wordpress.js'
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      course: null
    }
  },
  created() {
    const self = this
    if (self.id) {
      Post(self.id)
        .then(r => {
          self.course = r.data
          self.$emit('show')
        })
        .catch(e => {
          console.error(e)
        })
    }
  }
}
</script>
