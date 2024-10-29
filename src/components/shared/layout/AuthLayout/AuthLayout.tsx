import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { updateWindowWidth } from '../../../../redux/features/layout/layoutSlice';
import { Outlet } from 'react-router-dom';
const { Content, Footer } = Layout;

const AuthLayout = () => {
    return (
        <Layout className="gx-app-layout">
            <Layout>
                <Content className={`gx-layout-content`} style={{ margin: '0,20px' }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout >
    );
};
export default AuthLayout;
