<template>
  <!-- 一个的Demo 可以用来做3D吉祥物或展示-->
  <section>

    <div class="far_box">
      <!-- v-drag指令 -->
      <div v-show="isShow" class="move_box">
        <div id="container" />

        <div class="showbox-button">
          <el-button

            type="primary"
            size="mini"
            @click="close()"
          >
            关闭
          </el-button>
        </div>
      </div>

    </div></section>

</template>

<script>
import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
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
    MouseWheel(e) {
      const eventDelta = -e.wheelDelta || -e.deltaY * 40

      const scrollDiv = this.$refs.scrollDiv

      scrollDiv.scrollLeft = scrollDiv.scrollLeft + eventDelta / 2
    },
    close() {
      this.isShow = !this.isShow
    },
    init() {
      const container = document.getElementById('container')

      this.camera = new Three.PerspectiveCamera(
        70,

        container.clientWidth / container.clientHeight,

        0.01,

        1000
      )

      this.camera.position.z = 0.6

      this.scene = new Three.Scene()

      const geometry = new Three.CylinderBufferGeometry(0.2, 0.2, 0.2)

      const material = new Three.MeshNormalMaterial()

      this.mesh = new Three.Mesh(geometry, material)

      this.scene.add(this.mesh)

      this.renderer = new Three.WebGLRenderer({ antialias: true })

      this.renderer.setSize(container.clientWidth, container.clientHeight)

      container.appendChild(this.renderer.domElement)

      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    },

    animate() {
      requestAnimationFrame(this.animate)

      this.mesh.rotation.x += 0.004

      this.mesh.rotation.y += 0.006

      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>

<style lang="scss" scoped>
.far_box {
  .move_box {
    position: fixed;
    top: 0;
    right: 0;
    text-align: center;
    width: 100%;
    height:  calc(30vw + 60px);
    // 半屏效果
    // width: 50%;
    // height: calc(30vw + 60px);

    line-height: 50px;
   z-index: 50;
  }
  // .move_box:hover {
  //   background-color: #1f1f;
  // }
}
#container {
  height: 100%;
  width: 100%;
}
.showbox-button{
  display: flex;
  justify-content: flex-end;
  margin-top: 6px;
}

</style>
