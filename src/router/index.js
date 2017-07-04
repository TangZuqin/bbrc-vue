import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'
import User from '@/components/User'
import DataPortal from '@/components/DataPortal'
import Biobank from '@/components/Biobank'
import PrivateAccess from '@/components/PrivateAccess'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar
    },
    {
      path: '/user/:id',
      name: 'User',
      component: User
    },
    {
      path: '/dataProtal',
      name: 'DataPortal',
      component: DataPortal
    },
    {
      path: '/biobank',
      name: 'Biobank',
      component: Biobank
    },
    {
      path: '/PrivateAccess',
      name: 'PrivateAccess',
      component: PrivateAccess
    }
  ]
})
