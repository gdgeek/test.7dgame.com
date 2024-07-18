<template>
  <!-- 一个浮动可以拖动的Demo 可以用来做3D吉祥物或者 助手基础，可以关闭让调整位置 -->
  <section>

    <div class="far_box">
      <!-- v-drag指令 -->
      <div v-show="isShow" v-drag class="move_box">
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
export default {
  name: 'DemoFloatcard',
  directives: {
    drag(el) {
      // console.log('el', el)
      // 鼠标移动到目标盒子上--监听鼠标按下事件
      el.onmousedown = function(e) {
        // console.log('e1', e)
        // 计算出此时点击目标盒子 相对于自己的左上角距离（目的是为了下方位移时候 赋值减去相应的自己左上角位置 保证盒子定位点还是自己点击的点 而不是左上角点）
        // vue项目对于原生的dom操作 其实就是在方法内 也就是js内 使用原生的方法对元素进行dom操作 和普通的js操作一样
        var disx = e.offsetX
        var disy = e.offsetY

        document.onmousemove = function(e2) {
          var move_box = document.getElementsByClassName('move_box')[0]
          move_box.style.position = 'fixed'
          move_box.style.left = e2.clientX - disx + 'px'
          move_box.style.top = e2.clientY - disy + 'px'
          // console.log('最后的定位：', e2.clientX - disx, e2.clientY - disy, e2)
        }
        document.onmouseup = function() {
          document.onmousemove = document.onmouseup = null
        }
      }
    }
  },
  data() {
    return {
      camera: null,

      scene: null,

      renderer: null,

      mesh: null,
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
    left: 0;
    text-align: center;
    // background-color: #1fff;
    // width: 450px;
    // height: 300px;
     width: 100%;
    height:  calc(30vw + 60px);
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
