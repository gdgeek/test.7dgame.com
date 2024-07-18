<template>
  <div>
    <mr-p-p-upload
      dir="polygen"
      :file-type="fileType"
      @saveResource="savePolygen"
    >
      <div>选择模型（.glb文件），并上传</div>
    </mr-p-p-upload>
  </div>
</template>

<script>
import MrPPUpload from '@/components/MrPP/MrPPUpload'

import { postPolygen } from '@/api/resources'
export default {
  name: 'PolygenUpload',
  components: {
    MrPPUpload
  },
  data: function () {
    return {
      fileType: '.glb'
    }
  },
  methods: {
    savePolygen(name, file_id, callback) {
      const self = this
      postPolygen({ name, file_id })
        .then(response => {
          console.log(response.data)

          self.$router.push({
            path: '/polygen/view',
            query: { id: response.data.id }
          })
        })
        .catch(err => {
          console.log(err)
        })
        .finally(callback)
    }
  }
}
</script>
