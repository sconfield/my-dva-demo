const delay = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

function* iAmGenerator() {
  yield 'i am';
  yield ' generator.';
  return 'ending';
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
      let flag = true;

      while(flag) {
        const obj = me.next();
        console.info(obj);
        flag = !obj.done;
      }

      return state;
    }
  },
  effects: {
    *minus(action, { put, call }) {
      yield call(delay, 1000);
      yield put({ type: 'add' })
    }
  },
  subscriptions: {},
};
