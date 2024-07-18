<template>
  <!-- 模型展示-->
  <section>
    <div class="modle_box">
      <!-- 外框架元素 -->
      <div v-show="isShow" class="modle_init">
        <!-- 3D渲染元素 -->
        <div id="container" />
      </div>
    </div>
  </section>
</template>

<script>
import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import ElementResizeDetector from 'element-resize-detector'
export default {
  name: 'DemoThreeScreen',

  data() {
    return {
      camera: null,

      scene: null,

      renderer: null,

      isShow: true
    }
  },
  mounted() {
    this.init()

    this.animate()
  },
  methods: {
    close() {
      this.isShow = !this.isShow
    },
    init() {
      const self = this

      const container = document.getElementById('container')

      this.camera = new Three.PerspectiveCamera(
        70,

        container.clientWidth / container.clientHeight,

        0.01,

        1000
      )

      this.camera.position.z = 0.6

      this.scene = new Three.Scene()
      const radius = 0.2 // ui: radius
      const geometry = new Three.IcosahedronGeometry(radius)

      // const geometry = new Three.CylinderBufferGeometry(0.2, 0.2, 0.2)

      const material = new Three.MeshNormalMaterial()

      this.mesh = new Three.Mesh(geometry, material)

      this.scene.add(this.mesh)

      this.renderer = new Three.WebGLRenderer({ alpha: true, antialias: true })

      this.renderer.setSize(container.clientWidth, container.clientHeight)

      container.appendChild(this.renderer.domElement)

      const erd = new ElementResizeDetector()
      erd.listenTo(container, () => {
        if (!self.sleep) {
          const width = container.clientWidth
          const height = container.clientHeight
          // self.renderer.setViewport(0, 0, width, height)
          self.renderer.setSize(width, height)
          self.camera.aspect = width / height
          self.camera.updateProjectionMatrix()
        }
      })
      // this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    },

    animate() {
      requestAnimationFrame(this.animate)

      this.mesh.rotation.x += 0.002

      this.mesh.rotation.y += 0.006

      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>

<style lang="scss" scoped>
.modle_init {
  max-width: 800px;
  max-height: 650px;
  position: absolute;
  top: 50px;
  left: calc(48% + 30px);
  width: 50%;
  height: 30vw;
  // 半屏效果
  // width: 50%;
  // height: calc(30vw + 60px);
  // line-height: 50px;
  z-index: 50;
}
#container {
  height: 100%;
  width: 100%;
}
</style>
