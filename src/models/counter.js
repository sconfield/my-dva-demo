import * as userService from '../services/userService.js';
import key from 'keymaster';

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

let THING = true;
function promiseThing(resolve, reject) {
  console.log('to do promise thing.');

  if(THING) {
    resolve('success');
  } else {
    reject('fail');
  }

  THING = !THING;
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
    whatIsThePromise(state) {
      console.log('what is the promise?');

      const promise = new Promise(promiseThing);

      promise.then(msg=>{
        console.log('just', msg, 'resolve-->then');
      }).catch(msg=>{
        console.log('error:', msg, 'reject-->catch');
      });

      return state
    },
    showUser(state, user) {
      console.log(user);
      return state;
    }
  },
  effects: {
    *add(action, { put, call }) {
      if (typeof action.count === 'number') {
        const url = `http://localhost:8000/api/users/${action.count}`;
        const { data } = yield call(()=>(userService.query(url)));
        yield put({ type: 'showUser', ...data });
      }
    },
    *minus(action, { put, call }) {
      yield call(delay, 1000);
      yield put({ type: 'add' })
    }
  },
  // TODO: how to get the state?
  subscriptions: {
    keyboardWatcher({ dispatch }) {
      key('up', () => { dispatch({ type:'add', count: 6 }) });
      key('down', () => { dispatch({ type:'minus' }) });
    }
  }
};
