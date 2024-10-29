import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import CustomScrollbars from '../../../../util/CustomScrollbars';
import SubMenu from 'antd/es/menu/SubMenu';
import SidebarLogo from './SidebarLogo';
import { decodeToken } from '../../../../common/common';
import { RoleType } from '../../../../routes/Roles';

const SidebarContent = ({ sidebarCollapsed, setSidebarCollapsed }: any) => {
  const [selectedKey, setSelectedKey] = useState('');
  const decodedToken = decodeToken();
  const role = decodedToken ? decodedToken?.roles[0] : '';
  const location = useLocation();

  // Update the selected key based on the current URL path
  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath.startsWith('/users')) {
      setSelectedKey('users');
    } else if (currentPath.startsWith('/vendor/proposal')) {
      setSelectedKey('vendor/proposal');
    } else if (currentPath.startsWith('/bids/myBids')) {
      setSelectedKey('bids/myBids');
    } else if (currentPath.startsWith('/rfp/reports')) {
      setSelectedKey('rfp/reports');
    } else if (currentPath.startsWith('/rfp/createrfp')) {
      setSelectedKey('rfp/createrfp');
    } else if (currentPath.startsWith('/rfp/award')) {
      setSelectedKey('rfp/award');
    } else if (currentPath.startsWith('/rfp/confirmed')) {
      setSelectedKey('rfp/confirmed');
    } else if (currentPath.startsWith('/vendors')) {
      setSelectedKey('vendors');
    } else {
      setSelectedKey('');
    }
  }, [location]);

  return (
    <>
      <SidebarLogo
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />
      <div className="gx-sidebar-content">
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu theme={'dark'} mode="inline" selectedKeys={[selectedKey]}>
            {role == RoleType.IT_ADMIN ? (
              <Menu.Item key="users">
                <Link to="/users">
                  <i className="icon icon-user" />
                  <span>User Management</span>
                </Link>
              </Menu.Item>
            ) : role == RoleType.VENDOR ? (
              <>
                <Menu.Item key="rfp/reports">
                  <Link to="/rfp/reports">
                    <i className="icon icon-default-timeline" />
                    <span>Reports</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="vendor/proposal">
                  <Link to="/vendor/proposal">
                    <i className="icon icon-alert" />
                    <span>Proposals</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="bids/myBids">
                  <Link to="/bids/myBids">
                    <i className="icon icon-auth-screen" />
                    <span>My Bids</span>
                  </Link>
                </Menu.Item>
              </>
            ) : role == RoleType.SOURCING_MANAGER ? (
              <>
                <Menu.Item key="rfp/reports">
                  <Link to="/rfp/reports">
                    <i className="icon icon-default-timeline" />
                    <span>Reports</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="rfp/createrfp">
                  <Link to="/rfp/createrfp/">
                    <i className="icon icon-orders" />
                    <span>Post RFP</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="rfp/award">
                  <Link to="/rfp/award">
                    <i className="icon icon-listing-dbrd" />
                    <span>Decide on Proposals</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="rfp/confirmed">
                  <Link to="/rfp/confirmed">
                    <i className="icon icon-revenue-new" />
                    <span>Confirmed Proposals</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="vendors">
                  <Link to="/vendors">
                    <i className="icon icon-company" />
                    <span>Vendors</span>
                  </Link>
                </Menu.Item>
              </>
            ) : role == RoleType.PROJECT_CHAMPION ||
              role == RoleType.FINANCE_ADMIN ? (
              <>
                <Menu.Item key="rfp/reports">
                  <Link to="/rfp/reports">
                    <i className="icon icon-default-timeline" />
                    <span>Reports</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="rfp/awarded">
                  <Link to="/rfp/confirmed">
                    <i className="icon icon-revenue-new" />
                    <span>Confirmed Proposals</span>
                  </Link>
                </Menu.Item>
              </>
            ) : (
              ''
            )}
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

export default React.memo(SidebarContent);
