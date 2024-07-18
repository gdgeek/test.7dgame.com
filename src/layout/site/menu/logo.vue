<template>
  <div class="sidebar-logo-container" :class="{ collapse: collapse }">
    <transition name="sidebarLogoFade">
      <router-link
        v-if="collapse"
        key="collapse"
        class="sidebar-logo-link"
        to="/web/index"
      >
        <nobr>
          <img v-if="logo" :src="logo" class="sidebar-logo" />
          <h1 v-else class="sidebar-title font-title">
            {{ information.data.title }}
          </h1>
        </nobr>
      </router-link>
      <router-link
        v-else
        key="expand"
        class="sidebar-logo-link"
        to="/web/index"
      >
        <nobr>
          <img v-if="logo" :src="logo" class="sidebar-logo" />
          <h1 class="sidebar-title font-title">
            {{ information.data.title }}
          </h1>
        </nobr>
      </router-link>
    </transition>
  </div>
</template>

<script>
import '@/assets/font/font.css'
import { mapState } from 'vuex'
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    ...mapState({
      information: state => state.information
    }),
    logo() {
      return this.information.data.logo
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  width: 400px;
  height: 50px;
  line-height: 50px;
  overflow: auto;
  margin-top: 4px;
  margin-left: 10px;
  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #909399;
      font-size: 15px;
      vertical-align: middle;
      min-width: 180px;
    }
  }
  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
