import * as types from "./actionType";
import axios from "axios";
import GLOBAL_CONSTANTS from "../../GlobalConstants";
import { toast } from "react-toastify";

export const Login_API = (data, callback = () => {}) => {
  return function () {
    var headers = {
      "Content-type": "application/json",
    };
    axios
      .post(`${GLOBAL_CONSTANTS.backend_host}/auth/login`, JSON.stringify(data), {
        headers,
      })
      .then((resp) => {
        if (resp?.data?.meta?.success) {
          toast.success(resp?.data?.meta?.message);
          callback(resp?.data);
        } else {
          toast.error(resp?.data?.meta?.message);
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.meta?.message);
      });
  };
};

export const Register_API = (data, callback = () => {}) => {
  return function () {
    var headers = {
      "Content-type": "application/json",
    };
    axios
      .post(`${GLOBAL_CONSTANTS.backend_host}/auth/register`, JSON.stringify(data), {
        headers,
      })
      .then((resp) => {
        if (resp?.data?.meta?.success) {
          toast.success(resp?.data?.meta?.message);
          callback(resp?.data);
        } else {
          toast.error(resp?.data?.meta?.message);
        }
      })
      .catch((error) => {
        callback(error?.response?.data);
      });
  };
};

const storeUserData = (data) => ({
  type: types.USER_DATA,
  payload: data,
});

export const loadUserData = (callback = () => {}) => {
  return function (dispatch) {
    var headers = {
      "Content-type": "application/json",
      Authorization: GLOBAL_CONSTANTS?.token,
    };
    axios
      .get(`${GLOBAL_CONSTANTS.backend_host}/auth/me`, {
        headers,
      })
      .then((resp) => {
        callback(resp?.data);
        dispatch(storeUserData(resp?.data));
      })
      .catch((error) => {
        callback(error?.response?.data);
      });
  };
};


// websites ---------------------------------------------------------
export const loadURLDetails = (data, callback = () => {}) => {
  return function () {
    var headers = {
      "Content-type": "application/json",
      Authorization: GLOBAL_CONSTANTS?.token,
    };
    axios
      .post(`${GLOBAL_CONSTANTS.backend_host}/site/website-info`, JSON.stringify(data), {
        headers,
      })
      .then((resp) => {
        if (resp?.data?.meta?.success) {
          toast.success(resp?.data?.meta?.message);
          callback(resp?.data);
        } else {
          toast.error(resp?.data?.meta?.message);
        }
      })
      .catch((error) => {
        callback(error?.response?.data);
      });
  };
};

export const AddWebsite = (data, callback = () => {}) => {
  return function (dispatch) {
    var headers = {
      "Content-type": "application/json",
      Authorization: GLOBAL_CONSTANTS?.token,
    };
    axios
      .post(`${GLOBAL_CONSTANTS.backend_host}/site/create`, JSON.stringify(data), {
        headers,
      })
      .then((resp) => {
        if (resp?.data?.meta?.success) {
          toast.success(resp?.data?.meta?.message);
          callback(resp?.data);
          dispatch(loadWebsites());
        } else {
          toast.error(resp?.data?.meta?.message);
        }
      })
      .catch((error) => {
        callback(error?.response?.data);
      });
  };
};

export const removeWebsite = (id, callback = () => {}) => {
  return async function (dispatch) {
    var headers = {
      "Content-type": "application/json",
      Authorization: GLOBAL_CONSTANTS?.token,
    };

    try {
      const resp = await axios.delete(`${GLOBAL_CONSTANTS.backend_host}/site/delete/${id}`, {headers})
      
      if (resp?.data?.meta?.success) {
        toast.success(resp?.data?.meta?.message);
        callback(resp?.data);
        dispatch(loadWebsites());
      } else {
        toast.error(resp?.data?.meta?.message);
      }
      
    } catch (error) {
      callback(error?.response?.data);
    }
  };
};

const storeWebsitesData = (data) => ({
  type: types.WESBITES_LIST,
  payload: data,
});

export const loadWebsites = (params, callback = () => {}) => {
  return function (dispatch) {
    var headers = {
      "Content-type": "application/json",
      Authorization: GLOBAL_CONSTANTS?.token,
    };
    axios
      .get(`${GLOBAL_CONSTANTS.backend_host}/site/list`, {
        headers, params
      })
      .then((resp) => {
        callback(resp?.data);
        dispatch(storeWebsitesData(resp?.data));
      })
      .catch((error) => {
        callback(error?.response?.data);
      });
  };
};

// ?get-----------------------------------------------------------
const getusersListData = (data) => ({
  type: types.USERS_LIST,
  payload: data,
});

export const loadusersListData = (callback = () => {}) => {
  return function (dispatch) {
    axios
      .get(`${GLOBAL_CONSTANTS.backend_host}api/v1/users/list`)
      .then((resp) => {
        callback(resp.data);
        dispatch(getusersListData(resp.data));
      })
      .catch((error) => console.log(error));
  };
};
