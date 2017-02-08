import * as userService from '../services/userService.js';

export default {
  namespace: 'book',
  state: {
    list: []
  },
  reducers: {
    getBooks(state) {
      return {...state};
    },
    showBooks(state, action) {
      return {
        ...state,
        list: action.books
      };
    }
  },
  effects: {
    *getBooks(action, {call, put}) {
      const url = `http://localhost:8000/api/users`;
      const { data } = yield call(()=>(userService.query(url)));
      yield put({ type: 'showBooks', books: data});
    }
  },
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
