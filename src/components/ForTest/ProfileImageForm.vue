<template>
  <div>
    <form
      method="POST"
      enctype="multipart/form-data"
    >
      <input
        type="file"
        accept="image/*"
        @change="onChange"
      >
    </form>
  </div>
</template>

<script>

// import hljs from 'highlight.js/lib/common'
// import hljsVuePlugin from '@highlightjs/vue-plugin'
export default {
  name: 'ImageForm',
  props: {

  },
  /* components: {
    highlightjs: hljsVuePlugin.component
  },*/
  data() {
    return {
    }
  },
  mounted() {

  },
  destroyed() {
  },
  methods: {
    onChange(event) {
      if (!event.target.files.length) { return }

      const image = event.target.files[0]
      const reader = new FileReader()

      reader.readAsDataURL(image)

      this.persist(image)
    },
    persist(image) {
      const data = new FormData()

      data.append('image', image)
      console.log(image)
      // Send the image to the API (e.g., with a Vuex action)
    }

  }
}
</script>

