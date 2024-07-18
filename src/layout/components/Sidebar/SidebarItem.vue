<template>
  <div v-if="!item.hidden">
    <div v-if="!item.items">

      <app-link v-if="this.$route.path !== item.url" :to="item.url" :align="align">
        <el-menu-item :index="layer+':' + item.url"><font-awesome-icon :icon="item.icon" />  <span v-if="!isCollapse">{{ item.label }}</span></el-menu-item>
      </app-link>
      <div v-else :align="align">
        <el-menu-item style="cursor:default" disabled :index="layer+':' + item.url"><font-awesome-icon :icon="item.icon" />  <span v-if="!isCollapse">{{ item.label }}</span></el-menu-item>
      </div>
    </div>
    <div v-else>
      <el-submenu ref="subMenu" :index="layer+':' + item.url" popper-append-to-body>
        <template slot="title">
          <div :align="align">
            <font-awesome-icon :icon="item.icon" /> <span v-if="!isCollapse">{{ item.label }}</span>
          </div>

        </template>
        <div v-for="child in item.items" :key="child.url">
          <sidebar-item v-if="open( child.url)" class="nest-menu" :is-nest="true" :layer="layer+1" :item="child" :collapse="false" :base-path="child.url" />
        </div>
      </el-submenu>

    </div>

  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
// import Item from './Item'
import AppLink from './Link'
import FixiOSBug from './FixiOSBug'

import { AbilityRouter } from '@/ability/ability'
export default {
  name: 'SidebarItem',
  components: { AppLink },
  mixins: [FixiOSBug],
  props: {
    collapse: {
      type: Boolean,
      required: true
    },
    layer: {
      type: Number,
      required: 0
    },
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null
    return {}
  },
  computed: {
    isCollapse() {
      return this.collapse
    },
    align() {
      return this.isCollapse ? 'center' : 'left'
    }
  },
  created() {
    // console.log(this.$route.path)
  },
  methods: {
    open(path) {
      return this.$can('open', new AbilityRouter(path))
    },
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
