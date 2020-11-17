<!--  -->
<template>
  <div class="merge-dialog">
    <el-dialog :visible.sync="isShow">
      <div class="small-thing" />
      <div class="dialog-tittle">
        <p class="tittle-word">{{ tittleName }}</p>
      </div>
      <div class="form-container">
        <el-form ref="roleInfoFrom"
                 :model="roleInfoFrom"
                 :rules="rules"
                 label-width="110px">
          <el-form-item label="角色名称："
                        prop="store"
                        placeholder="请选择"> <!--表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的-->
            <el-select v-model="roleInfoFrom.roleName"
                       placeholder="请选择">
              <el-option v-for="item in tpyeOptions"
                         :key="item.value"
                         :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="角色说明："
                        prop="remark">
            <el-input v-model="roleInfoFrom.remark" />
          </el-form-item>
          <el-form-item label="打折权限："
                        prop="discountAuth">
            <el-switch v-model="roleInfoFrom.discountAuth"
                       active-color="#13ce66"
                       inactive-color="#ff4949" />
          </el-form-item>
          <el-form-item label="最低打折："
                        prop="warehouseCharity">
            <el-input v-model="roleInfoFrom.warehouseCharity" />
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer">
        <el-button @click="close()">取 消</el-button>
        <el-button type="primary"
                   @click="submitForm('roleInfoFrom')">确 定</el-button>
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
      roleInfoFrom: {
        store: '',
        warehouseCode: '',
        warehouseName: '',
        warehouseCharity: '',
        remarks: ''
      },
      tpyeOptions: [
        {
          value: '系统管理员'
        },
        {
          value: '店长'
        },
        {
          value: '营业员'
        }
      ],
      rules: {
        /* 供应商名称和编码为必填项，需校验 */
        warehouseCode: [{ required: true, message: '请填写仓库编码', trigger: 'change' }]
      }
    }
  },
  // 监听属性 类似于data概念
  computed: {

  },
  // 监控data中的数据变化
  watch: {
    editInfo: {
      handler(newInfo, oldInfo) {
        this.roleInfoFrom = _.cloneDeep(newInfo)
      }, deep: true, immediate: true
    },
    tittleName(newName, oldName) {
      // 添加时清空信息
      console.log('newName', newName)
    },
    isShow(newVal, oldVal) {
      newVal && this.tittleName === '添加' && Object.keys(this.roleInfoFrom).forEach(key => { this.roleInfoFrom[key] = '' })
      this.$nextTick(() => {
        this.$refs.roleInfoFrom.clearValidate()
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
