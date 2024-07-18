<template>
  <div class="verse-index">
    <page @loaded="loaded" :created="true" />
  </div>
</template>

<script>
import Page from '@/components/MrPP/Person/Page.vue'

import { getPerson } from '@/api/v1/person'
export default {
  name: 'VerseIndex',
  components: {
    Page
  },

  methods: {
    loaded(data, result) {
      getPerson(data.sorted, data.searched, data.current, 'roles, avatar')
        .then(response => {
          const pagination = {
            current: parseInt(response.headers['x-pagination-current-page']),
            count: parseInt(response.headers['x-pagination-page-count']),
            size: parseInt(response.headers['x-pagination-per-page']),
            total: parseInt(response.headers['x-pagination-total-count'])
          }
          // console.error(response.data)
          result({ data: response.data, pagination: pagination })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
