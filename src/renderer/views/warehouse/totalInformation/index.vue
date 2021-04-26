<!--  -->
<template>
  <div id="total-information"
       class="total-information">
    <div class="param-container">
      <el-card id="param-card"
               class="param-card">
        <el-form ref="paramInfo"
                 :model="paramInfo"
                 :rules="rules">
          <el-form-item v-for="item in paramGather"
                        :key="item.prop"
                        :label="item.label"
                        class="param-info">
            <el-select v-if="item.type === 'select'"
                       v-model="paramInfo[item.prop]"
                       filterable
                       :placeholder="item.placeholder">
              <el-option v-for="option in optionsMap[item.options]"
                         :key="option.value"
                         :label="option.label"
                         :value="option.value" />
            </el-select>
            <el-input v-if="item.type === 'input'"
                      v-model="paramInfo[item.prop]"
                      :placeholder="item.placeholder" />
          </el-form-item>
        </el-form>
        <div class="handle-container">
          <el-button icon="el-icon-search"
                     type="primary">查询</el-button>
          <el-radio-group v-model="showtype"
                          @change="changeType">
            <el-radio-button label="明细" />
            <el-radio-button label="汇总" />
            <el-radio-button label="图片" />
          </el-radio-group>
        </div>
      </el-card>
      <!-- <transition name="fade"
                  mode="in-out"> -->
      <DetailsTable v-show="isDetails"
                    :details-data="detailsData" />
      <!-- </transition> -->
      <!-- <transition name="fade"
                  mode="in-out"> -->
      <SummaryTable v-show="isSummary"
                    :summary-data="summaryData" />
      <!-- </transition> -->
      <div class="image-container">
        <ImageCard v-for="item in detailsData"
                   v-show="isImage"
                   :key="item.id"
                   :image-data="item" />
      </div>

    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { paramGather, styles } from '../data'
