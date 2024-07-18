<template>
  <div>
    <mr-p-p-upload dir="audio" :file-type="fileType" @saveResource="saveAudio">
      <div>选择音频，并上传</div>
    </mr-p-p-upload>
  </div>
</template>

<script>
import MrPPUpload from '@/components/MrPP/MrPPUpload/index.vue'

import { postAudio } from '@/api/resources'
export default {
  name: 'AudioUpload',
  components: {
    MrPPUpload
  },
  data: function () {
    return {
      fileType: 'audio/mp3, audio/wav'
    }
  },
  methods: {
    saveAudio(name, file_id, callback) {
      const self = this
      postAudio({ name, file_id })
        .then(response => {
          console.log(response.data)

          self.$router.push({
            path: '/audio/view',
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
