import { SETLOGINUSER } from '../action/loginUserAction';

const initialState = null;

export default function loginUserReducer(
  state = initialState,
  { type, payload }
) {
  // console.log('loginUserReducer');
  switch (type) {
    case SETLOGINUSER:
      return { ...payload };
    default:
      return state;
  }
}
