import { message } from 'antd';
import jwtDecode from 'jwt-decode';

export const filterOption = (input: string, option: any) => {
  return option?.label?.toLowerCase().indexOf(input?.toLowerCase()) >= 0;
};

// For Success Alert
export const showSuccessMessage = (content_msge: string) => {
  const Successmsge = message.success(`${content_msge}`);
  return Successmsge;
};

// For Error Alert
export const showErrorMessage = (content_msge: string) => {
  const errorMsge = message.error(`${content_msge}`);
  return errorMsge;
};

// For Warning Alert
export const showWarningMessage = (content_msge: string) => {
  const Warningmsge = message.warning(`${content_msge}`);
  return Warningmsge;
};

export const decodeToken: any = () => {
  return sessionStorage.getItem('access_token')
    ? jwtDecode(sessionStorage.getItem('access_token')!)
    : '';
};

// For Bytes to MegaBytes
export const bytesToMegabytes = (bytes: number): number => {
  const megabytes = Math.ceil(bytes / 1024 / 1024);
  return megabytes;
};
