import React, { useEffect, useState } from 'react';
import {
    HomeOutlined,
    FormOutlined,
    InfoCircleOutlined,
    UserOutlined,
    SunFilled,
    MoonFilled,
    CalendarOutlined,
    // TagOutlined,
    MenuOutlined,
    TableOutlined,
    GlobalOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Affix, Avatar, Dropdown, Flex, Layout, Menu, Switch, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { useTheme } from '@/setting/AntdProvider';
import './index.scss';
const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
import { useDeviceScreen } from '@/utils/hooks/useDivices';
function getItem(label: React.ReactNode, key: string, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
    return {
        key,
        icon,
        children,
        label: key ? <Link to={key}>{label}</Link> : label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Home', 'home', <HomeOutlined />),
    getItem('Today', 'today', <FormOutlined />),
    getItem('Calendar', 'calendar', <CalendarOutlined />),
    getItem('Map', 'map', <GlobalOutlined />),
    // getItem('Tag', 'tag', <TagOutlined />),
    getItem('List', 'list', <TableOutlined />),
    getItem('About', 'about', <InfoCircleOutlined />),
    getItem('User', '', <UserOutlined />, [getItem('Tom', '4'), getItem('Bill', '5'), getItem('Alex', '6')]),
];

const MainLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [selectedKeys, setSelectedKeys] = useState<string[]>(['home']);
    const device = useDeviceScreen();
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const { isDarkMode, toggleTheme } = useTheme();
    useEffect(() => {
        const pathname = window.location.pathname.split('/')[1];
        setSelectedKeys([pathname || 'home']);
    }, []);
    const handleChangeKey = (keys: string[]) => {
        setSelectedKeys(keys);
        window.scrollTo(0, 0);
    };
    return (
        <Layout style={{ minHeight: '100vh', overflow: 'hidden' }}>
            {/* hidden menu on mobile */}
            {device !== 'mobile' && (
                <Affix offsetTop={0}>
                    <Sider width={'15vw'} style={{ height: '100vh' }} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                        <div className="header-logo">{collapsed ? 'TN' : 'TAKE A NOTE'}</div>
                        <Menu theme="dark" onSelect={(selected) => handleChangeKey([selected.key])} selectedKeys={selectedKeys} mode="inline" items={items} />
                    </Sider>
                </Affix>
            )}
            {/* Menu when mobile and not collapsed fixed on top */}
            {device === 'mobile' && !collapsed && (
                <div className="menu-mobile">
                    {/* Menu */}
                    <Menu theme="dark" onSelect={(selected) => handleChangeKey([selected.key])} selectedKeys={selectedKeys} mode="inline" items={items} />
                </div>
            )}
            {/* Layout */}
            <Layout>
                <Affix offsetTop={0}>
                    <Header style={{ padding: '0 16px', background: colorBgContainer }}>
                        <Flex gap={12} justify="flex-end" align="center" style={{ width: '100%', height: '100%' }}>
                            <Switch title={isDarkMode ? 'Dark mode' : 'Light mode'} checked={isDarkMode} onChange={toggleTheme} checkedChildren={<SunFilled />} unCheckedChildren={<MoonFilled />} />
                            {/* Menu on mobile */}
                            {device === 'mobile' && <MenuOutlined onClick={() => setCollapsed(!collapsed)} style={{ fontSize: 24 }} />}

                            <Dropdown menu={{ items: [{ label: 'Đăng xuất', key: 'logout', icon: <LogoutOutlined />, style: { color: 'red' } }], style: { minWidth: 150 } }} trigger={['click']}>
                                <Avatar size={32} style={{ cursor: 'pointer', userSelect: 'none' }}>
                                    AG
                                </Avatar>
                            </Dropdown>
                        </Flex>
                    </Header>
                </Affix>
                <Content style={{ margin: '0 16px' }}>
                    {/* <Breadcrumb items={[{ title: breadcrumbMapping[selectedKeys[0] as keyof typeof breadcrumbMapping] }]} style={{ margin: '16px 0' }}></Breadcrumb> */}
                    <div
                        style={{
                            margin: '32px 0',
                            padding: 24,
                            minHeight: 360,
                            height: 'fit-content',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>CirenSoft ©{new Date().getFullYear()} Created by HaiQuan</Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
