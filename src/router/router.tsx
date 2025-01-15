/*
 * @Author: daisy 2358648339@qq.com
 * @Date: 2025-01-10 21:58:18
 * @LastEditors: luxiaolong
 * @LastEditTime: 2025-01-15 11:49:53
 * @FilePath: \Inspired-Classroom-Rubik-Cube\src\router\router.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Spin } from 'antd'
import { JSX, lazy, Suspense } from 'react'

type Meta = {
  name: string
  title: string
}

interface RoutersProps {
  path: string
  meta?: Meta
  element: JSX.Element
  children?: RoutersProps[]
}

const Home = lazy(() => import('@/pages/home'))
const Register = lazy(() => import('@/pages/register'))
const Edit = lazy(() => import('@/pages/edit'))

const Routes: RoutersProps[] = [
  {
    path: '/',
    meta: {
      name: 'home',
      title: '首页',
    },
    element: (
      <Suspense fallback={<Spin tip="Loading" size="large" />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/register',
    meta: {
      name: 'register',
      title: '注册',
    },
    element: (
      <Suspense fallback={<Spin tip="Loading" size="large" />}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: '/edit',
    meta: {
      name: 'edit',
      title: '教案生成',
    },
    element: (
      <Suspense fallback={<Spin tip="Loading" size="large" />}>
        <Edit />
      </Suspense>
    ),
  },
]

export default Routes
