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
      component: () => import('@/views/warehouse/pureGoldInfomation'),
      name: 'PureGold',
      meta: { title: '素金入库管理', noCache: true }
    }
    // ,
    // {
    //     path: 'template',
    //     component: () => import('@/views/Warehouse/template'),
    //     name: 'PrintPemplate',
    //     meta: { title: 'Print Pemplate', noCache: true }
    // }
  ]
}

export default warehouseRouter
