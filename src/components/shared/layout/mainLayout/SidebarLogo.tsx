import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const logo = require('../../../../assets/images/logo.png');

const SidebarLogo = ({ sidebarCollapsed, setSidebarCollapsed }: any) => {
  const { width } = useSelector((state: any) => state.WindowWidth);

  return (
    <div className="gx-layout-sider-header">
      <div className="gx-linebar">
        <i
          className={`gx-icon-btn icon icon-${
            !sidebarCollapsed ? 'menu-unfold' : 'menu-fold'
          } gx-text-white`}
          onClick={() => {
            setSidebarCollapsed(!sidebarCollapsed);
          }}
        />
      </div>
      <Link to="/" className="gx-site-logo">
        {width >= 992 ? (
          <img alt="lo" src={logo} />
        ) : (
          <img alt="logo2" src={logo} />
        )}
      </Link>
    </div>
  );
};

export default SidebarLogo;
