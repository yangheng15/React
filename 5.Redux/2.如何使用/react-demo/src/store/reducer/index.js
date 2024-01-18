import loginUserReducer from './loginUser';
import usersReducer from './users';
import { combineReducers } from 'redux';

// export default (state = {}, action) => {
//   const newState = {
//     loginUser: loginUserReducer(state.loginUser, action),
//     users: usersReducer(state.users, action),
//   };
//   return newState;
// };


// 还没传到store前，就会自己执行reducer两次
export default combineReducers({
  loginUser: loginUserReducer,
  users: usersReducer,
});