import DetailsTable from './components/detailsTable'
import SummaryTable from './components/summaryTable'
import ImageCard from './components/imageCard'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {
    DetailsTable,
    SummaryTable,
    ImageCard
  },
  data() {
    // 这里存放数据
    return {
      paramGather: [],
      paramCardHeight: '',
      paramInfo: {},
      optionsMap: {},
      rules: {},
      showtype: '明细',
      isDetails: true,
      isSummary: false,
      isImage: false,
      detailsData: [{
        id: '12987122',
        product: '千足金戒指',
        pieceWeight: '11.27',
        inCount: '1',
        labelPrice: '1120',
        cost: '800',
        img: 'https://img165.imagetwist.com/i/38642/tws61sxv5cjj.jpg/_________.jpg',
        brand: '周大福',
        style: '黄金',
        fashion: '戒指',
        fineness: 'AU995',
        unit: 'g',
        styleNum: '111111',
        size: '17',
        certificateNumber: '123123123',
        color: '金色',
        shop: '鑫鑫店铺',
        store: '莆田仓',
        place: '莆田',
        supplier: '大华供应商',
        datePicker: '2020-11-25',
        remark: '周大福千足金戒指'
      }, {
        id: '12987127',
        product: '千足金戒指',
        weight: '11.25',
        pieceWeight: '11.25',
        inCount: '1',
        labelPrice: '1120',
        cost: '800',
        img: 'https://img165.imagetwist.com/i/38642/tws61sxv5cjj.jpg/_________.jpg',
        brand: '周大福',
        style: '黄金',
        fashion: '戒指',
        fineness: 'AU995',
        unit: 'g',
        styleNum: '111111',
        size: '17',
        certificateNumber: '123123123',
        color: '金色',
        shop: '鑫鑫店铺',
        store: '莆田仓',
        place: '莆田',
        supplier: '大华供应商',
        datePicker: '2020-11-25',
        remark: '周大福千足金戒指'
      }, {
        id: '12987152',
        product: '千足金戒指',
        weight: '11.25',
        pieceWeight: '11.25',
        inCount: '1',
        labelPrice: '1120',
        cost: '800',
        img: 'https://img165.imagetwist.com/i/38642/tws61sxv5cjj.jpg/_________.jpg',
        brand: '周大福',
        style: '黄金',
        fashion: '戒指',
        fineness: 'AU995',
        unit: 'g',
        styleNum: '111111',
        size: '17',
        certificateNumber: '123123123',
        color: '金色',
        shop: '鑫鑫店铺',
        store: '莆田仓',
        place: '莆田',
        supplier: '大华供应商',
        datePicker: '2020-11-25',
        remark: '周大福千足金戒指'
      }, {
        id: '12957122',
        product: '千足金戒指',
        weight: '11.25',
        pieceWeight: '11.25',
        inCount: '1',
        labelPrice: '1120',
        cost: '800',
        img: 'https://img165.imagetwist.com/i/38642/tws61sxv5cjj.jpg/_________.jpg',
        brand: '周大福',
        style: '黄金',
        fashion: '戒指',
        fineness: 'AU995',
        unit: 'g',
        styleNum: '111111',
        size: '17',
        certificateNumber: '123123123',
        color: '金色',
        shop: '鑫鑫店铺',
        store: '莆田仓',
        place: '莆田',
        supplier: '大华供应商',
        datePicker: '2020-11-25',
        remark: '周大福千足金戒指'
      }, {
        id: '17957122',
        product: '千足金戒指',
        weight: '11.25',
        pieceWeight: '11.25',
        inCount: '1',
        labelPrice: '1120',
        cost: '800',
        img: 'https://img165.imagetwist.com/i/38642/tws61sxv5cjj.jpg/_________.jpg',
        brand: '周大福',
        style: '黄金',
        fashion: '戒指',
        fineness: 'AU995',
        unit: 'g',
        styleNum: '111111',
        size: '17',
        certificateNumber: '123123123',
        color: '金色',
        shop: '鑫鑫店铺',
        store: '莆田仓',
        place: '莆田',
        supplier: '大华供应商',
        datePicker: '2020-11-25',
        remark: '周大福千足金戒指'
      },
      {
        id: '12007122',
        product: '千足金戒指',
        weight: '11.25',
        pieceWeight: '11.25',
        inCount: '1',
        labelPrice: '1120',
        cost: '800',
        img: 'https://img165.imagetwist.com/i/38642/tws61sxv5cjj.jpg/_________.jpg',
        brand: '周大福',
        style: '黄金',
        fashion: '戒指',
        fineness: 'AU995',
        unit: 'g',
        styleNum: '111111',
        size: '17',
        certificateNumber: '123123123',
        color: '金色',
        shop: '鑫鑫店铺',
        store: '莆田仓',
        place: '莆田',
        supplier: '大华供应商',
        datePicker: '2020-11-25',
        remark: '周大福千足金戒指'
      },
      {
        id: '12007662',
        product: '千足金戒指',
        weight: '11.25',
        pieceWeight: '11.25',
        inCount: '1',
        labelPrice: '1120',
        cost: '800',
        img: 'https://img165.imagetwist.com/i/38642/tws61sxv5cjj.jpg/_________.jpg',
        brand: '周大福',
        style: '黄金',
        fashion: '戒指',
        fineness: 'AU995',
        unit: 'g',
        styleNum: '111111',
        size: '17',
        certificateNumber: '123123123',
        color: '金色',
        shop: '鑫鑫店铺',
        store: '莆田仓',
        place: '莆田',
        supplier: '大华供应商',
        datePicker: '2020-11-25',
        remark: '周大福千足金戒指'
      }],
      summaryData: [
        {
          type: '吊坠',
          totalNum: '12',
          totalGoldWeight: '56.23',
          totalPieceWeight: '57.12',
          totalLabelCount: '46215',
          totalCostCount: '18442'
        },
        {
          type: '耳环',
          totalNum: '31',
          totalGoldWeight: '46.23',
          totalPieceWeight: '67.12',
          totalLabelCount: '46215',
          totalCostCount: '18442'
        },
        {
          type: '戒指',
          totalNum: '68',
          totalGoldWeight: '116.23',
          totalPieceWeight: '116.23',
          totalLabelCount: '111567',
          totalCostCount: '78442'
        },
        {
          type: '手链',
          totalNum: '15',
          totalGoldWeight: '96.23',
          totalPieceWeight: '97.12',
          totalLabelCount: '46215',
          totalCostCount: '18442'
        },
        {
          type: '项链',
          totalNum: '72',
          totalGoldWeight: '356.23',
          totalPieceWeight: '357.12',
          totalLabelCount: '146215',
          totalCostCount: '118442'
        }
      ]
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
    this.paramGather = paramGather
    this.optionsMap['shops'] = styles
    this.optionsMap['stores'] = styles
    this.optionsMap['styles'] = styles
    this.optionsMap['fashions'] = styles
    this.optionsMap['inTypes'] = styles
    this.optionsMap['finenesses'] = styles
    this.optionsMap['stones'] = styles
    this.setCardHeight()
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
    setCardHeight() {
      const paramCardHeight = document.getElementById('param-card').offsetHeight
      const detailsCard = document.getElementById('details-card')
      const summaryCard = document.getElementById('summary-card')
      const delHeight = paramCardHeight + 30 + 35
      detailsCard.style.height = `calc(100% - ${delHeight}px)`
      summaryCard.style.height = `calc(100% - ${delHeight}px)`
    },
    changeType(val) {
      console.log('val', val)
      val === '明细' && this.getDetails()
      val === '汇总' && this.getSummary()
      val === '图片' && this.getImage()
    },
    getDetails() {
      this.isDetails = true
      this.isSummary = false
      this.isImage = false
    },
    getSummary() {
      this.isSummary = true
      this.isDetails = false
      this.isImage = false
    },
    getImage() {
      this.isImage = true
      this.isSummary = false
      this.isDetails = false
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

.total-information {
  padding: 30px 0;
  .param-container {
    width: 95%;
    height: 100%;
    margin: auto;
    .param-card {
      width: 100%;
      .param-info {
        width: 25%;
        display: inline-block;
        padding: 0 20px 0px 0;
        /* width: calc(100% - 70px); */
        min-width: 180px;
        /* max-width: 250px; */
      }
      .handle-container {
        width: 20%;
      }
    }
    .summary-card,
    .details-card {
      width: 100%;
      /* height: ; */
      margin-top: 35px;
      .demo-table-expand {
        display: flex;
        flex-flow: wrap;
      }
    }
  }
  .image-container{
    width: 100%;
    padding: 30px 0;
    display: flex;
    flex-flow: wrap;
    justify-content: flex-start;
  }
}
</style>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.total-information {
  height: 100%;
  .param-container {
    .param-card {
      ::v-deep.el-card__body {
        display: flex;
        flex-flow: wrap;
        justify-content: flex-start;
        .el-form {
          width: 80%;
        }
        ::v-deep.el-form-item__label {
          width: 70px;
        }
        .param-info {
          .el-select,
          .el-input {
            width: calc(100% - 70px);
          }
          .el-select {
            ::v-deep.el-input {
              width: 100%;
            }
          }
        }
      }
    }
    .summary-card,
    .details-card {
      ::v-deep.el-card__body {
        height: 100%;
        position: relative;
        .el-table {
          height: calc(100% - 40px);
          ::v-deep.el-table__body-wrapper {
            height: calc(100% - 44px);
            overflow-y: auto;
            overflow-x: hidden;
          }
        }
        .el-pagination{
          display: flex;
          justify-content: flex-end;
          padding-top: 16px;
        }
        .demo-table-expand {
        ::v-deep.el-form-item {
          min-width: 300px;
        }
      }
      }

    }
    .el-radio-group {
      width: -webkit-fill-available;
      margin-top: 20px;
    }
  }
}
</style>
