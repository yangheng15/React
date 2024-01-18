/**
 * 判断是否是planin object
 * @param obj 参数
 * @returns true或者false
 */
function isPlaninObject(obj: Action) {
  if (typeof obj !== 'object') return false;
  return Object.getPrototypeOf(obj) === Object.prototype;
}

function getRandomString(len: number) {
  return Math.random().toString(36).substring(len).split('').join('.');
}

type Action = { type: any; [k: string]: any };
export function createStore(
  reducer: (state: any, action: Action) => any,
  initValue: any
) {
  let state = initValue;
  let listeners = [];

  const dispatch = (action: Action) => {
    // 判断是否是planin object
    if (!isPlaninObject(action)) {
      throw new Error('action 必须是一个纯对象');
    }
    // Action必须要有type
    if (typeof action.type === 'undefined') {
      throw new Error('action必须要有一个type属性');
    }
    state = reducer(state, action);
  };

  const getState = () => {
    return state;
  };

  const subscribe = (callback) => {
    
  };

  // 创建store时需要调用下reducer初始化指
  dispatch({ type: `@@redux/INIT${getRandomString(7)}` });
  return {
    dispatch,
    getState,
    subscribe,
  };
}
