<!--  -->
<template>
  <div class="page-header">
    <div class="handle-container">
      <div class="handle-item"
           @click="onMin">
        <img :src="minImg"
             alt="最小化">
      </div>
      <div class="handle-item"
           @click="onMax">
        <img :src="isMaximized ? restoreImg : maxImg"
             alt="最大化">
      </div>
      <div class="handle-item close"
           @click="onClose"
           @mouseenter="enterClose"
           @mouseleave="leaveClose">
        <img :src="isEnter ? whiteCloseImg : closeImg"
             alt="关闭">
      </div>

    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { ipcRenderer } from 'electron'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      isEnter: false,
      isMaximized: false,
      minImg: require('../../assets/images/min.png'),
      restoreImg: require('../../assets/images/restore.png'),
      maxImg: require('../../assets/images/max.png'),
      closeImg: require('../../assets/images/close.png'),
      whiteCloseImg: require('../../assets/images/whiteClose.png')
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    ipcRenderer.on('max-reply', (event, arg) => {
      console.log(arg)
      this.isMaximized = arg
    })
  },
  beforeCreate() { }, // 生命周期 - 创建之前
  beforeMount() { }, // 生命周期 - 挂载之前
  beforeUpdate() { }, // 生命周期 - 更新之前
  updated() { }, // 生命周期 - 更新之后
  beforeDestroy() { }, // 生命周期 - 销毁之前
  destroyed() { }, // 生命周期 - 销毁完成
  activated() { }, // 如果页面有keep-alive缓存功能，这个函数会触发
  // 方法集合
  methods: {
    onMin() {
      ipcRenderer.sendSync('handle-min')
    },
    onMax() {
      this.isMaximized ? ipcRenderer.sendSync('handle-unmax') : ipcRenderer.sendSync('handle-max')
    },
    enterClose() {
      this.isEnter = true
    },
    leaveClose() {
      this.isEnter = false
    },
    onClose() {
      ipcRenderer.sendSync('handle-close')
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.page-header {
  -webkit-app-region: drag;
  height: 30px;
  line-height: 30px;
  position: relative;
  .handle-container {
    position: absolute;
    right: 0;
    display: flex;
    .handle-item {
      -webkit-app-region: no-drag;
      cursor: pointer;
      padding: 0px 10px;
      img {
        width: 10px;
      }
    }
    .handle-item:hover {
      background: #d0d2d5;
    }
    .close:hover {
      background: #e81123;
    }
  }
}
</style>
