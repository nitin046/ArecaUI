import { API_ENDPOINTS } from '../shared/api-endpoint.shared';
import API from '../config/axios.config';

export const awardsBidFilter = async (params: any) => {
  try {
    const { data } = await API.post(API_ENDPOINTS.MANAGE_RFQ_NAME, params);
    return data;
  } catch (error: any) {
    return error;
  }
};

export const getVendorNames = async (params: any) => {
  try {
    const { data } = await API.post(
      API_ENDPOINTS.MANAGE_RFP_VENDOR_NAMES,
      params
    );
    return data;
  } catch (error: any) {
    return error;
  }
};

export const getRFPNames = async (params: any) => {
  try {
    const { data } = await API.post(
      API_ENDPOINTS.MANGE_RFP_APPLIED_RFP_NAMES,
      params
    );
    return data;
  } catch (error: any) {
    return error;
  }
};
