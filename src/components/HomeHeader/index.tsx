/*
 * @Author: daisy 2358648339@qq.com
 * @Date: 2025-01-10 12:16:22
 * @LastEditors: daisy 2358648339@qq.com
 * @LastEditTime: 2025-01-11 14:34:50
 * @FilePath: \Inspired-Classroom-Rubik-Cube\src\components\HomeHeader\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './index.css'
import { FlagTwoTone, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown } from 'antd';
import { MenuItem } from './types'
import { Link } from 'react-router-dom';

const HomeHeader = () => {
    const items: MenuItem[] = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="XXXXXXXXXXXXXXXXXXXXXXXX">
                    个人中心
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="XXXXXXXXXXXXXXXXXXXXXX">
                    退出登录
                </a>
            ),
        },
    ]
    return (
        <div className="header">
            <div className="header-logo">
                <FlagTwoTone style={{ fontSize: 35, marginLeft: 30, marginTop: 10 }} />
                <div className="header-logo-text">Inspired Classroom<br />Rubik Cube </div>
            </div>
            <div className="header-nav"></div>
            <div className="header-avatar">
                <Dropdown menu={{ items }}>
                    <Link to={'/register'} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Avatar
                            size="large" icon={<UserOutlined />}
                            style={{ float: "right", marginRight: 30, marginTop: 10 }}
                        />
                    </Link>
                </Dropdown>
            </div>
        </div>
    );
}

export default HomeHeader;
