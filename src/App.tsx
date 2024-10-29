import { useState } from 'react';
import { AppContext } from './context/AppContext';
import { WebSocketProvider } from './context/WebsocketContext';
import AppRoutes from './routes/AppRoutes';
import Websocket from './ws/Websocket';
function App() {
  const [userInfo, setUserInfo] = useState(null),
    [socketData, setSocketData] = useState(null),
    [sendMsg, setsendMsg] = useState(null),
    [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AppContext.Provider
      value={{
        userInfo,
        setUserInfo,
        socketData,
        setSocketData,
        sendMsg,
        setsendMsg,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      <WebSocketProvider>
        <Websocket>
          <AppRoutes />
        </Websocket>
      </WebSocketProvider>
    </AppContext.Provider>
  );
}

export default App;
