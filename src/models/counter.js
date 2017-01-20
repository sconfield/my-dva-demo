const delay = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

export default {
  namespace: 'counter',
  state: { count: 0 },
  reducers: {
    add({ count }) {
      return { count: count + 1 };
    },
    minus({ count }) {
      return { count: count - 1 };
    }
  },
  effects: {
    *add(action, { put, call }) {
      yield call(delay, 3000);
      yield put({ type: 'minus' })
    }
  },
  subscriptions: {},
};
