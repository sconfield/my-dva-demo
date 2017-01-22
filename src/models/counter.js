import request from '../utils/request.js';

const delay = timeout => {
  return new Promise(resolve => {
    setTimeout(()=>{

      console.log('wait...i am busy!');

      resolve();
    }, timeout);
  });
};

function* iAmGenerator() {
  yield 'i';
  yield 'am';
  yield 'a';
  yield 'generator';
  return '.';
}

export default {
  namespace: 'counter',
  state: 0,
  reducers: {
    add(state) {
      return state + 1;
    },
    minus(state) {
      return state - 1;
    },
    whatIsTheGenerator(state) {
      console.log('what is the generator?');
      let me = iAmGenerator();
      let flag = false;

      while(!flag) {
        const obj = me.next();
        console.info(obj);
        flag = obj.done;
      }

      return state;
    },
    showUser(state, user) {
      console.log(user);
      return state;
    }
  },
  effects: {
    *add(action, { put, call }) {
      if (typeof action.count === 'number') {
        const { data } = yield call(()=>(request(`http://localhost:8000/api/users/${action.count}`)));
        yield put({ type: 'showUser', ...data });
      }
    },
    *minus(action, { put, call }) {
      yield call(delay, 1000);
      yield put({ type: 'add' })
    }
  },
  subscriptions: {},
};
