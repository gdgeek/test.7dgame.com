<template>
  <mr-p-p-site>
    login
  </mr-p-p-site>
</template>

<script>

// @ is an alias to /src
import MrPPSite from '@/components/MrPP/MrPPSite'
export default {
  name: 'WechatLogin',
  components: {
    MrPPSite
  },
  data() {
    return {

    }
  },

  computed: {

    token() {
      return this.$route.query.token
    }
  }

}
</script>
