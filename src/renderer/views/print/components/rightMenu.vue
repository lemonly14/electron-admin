<template>
  <div
    v-if="activeComponent"
    class="props-menu-warp"
    @click.stop>
    <div class="title-area">{{ activeComponent.title }}</div>
    <component
      :is="activeComponent.classify"
      ref="menu"
      :component="activeComponent" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['activeComponent', 'storeList']),
    currentComponent() {
      return this.storeList.find((item) => item.id === this.activeComponent)
    }
  },
  watch: {
    currentComponent() {
      this.$nextTick(() => {
        const $menu = this.$refs.menu
        if ($menu) {
          $menu.init()
        }
      })
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
  @import "../../../styles/variables.scss";
  .props-menu-warp {
    max-width: 300px;
    .title-area {
      padding: 15px;
      background-color: $lightBackground;
      font-weight: bold;
    }
    .el-form {
      .el-form-item {
        margin-bottom: 10px;
      }
    }
  }
</style>
