import Layout from '@/layout'

const systemRouter = {
  path: '/peopleManager',
  component: Layout,
  redirect: 'noRedirect',
  name: 'People',
  meta: {
    title: '人员管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'clerkManager',
      component: () => import('@/views/peopleManager/clerkManager'),
      name: 'ClerkManager',
      meta: { title: '人员管理', noCache: true }
    }
  ]
}

export default systemRouter
