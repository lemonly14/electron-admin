import Layout from '@/layout'

const warehouseRouter = {
  path: '/warehouse',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Warehouse',
  meta: {
    title: '入库管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'pureGoldInfomation',
      component: () => import('@/views/warehouse/pureGoldInformation'),
      name: 'PureGold',
      meta: { title: '素金入库管理', noCache: true }
    },
    {
      path: 'inlaidInfomation',
      component: () => import('@/views/warehouse/inlaidInformation'),
      name: 'Inlaid',
      meta: { title: '镶嵌入库管理', noCache: true }
    },
    {
      path: 'jewelryInformation',
      component: () => import('@/views/warehouse/jewelryInformation'),
      name: 'Jewelry',
      meta: { title: '饰品入库管理', noCache: true }
    },
    {
      path: 'totalInformation',
      component: () => import('@/views/warehouse/totalInformation'),
      name: 'totalTreasure',
      meta: { title: '实时库存管理', noCache: true }
    }
  ]
}

export default warehouseRouter
