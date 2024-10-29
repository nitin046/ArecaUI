import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Socket, io } from 'socket.io-client';
import { environment } from '../environments/environment';
import { AppContext } from './AppContext';
import { decodeToken } from '../common/common';
import { RoleType } from '../routes/Roles';

type WebSocketContextProps = {
  socket: Socket | null;
};

const WebSocketContext = createContext<WebSocketContextProps>({ socket: null });

type WebSocketProviderProps = {
  children: ReactNode;
};

const WebSocketProvider: React.FC<WebSocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const { isLoggedIn } = useContext(AppContext);

  useEffect(() => {
    const jwtToken = sessionStorage.getItem('access_token');
    if (jwtToken) {
      const claims = decodeToken(),
        userRole = claims.roles[0];
      if (
        userRole &&
        (userRole.toUpperCase() === RoleType.VENDOR ||
          userRole.toUpperCase() === RoleType.SOURCING_MANAGER)
      ) {
        const host = environment?.wsHost,
          socket = io(`${host}/rfp`, {
            transports: ['websocket'],
            path: environment?.wsPath,
            autoConnect: true,
            auth: {
              token: `Bearer ${jwtToken}`,
            },
          });

        setSocket(socket);

        return () => {
          socket.close();
        };
      }
    } else {
      setSocket(null);
    }
  }, [isLoggedIn]);

  return (
    <WebSocketContext.Provider value={{ socket }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export { WebSocketContext, WebSocketProvider };
