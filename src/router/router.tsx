/*
 * @Author: daisy 2358648339@qq.com
 * @Date: 2025-01-10 21:58:18
 * @LastEditors: daisy 2358648339@qq.com
 * @LastEditTime: 2025-01-11 21:36:15
 * @FilePath: \Inspired-Classroom-Rubik-Cube\src\router\router.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { JSX, lazy, Suspense } from "react";
import { Spin } from "antd";

type Meta = {
    name: string,
    title: string
}

interface RoutersProps {
    path: string,
    meta?: Meta,
    element: JSX.Element,
    children?: RoutersProps[]
}

const Home = lazy(() => import('../pages/home'));
const Register = lazy(() => import('../pages/register'));

const Routes: RoutersProps[] = [
    {
        path: '/',
        meta: {
            name: 'home',
            title: '首页'
        },
        element: <Suspense fallback={<Spin tip="Loading" size="large" />}>
            <Home />
        </Suspense>
    },
    {
        path: '/register',
        meta: {
            name: 'register',
            title: '注册'
        },
        element: <Suspense fallback={<Spin tip="Loading" size="large" />}>
            <Register />
        </Suspense>
    }
]

export default Routes;