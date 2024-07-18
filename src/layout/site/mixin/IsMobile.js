import store from '@/store'

const { body } = document
const WIDTH = 992 // refer to Bootstrap's responsive design
const XS = 768
const SM = 992 
const MD = 1200 
const XL = 1920 

export default {
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $_isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    },
    $_isXS() {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < XS
    },
    $_isSM() {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < SM
    },
    $_isMD() {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < MD
    },
    $_isXL() {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < XL
    }
  }
}
