<!--  -->
<template>
  <div class="pure-gold-merge-container">
    <div class="merge-header">
      <span>素金类入库</span>
      <el-button type="primary"
                 class="back-btn"
                 @click="goBack">返回</el-button>
    </div>
    <el-form ref="pureGoldFrom"
             :model="pureGoldFrom"
             :rules="rules">
      <div class="basic-info">
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
          <el-form-item label="编====码:"
                        prop="id">
            <el-input v-model="pureGoldFrom.id" />
          </el-form-item>
        </el-card>
        <div class="count-info">
          22222
        </div>
        <div class="img-container">
          33333
        </div>
        <div class="footer">
          44444
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
      pureGoldFrom: {},
      basicGather: [
        {
          label: '编码：',
          prop: 'id',
          placeholder: '自动生成'
        },
        {
          label: '单位：',
          prop: 'unit',
          placeholder: ''
        },
        {
          label: '款号：',
          prop: 'styleNum',
          placeholder: ''
        },
        {
          label: '类别：',
          prop: 'style',
          placeholder: ''
        },
        {
          label: '品牌：',
          prop: 'brand',
          placeholder: ''
        },
        {
          label: '圈号：',
          prop: 'size',
          placeholder: ''
        },
        {
          label: '成色：',
          prop: 'fineness',
          placeholder: ''
        },
        {
          label: '手寸：',
          prop: 'handSize',
          placeholder: ''
        }
      ],
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
.basic-info {
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
    width: 70%;
  }
}
</style>

<style lang="scss" scoped>
.pure-gold-merge-container {
  .el-form{
    padding: 30px 50px;
  }
  .el-card{
    margin-bottom: 40px;
  }
  .basic-info {
    .el-form-item{
      width: 30%;
      /deep/.el-form-item__label{
        width: 80px;
      }
    }
    /deep/.el-card__body {
      display: flex;
      flex-flow: wrap;
    }
    .el-input {
      width: auto;
    }
  }
}
</style>
