<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { AbilityRouter, UpdateAbility } from '@/ability/ability'
import { getToken, setToken } from '@/utils/auth'
import { token } from '@/api/servers'

import { mapMutations } from 'vuex'
// import resource from './store/modules/resource'
export default {
  name: 'App',

  watch: {
    '$store.state.user.roles': function () {
      if (this.$store.state.user.roles) {
        UpdateAbility(
          this.$ability,
          this.$store.state.user.roles,
          this.$store.state.user.data.id
        )
      }
    }
  },
  created() {
    const self = this
    setInterval(function () {
      self.heartbeat()
    }, 360000)

    this.$router.beforeEach((to, from, next) => {
      if (self.$can('goto', new AbilityRouter(to.path))) {
        next()
      } else {
        this.$message.error('权限不足！' + to.path)
      }
    })
  },
  methods: {
    ...mapMutations('information', ['setData']),

    heartbeat() {
      const tk = getToken()
      if (tk !== null) {
        token().then(response => {
          console.log(response.data.token)
          setToken(response.data.token)
        })
      }
    }
  }
}
</script>
