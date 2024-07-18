<template>
  <el-card>
    <document :post-id="id" :category="true"/>
  </el-card>
</template>

<script>

import Document from '@/components/Document.vue'
export default {
  name: 'HomeDocument',
  components: {
    Document
  },
  computed: {
    id() {
      return parseInt(this.$route.query.id)
    }
  }

}
</script>

