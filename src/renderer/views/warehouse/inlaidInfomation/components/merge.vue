<!--  -->
<template>
  <div class="inlaid-merge-container">
    <div class="merge-header">
      <span>镶嵌类入库</span>
      <el-button type="primary"
                 class="back-btn"
                 @click="goBack">返回</el-button>
    </div>
    <el-form ref="pureGoldFrom"
             :model="pureGoldFrom"
             :rules="rules">
      <div class="left-container">
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>基础信息</span>
            <el-button style="float: right; padding: 3px 0"
                       type="text">操作按钮</el-button>
          </div>
          <el-form-item label="编码:"
                        prop="id">
            <el-input v-model="pureGoldFrom.id" />
          </el-form-item>
          <el-form-item label="编码:"
                        prop="id">
            <el-input v-model="pureGoldFrom.id" />
          </el-form-item>
          <el-form-item label="编码:"
                        prop="id">
            <el-input v-model="pureGoldFrom.id" />
          </el-form-item>
          <el-form-item label="编码:"
                        prop="id">
            <el-input v-model="pureGoldFrom.id" />
          </el-form-item>
          <el-form-item label="编码:"
                        prop="id">
            <el-input v-model="pureGoldFrom.id" />
          </el-form-item>
          <el-form-item label="编====码:"
                        prop="id">
            <el-input v-model="pureGoldFrom.id" />
          </el-form-item>
          <el-form-item label="编码:"
                        prop="id">
            <el-input v-model="pureGoldFrom.id" />
          </el-form-item>
          <el-form-item label="编码:"
                        prop="id">
            <el-input v-model="pureGoldFrom.id" />
          </el-form-item>
          <el-form-item label="编码:"
                        prop="id">
            <el-input v-model="pureGoldFrom.id" />
          </el-form-item>
          <el-form-item label="编码:"
                        prop="id">
            <el-input v-model="pureGoldFrom.id" />
          </el-form-item>
          <el-form-item label="编码:"
                        prop="id">
            <el-input v-model="pureGoldFrom.id" />
          </el-form-item>
          <el-form-item label="编====码:"
                        prop="id">
            <el-input v-model="pureGoldFrom.id" />
          </el-form-item>
          <el-form-item label="编码:"
                        prop="id">
            <el-input v-model="pureGoldFrom.id" />
          </el-form-item>
          <el-form-item label="编====码:"
                        prop="id">
            <el-input v-model="pureGoldFrom.id" />
          </el-form-item>
        </el-card>
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>金价信息</span>
            <el-button style="float: right; padding: 3px 0"
                       type="text">操作按钮</el-button>
          </div>
          <div class="count-info">
            <el-form-item label="编码:"
                          prop="id">
              <el-input v-model="pureGoldFrom.id" />
            </el-form-item>
            <el-form-item label="编码:"
                          prop="id">
              <el-input v-model="pureGoldFrom.id" />
            </el-form-item>
            <el-form-item label="编码:"
                          prop="id">
              <el-input v-model="pureGoldFrom.id" />
            </el-form-item>
            <el-form-item label="编码:"
                          prop="id">
              <el-input v-model="pureGoldFrom.id" />
            </el-form-item>
            <el-form-item label="编码:"
                          prop="id">
              <el-input v-model="pureGoldFrom.id" />
            </el-form-item>
            <el-form-item label="编====码:"
                          prop="id">
              <el-input v-model="pureGoldFrom.id" />
            </el-form-item>
          </div>
          <div class="label-info">
            <el-form-item label="编码:"
                          prop="id">
              <el-input v-model="pureGoldFrom.id" />
            </el-form-item>
            <el-form-item label="编码:"
                          prop="id">
              <el-input v-model="pureGoldFrom.id" />
            </el-form-item>
            <el-form-item label="编====码:"
                          prop="id">
              <el-input v-model="pureGoldFrom.id" />
            </el-form-item>
          </div>
        </el-card>
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>基础信息</span>
            <el-button style="float: right; padding: 3px 0"
                       type="text">操作按钮</el-button>
          </div>
          <el-form-item label="编码:"
                        prop="id">
            <el-input v-model="pureGoldFrom.id" />
          </el-form-item>
          <el-form-item label="编码:"
                        prop="id">
            <el-input v-model="pureGoldFrom.id" />
          </el-form-item>
          <el-form-item label="编码:"
                        prop="id">
            <el-input v-model="pureGoldFrom.id" />
          </el-form-item>
          <el-form-item label="编码:"
                        prop="id">
            <el-input v-model="pureGoldFrom.id" />
          </el-form-item>
          <el-form-item label="编码:"
                        prop="id">
            <el-input v-model="pureGoldFrom.id" />
          </el-form-item>
          <el-form-item label="编码:"
                        prop="id">
            <el-input v-model="pureGoldFrom.id" />
          </el-form-item>
        </el-card>
      </div>
      <div class="right-container">
        <div class="img-container">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus" />
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%"
                 :src="dialogImageUrl"
                 alt="">
          </el-dialog>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%"
                 :src="dialogImageUrl"
                 alt="">
          </el-dialog>
        </div>
        <div class="footer">
          <el-button @click="submitForm('queryTotal')">确定再添加</el-button>
          <el-button
            type="primary"
            @click="submitForm('queryTotal')"
          >确 定</el-button>
        </div>
      </div>

    </el-form>

  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      pureGoldFrom: {},

      countGather: [
        {
          label: '金总：',
          prop: 'weight',
          placeholder: ''
        },
        {
          label: '工费：',
          prop: 'cost',
          placeholder: ''
        },
        {
          label: '标签工费：',
          prop: 'labelCost',
          placeholder: ''
        },
        {
          label: '单价：',
          prop: 'price',
          placeholder: ''
        },
        {
          label: '销售系数：',
          prop: 'saleFactoc',
          placeholder: ''
        },
        {
          label: '进货数量：',
          prop: 'inCount',
          placeholder: ''
        },
        {
          label: '总成本：',
          prop: 'totalCost',
          placeholder: ''
        }
      ],
      rules: {}
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
    goBack() {
      this.$emit('go-back')
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.merge-header {
  min-height: 50px;
  font-size: 35px;
  color: #0096ff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  .back-btn {
    position: absolute;
    right: 20px;
  }
}
.left-container {
  width: 70%;
  display: inline-block;
  .info-item {
    width: 260px;
    margin: 0 40px;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }

  .box-card {
    width: 100%;
    .count-info{
      width: 66%;
      display: flex;
      flex-flow: wrap;
    }
    .label-info{
      width: 33%;
      display: flex;
      flex-flow: wrap;
    }
  }
}
.right-container{
  width: 30%;
  display: inline-block;
  .img-container{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .footer{
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
}
</style>

<style lang="scss" scoped>
.inlaid-merge-container {
  height: 100%;
  .el-form{
    height: 100%;
    display: flex;
    padding: 30px 50px;
    overflow: auto;
  }
  .el-card{
    margin-bottom: 40px;
  }
  .left-container {
    .el-form-item{
      width: 33%;
      /deep/.el-form-item__label{
        width: 80px;
      }
    }
    /deep/.el-card__body {
      display: flex;
      flex-flow: wrap;
    }
    .el-input {
     width: calc(100% - 80px)
    }
  }
  .count-info{
    .el-form-item{
      width: 50%;
      /deep/.el-form-item__label{
        width: 80px;
      }
    }
  }
  .label-info{
    .el-form-item{
      width: 100%;
      /deep/.el-form-item__label{
        width: 80px;
      }
    }
  }
}
</style>
