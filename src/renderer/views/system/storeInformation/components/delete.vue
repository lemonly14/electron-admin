<template>
  <div class="delete-dialog">
    <el-dialog :visible.sync="isShow"
               center>
      <div class="small-thing" />
      <div class="dialog-tittle">
        <p class="tittle-word">{{ tittleName }}</p>
      </div>
      <span v-if="deleteType === 'single'">是否删除该条信息?</span>
      <span v-else-if="length > 0 && deleteType === 'batch'">是否删除选中的{{ length }}条信息?</span>
      <span slot="footer">
        <el-button @click="closeDeleteDialog()">取 消</el-button>
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
    },
    length: {
      type: Number,
      default: 0
    },
    deleteType: {
      type: String,
      default: ''
    }
  },
  //   data() { },
  methods: {
    handleDelete() {
      this.$emit('on-delete')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.delete-dialog{
  ::v-deep.el-dialog {
  @include s-dialog;
  .small-thing {
    @include small-thing;
    background: red;
  }
  .dialog-tittle {
    @include dialog-tittle;
    .tittle-word {
      color: red;
    }
  }
  .el-dialog__body {
    text-align: inherit;
    font-size: 35px;
  }
}
}

</style>
