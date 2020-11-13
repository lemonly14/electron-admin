<template>
  <div class="delete-dialog">
    <el-dialog :visible.sync="isShow"
               center>
      <div class="small-thing" />
      <div class="dialog-tittle">
        <p class="tittle-word">{{ tittleName }}</p>
      </div>
      <span>是否导出数据?</span>
      <span slot="footer">
        <el-button @click="close()">取 消</el-button>
        <el-button type="primary"
                   @click="handleDelete()">确 定</el-button>
      </span>
    </el-dialog>
  </div>

</template>
<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    tittleName: {
      type: String,
      default: ''
    }
  },
  //   data() { },
  methods: {
    close() {
      this.isShow = false
    },
    handleDelete() {
      this.$emit('on-delete')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.delete-dialog{
  /deep/.el-dialog {
  @include s-dialog;
  .small-thing {
    @include small-thing;
  }
  .dialog-tittle {
    @include dialog-tittle;
    .tittle-word {
    }
  }
  .el-dialog__body {
    text-align: inherit;
    font-size: 35px;
  }
}
}

</style>
