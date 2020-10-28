import Layout from '@/layout'

const printRouter = {
    path: '/print',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Print',
    meta: {
        title: 'Print',
        icon: 'chart'
    },
    children: [
        {
            path: 'create',
            component: () => import('@/views/print/create'),
            name: 'PrintCreate',
            meta: { title: 'Print Create', noCache: true }
        },
        {
            path: 'template',
            component: () => import('@/views/print/template'),
            name: 'PrintPemplate',
            meta: { title: 'Print Pemplate', noCache: true }
        }
    ]
}

export default printRouter
