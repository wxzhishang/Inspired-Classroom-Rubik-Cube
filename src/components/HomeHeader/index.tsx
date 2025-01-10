import './index.css'
import { FlagTwoTone, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown } from 'antd';
import { MenuItem } from './types'

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
                    <Avatar size="large" icon={<UserOutlined />} style={{ float: "right", marginRight: 30, marginTop: 10 }} />
                </Dropdown>
            </div>
        </div>
    );
}

export default HomeHeader;
