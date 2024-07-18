<template>
  <div>
    main2
    <!-- 引入头像组件 -->
    <Doing2 />
    <!-- 测试头像url -->
    <div>
      <img :src="imageUrl" class="avatar">
    </div>
    测试头像url
  </div>
</template>

<script>
import Doing2 from '@/views/document/workdata/doing/doing2'
import { mapGetters } from 'vuex'
export default {
  name: 'Main2',
  components: {
    Doing2
  },
  computed: {
    ...mapGetters(['userData']),
    imageUrl() {
      if (typeof this.userData.avatar === 'undefined') {
        return null
      }
      return this.userData.avatar.url
    }
  }
}
</script>

<style>
.avatar {
  width: 132px;
  height: 132px;
  display: block;
  border-radius: 6px;
  margin-right: 12px;
}
</style>
