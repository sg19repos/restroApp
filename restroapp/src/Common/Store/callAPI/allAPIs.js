// import CommonAPIs from "../../Modules/Common/APIs";
import { checkInternetConnectivity } from "./callAPI";

export const allAPIs = [];

export const FetchingKey = "fetching";
export const DataKey = "data";
export const ErrorKey = "error";
export const ConnectivityKey = "connectivity";
export const APIErrorStoreKey = "error";
export const NotificationStoreKey = "latest-notification-timestamp";

export const initialState = () => {
  let state = {
    [ConnectivityKey]: checkInternetConnectivity(),
    [APIErrorStoreKey]: null,
    [NotificationStoreKey]: -1,
  };
  for (const api of allAPIs) {
    state = {
      ...state,
      [api.storeKey]: {
        [FetchingKey]: false,
        [DataKey]: null,
        [ErrorKey]: null,
      },
    };
  }
  return state;
};
