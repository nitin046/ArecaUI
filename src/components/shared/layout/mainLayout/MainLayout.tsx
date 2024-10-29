import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateWindowWidth } from '../../../../redux/features/layout/layoutSlice';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const { Content, Footer } = Layout;

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(updateWindowWidth(window.innerWidth));
    });
  }, [dispatch]);

  return (
    <Layout className="gx-app-layout">
      <Sidebar />
      <Layout>
        <Content className={`gx-layout-content`}>
          <div
            style={{
              padding: '24px',
            }}
          >
            <Outlet />
          </div>
          <Footer>
            <div
              className="gx-layout-footer-content"
              style={{ fontSize: '12px' }}
            >
              Created by |{'  '}
              <a
                style={{ color: '#298bee' }}
                href="https://www.g7cr.in/"
                target="_blank"
                rel="noreferrer"
              >
                G7CR Technologies Pvt Ltd
              </a>{' '}
              © 2023 All rights reserved
            </div>
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
