<template>
  <div>
    <mr-p-p-upload :file-type="fileType" @saveResource="save">
      <div>选择场景文件，并上传</div>
    </mr-p-p-upload>
  </div>
</template>

<script>
import MrPPUpload from '@/components/MrPP/MrPPUpload/space'
export default {
  name: 'SpaceUpload',
  components: {
    MrPPUpload
  },
  data: function () {
    return {
      file: { md5: 'md5' },
      fileType: '.zip'
    }
  },
  methods: {
    async save(name, file_id, callback) {
      /*
      const self = this
      try {
        const response = await postSpace({ name, file_id })
        console.log(response.data)
        self.$router.push({
          path: '/space/view',
          query: { id: response.data.id }
        })
      } catch (err) {
        console.error(err)
      }
      callback()*/
    }
  }
}
</script>
