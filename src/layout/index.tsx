import React, { useEffect, useState } from 'react';
import { HomeOutlined, FormOutlined, InfoCircleOutlined, UserOutlined, SunFilled, MoonFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Affix, Breadcrumb, Layout, Menu, Switch, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { useTheme } from '@/setting/AntdProvider';

const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

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
    getItem('Form', 'form', <FormOutlined />),
    getItem('Chart', 'chart', <FormOutlined />),
    getItem('Map', 'map', <FormOutlined />),
    getItem('About', 'about', <InfoCircleOutlined />),
    getItem('User', '', <UserOutlined />, [getItem('Tom', '4'), getItem('Bill', '5'), getItem('Alex', '6')]),
];

const MainLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [selectedKeys, setSelectedKeys] = useState<string[]>(['home']);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const { isDarkMode, toggleTheme } = useTheme();
    useEffect(() => {
        const pathname = window.location.pathname.split('/')[1];
        setSelectedKeys([pathname]);
    }, []);
    const handleChangeKey = (keys: string[]) => {
        setSelectedKeys(keys);
        window.scrollTo(0, 0);
    };
    return (
        <Layout style={{ minHeight: '100vh', overflow: 'hidden' }}>
            <Affix offsetTop={0}>
                <Sider width={'15vw'} style={{ height: '100vh' }} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div style={{ height: '32px', margin: '16px', background: 'rgba(255, 255, 255, .2)', borderRadius: '6px' }}></div>
                    <Menu theme="dark" onSelect={(selected) => handleChangeKey([selected.key])} selectedKeys={selectedKeys} mode="inline" items={items} />
                </Sider>
            </Affix>
            <Layout>
                <Affix offsetTop={0}>
                    <Header style={{ padding: '0 16px', background: colorBgContainer, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Switch checked={isDarkMode} onChange={toggleTheme} checkedChildren={<SunFilled />} unCheckedChildren={<MoonFilled />} />
                    </Header>
                </Affix>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb items={[{ title: 'User' }, { title: 'Bill' }]} style={{ margin: '16px 0' }}></Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
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
