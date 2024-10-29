import { Navigate } from 'react-router';
import { decodeToken } from '../common/common';
const PrivateRoute = ({
  children,
  roles,
}: {
  children: JSX.Element;
  roles: any;
}) => {
  const isAuthenticated = sessionStorage.getItem('access_token') ? true : false;
  const decodedToken: any = decodeToken();
  const userRole = decodedToken ? decodedToken.roles[0] : '';
  const userHasRequiredRole = roles.includes(userRole);

  if (!isAuthenticated) {
    return <Navigate to="/Error401"></Navigate>;
  }

  if (isAuthenticated && !userHasRequiredRole) {
    return <Navigate to="/Error403" />;
  }

  return children;
};
export default PrivateRoute;
