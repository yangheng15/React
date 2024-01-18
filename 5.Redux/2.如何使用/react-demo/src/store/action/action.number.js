import * as ActionType from './action.type.js';

export const getIncrementAction = () => {
  return {
    type: ActionType.INCREMENT
  }
}

export const getDecrementAction = () => {
  return {
    type: ActionType.DECREMENT
  }
}

export const getSetAction = (newVal) => {
  return {
    type: ActionType.SET,
    payload: newVal
  }
}