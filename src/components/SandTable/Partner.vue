<template>
  <!-- 合作伙伴板块 -->
  <section class="sandtable-section">
    <div align="center">
      <h1
        v-if="isBlue"
        class="section-title-size section-title-dark title-lighter"
      >
        {{ title }}
      </h1>
      <h1 v-else class="section-title-size" style="color: #4183ea">
        {{ title }}
      </h1>
      <p class="f-text-color">{{ subtitle }}</p>
      <p
        :class="[isBlue ? 'section-underline-blue' : 'section-underline-style']"
      />
    </div>
    <div align="center">
      <img src="/media/bg/partner.jpg" style="width: 60%" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Partner',
  props: {
    isBlue: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      title: '战略合作伙伴',
      subtitle: '来自新时代的共鸣，无数用户的选择'
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '~@/styles/screenstyle.scss';
@import '~@/styles/sandtable.scss';
</style>
