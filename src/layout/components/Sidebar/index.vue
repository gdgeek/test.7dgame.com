<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">

      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <div v-for="item in items" :key="item.url">
          <sidebar-item v-if="open(item.url)" :item="item" :collapse="isCollapse" :base-path="item.url" />
        </div>

      </el-menu>

    </el-scrollbar>

  </div>
</template>

<script>

import { AbilityRouter } from '@/ability/ability'
// import { MenuItem } from '@/ability/menuItem'
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  created() {
    this.menu.forEach(function(element) {
      console.log(element)
      console.log(element.icon)
      console.log(element.url)
    })
  },
  methods: {
    open(path) {
      return this.$can('open', new AbilityRouter(path))
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'menu'
    ]),
    routes() {
      return this.$router.options.routes
    },
    items() {
      return this.menu
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
