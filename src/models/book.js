
export default {
  namespace: 'book',
  state: {
    list: ['说文解字', '从0到1', '重构']
  },
  reducers: {
    getBooks(state) {
      return {...state};
    }
  },
  effects: {},
  subscriptions: {
    setup({ dispatch, history }){
      history.listen((location)=>{
        if (location.pathname === '/book-route') {
          console.log('welcome to book store.');
          dispatch({ type:'getBooks' });
        }
      });
    }
  },
};
