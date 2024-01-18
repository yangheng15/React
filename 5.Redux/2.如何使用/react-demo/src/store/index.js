import { bindActionCreators } from 'redux';
import { createStore } from '../redux/createStore';
import reducer from './reducer/index.js';
import * as userAction from './action/userAction.js';
import * as loginUserAction from './action/loginUserAction';
import { v4 as uuidv4 } from 'uuid';
// import * as ActionType from './action/action.type.js';
// import * as ActionCreator from './action/action.number.js';

// function reducer(state = 10, action) {
//   if (action.type === ActionType.INCREMENT) {
//     return state + 1;
//   } else if (action.type === ActionType.DECREMENT) {
//     return state - 1;
//   } else if (action.type === ActionType.SET) {
//     return action.payload;
//   } else {
//     return state;
//   }
// }

const store = createStore(reducer);
// console.log(store.getState(), 'store.getState()');
// store.dispatch(ActionCreator.getSetAction(100));

// const boundActions = bindActionCreators(ActionCreator, store.dispatch);
// boundActions.getSetAction(100);

// store.dispatch(
//   createAddUserAction({
//     id: uuidv4(),
//     name: '用户3',
//     age: 12,
//   })
// );

const boundActions = bindActionCreators({...userAction, ...loginUserAction}, store.dispatch);
boundActions.createAddUserAction({
  id: uuidv4(),
  name: '用户3',
  age: 12,
});
console.log(store.getState(), 'store.getState()');

// boundActions.setLoginUser({
//   id: uuidv4(),
//   name: '用户3',
//   age: 12,
// })

// console.log(store.getState(), 'store.getState()');
