import { actionTypes } from './actions';

const initialState = {
  userData: {
    username: "admin",
    password: "12345"
  },
  loginError: false,
  logged: false,
}

const reducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        logged: true,
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        loginError: true,
      }
    case 'LOGOUT':
      return {
        ...state,
        logged: false,
      }
    default:
      return state;
  }
}

export default reducer;