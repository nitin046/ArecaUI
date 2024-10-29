import React from 'react';

export const AppContext = React.createContext<{
  userInfo: any;
  socketData: any;
  sendMsg: any;
  isLoggedIn: boolean;

  setUserInfo: React.Dispatch<React.SetStateAction<any>>;
  setSocketData: React.Dispatch<React.SetStateAction<any>>;
  setsendMsg: React.Dispatch<React.SetStateAction<any>>;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<any>>;
}>({
  userInfo: {},
  socketData: [],
  sendMsg: {},
  isLoggedIn: false,

  setUserInfo: () => {},
  setSocketData: () => {},
  setsendMsg: () => {},
  setIsLoggedIn: () => false,
});
