<!--  -->
<template>
  <div class="merge-dialog">
    <el-dialog :visible.sync="isShow">
      <div class="small-thing" />
      <div class="dialog-tittle">
        <p class="tittle-word">{{ tittleName }}</p>
      </div>
      <div class="form-container">
        <el-form ref="shopForm"
                 :model="shopForm"
                 :rules="rules"
                 label-width="100px">
          <el-form-item label="类别："
                        prop="type">
            <el-select v-model="shopForm.type"
                       placeholder="请选择"
                       disabled>
              <el-option v-for="item in tpyeOptions"
                         :key="item.value"
                         :value="item.value"
                         :label="item.label" />
            </el-select>
          </el-form-item>
          <el-form-item label="店铺名"
                        prop="label">
            <el-input v-model="shopForm.label" />
          </el-form-item>
          <el-form-item label="备注"
                        prop="remarks">
            <el-input v-model="shopForm.remarks" />
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer">
        <el-button @click="close()">取 消</el-button>
        <el-button type="primary"
                   @click="submitForm('shopForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import _ from 'lodash'
export default {
  components: {},
  // import引入的组件需要注入到对象中才能使用
  props: {
    tittleName: {
      type: String,
      default: ''
    },
    editInfo: {
      type: Object,
      default() { }
    }
  },
  data() {
    // 这里存放数据
    return {
      isShow: false,
      shopForm: {
        type: '',
        name: '',
        remarks: ''
      },
      tpyeOptions: [
        {
          value: 1,
          label: '总店'
        },
        {
          value: 2,
          label: '分店'
        }
      ],
      rules: {
        name: [{ required: true, message: '请填写名称', trigger: 'change' }],
        type: [{ required: true, message: '请选择类别', trigger: 'change' }],
        id: [{ required: true, message: '请填写编号', trigger: 'change' }]
      }
    }
  },
  // 监听属性 类似于data概念
  computed: {

  },
  // 监控data中的数据变化
  watch: {
    tittleName: {
      handler(newName, oldName) {
      // 添加时清空信息
        console.log('newName', newName)
      }, deep: true, immediate: true
    },

    editInfo: {
      handler(newInfo, oldInfo) {
        this.shopForm = _.cloneDeep(newInfo)
        console.log('this.shopForm2222', this.shopForm)
      }, deep: true, immediate: true
    },

    isShow(newVal, oldVal) {
      // 添加部门类别+1  表示添加子类
      newVal && this.tittleName.includes('添加') && this.$set(this.shopForm, 'type', this.shopForm.type + 1)
      newVal && this.tittleName.includes('添加') && Object.keys(this.shopForm).forEach(key => { if (key !== 'type') this.shopForm[key] = '' })
      this.$nextTick(() => {
        this.$refs.shopForm.clearValidate()
      })
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

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
    close() {
      this.isShow = false
    },
    clear() {
      this.$emit('on-clear')
    },
    submitForm(formName) {
      this.$refs[formName].validate((vaild) => {
        if (vaild) {
          this.$message({
            showClose: true,
            message: '编辑成功',
            type: 'success',
            duration: 2000
          })
        } else {
          this.$message({
            showClose: true,
            message: '请按格式填写',
            type: 'error',
            duration: 2000
          })
        }
      })
    }
  }
}
</script>
<style lang='scss' scoped>
@import "@/styles/mixin.scss";
.merge-dialog {
  .small-thing {
    @include small-thing;
  }
  .dialog-tittle {
    @include dialog-tittle;
  }
  /deep/.el-dialog__footer {
    display: flex;
    justify-content: center;
  }
  .form-container {
    .el-form {
      width: 90%;
      margin: auto;
      display: flex;
      flex-flow: row wrap;
      .el-form-item {
        width: 50%;
        /deep/.el-form-item__content {
          min-width: 150px;
        }
      }
      .el-select {
        width: -webkit-fill-available;
      }
    }
  }
}
</style>
