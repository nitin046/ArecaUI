import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer, Layout } from 'antd';

import { toggleCollapsedSideNav } from '../../../../redux/features/layout/layoutSlice';
import SidebarContent from './SidebarContent';

const { Sider } = Layout;

const Sidebar = () => {
  let [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const { navCollapsed } = useSelector((state: any) => state.CollapsedSidebar);
  const { width } = useSelector((state: any) => state.WindowWidth);
  const dispatch = useDispatch();

  const onToggleCollapsedNav = () => {
    dispatch(toggleCollapsedSideNav(!navCollapsed));
  };

  let drawerStyle = '';

  if (width < 992) {
    drawerStyle = 'gx-collapsed-sidebar';
  }

  return (
    <Sider
      className={`gx-app-sidebar ${drawerStyle} gx-layout-sider-dark`}
      trigger={null}
      collapsed={width < 992 ? false : sidebarCollapsed}
      theme={'dark'}
      collapsible
    >
      {width < 992 ? (
        <Drawer
          className={`gx-drawer-sidebar${drawerStyle} gx-drawer-sidebar-dark`}
          placement="left"
          closable={false}
          onClose={onToggleCollapsedNav}
          open={navCollapsed}
        >
          <SidebarContent
            sidebarCollapsed={sidebarCollapsed}
            setSidebarCollapsed={setSidebarCollapsed}
          />
        </Drawer>
      ) : (
        <SidebarContent
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
        />
      )}
    </Sider>
  );
};
export default Sidebar;
