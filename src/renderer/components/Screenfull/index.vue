<template>
  <div id="full-screen"
       @click="click">
    <svg-icon :icon-class="isFullscreen?'exit-fullscreen':'fullscreen'" />
  </div>
</template>

<script>
import screenfull from 'screenfull'
// import { fireKeyEvent } from '@/utils'

export default {
  name: 'Screenfull',
  data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 122:
          this.change()
          // screenfull.toggle()
          break
      }
    })
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    click() {
      // fireKeyEvent(document.getElementById('full-screen'), 'keydown', 122)
      this.change()
      screenfull.toggle()
    },
    change() {
      this.isFullscreen = !this.isFullscreen
    }
  }
}
</script>

<style scoped>
.screenfull-svg {
  display: inline-block;
  cursor: pointer;
  fill: #5a5e66;
  width: 20px;
  height: 20px;
  vertical-align: 10px;
}
</style>
