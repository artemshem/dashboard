import store from './store';

export const actionTypes = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGOUT: "LOGOUT",
}

export const autologin = () => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: null,
  }
}

export const login = (username, password) => {
  const { userData } = store.getState();
  if (userData.username === username && userData.password === password) {
    if(typeof window !== 'undefined') {
      const myStorage = window.localStorage;
      myStorage.setItem('logged', true);
    }
    return {
      type: actionTypes.LOGIN_SUCCESS,
      payload: null,
    }
  } else return {
    type: actionTypes.LOGIN_FAILURE,
    payload: null,
  }
}

export const logout = () => {
  if(typeof window !== 'undefined') {
    const myStorage = window.localStorage;
    myStorage.setItem('logged', false);
  }
  return {
    type: actionTypes.LOGOUT,
    payload: null,
  }
}