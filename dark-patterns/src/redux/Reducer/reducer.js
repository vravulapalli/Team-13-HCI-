import * as types from "../Action/actionType";

const initialState = {
  // authActions
  loggedIn: false,
  token: null,
  userId: null,

  userData: {},

  // products
  usersList: [],

  // websites
  websitesList: [],
};

const DataReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        loggedIn: action.payload.token && action.payload.userId,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    case types.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        token: null,
        userId: null,
      };
    case types.USER_DATA:
      return {
        ...state,
        userData: action.payload?.data?.user,
      };
    case types.USERS_LIST:
      return {
        ...state,
        usersList: action.payload,
      };
    case types.WESBITES_LIST:
      return {
        ...state,
        websitesList: action.payload.data,
        websitesList_meta: action.payload.meta,
      };
    default:
      return state;
  }
};
export default DataReducers;
