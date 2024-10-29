import { useContext, useEffect } from 'react';
import { decodeToken } from '../common/common';
import { AppContext } from '../context/AppContext';
import { WebSocketContext } from '../context/WebsocketContext';
import { RoleType } from '../routes/Roles';
import { CommonEvents } from './events/common.events';
import { RfpEvents } from './events/rfp.events';
import { NotificationPayload } from './models/notification-payload.model';
import jwtDecode from 'jwt-decode';
import { differenceInSeconds } from 'date-fns';
// const noti= require('../assets/audios/ChatNotification.mp3')
// const sound = require('../assets/audios/ChatNotification.mp3');
const Websocket: any = ({ children }: any) => {
  const { socket } = useContext(WebSocketContext);
  const { setSocketData, sendMsg, setsendMsg, setIsLoggedIn, isLoggedIn } =
    useContext(AppContext);

  // function playAudio() {
  //   const audio = new Audio(sound);
  //   audio.play();
  // }
  // function pauseAudio() {
  //   audio.pause();
  // }

  useEffect(() => {
    if (socket) {
      if (sendMsg?.Content) {
        socket.emit(RfpEvents.NEWBID_MESSAGE, sendMsg);
        setsendMsg(null);
      }
    }
  }, [socket, sendMsg]);

  useEffect(() => {
    if (!socket) {
      console.log('Not connected');

      return; // Skip if socket is null
    }

    socket.on('connect', () => {
      console.log('connected!');
    });

    socket.on('disconnect', (reason: any) => {
      if (reason === 'io server disconnect') {
        socket.connect();
      }
    });
    socket.on('error', (error: any) => {
      console.log(`An error occured while connecting to websocket :: ${error}`);
    });

    const decodedToken: any = decodeToken();
    const userRole = decodedToken ? decodedToken.roles[0] : '';

    if (
      userRole === RoleType.VENDOR ||
      userRole === RoleType.SOURCING_MANAGER
    ) {
      socket.emit(CommonEvents.ON_LOGIN);
    }

    socket.on(RfpEvents.ON_NEWBID_MESSAGE, (data: NotificationPayload) => {
      setSocketData([data]);
      // playAudio();
    });
    // setSocketData([...socketData]);
    return () => {
      if (!socket) {
        return;
      }
      socket.off('connect');
      socket.disconnect();
    };
  }, [socket]);

  return <>{children}</>;
};

export default Websocket;
