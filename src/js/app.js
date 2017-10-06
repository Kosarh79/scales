import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import {Provider} from "react-redux";
import store from "./store.js";

const   app = document.getElementById('app');

const p = Provider;
ReactDOM.render(<Provider store = {store}>
  <Layout />
</Provider>, app);

/*const journeyReducer = (state = [], action) => {
  switch (action.type) {
    case 'change_direction':
      state = state.slice(0);
      state.push(action.payload);
      break;
    default:

  }
  return state;
};

const jokefarmReducer = (state = {}, action) =>{
  switch (action.type) {
    case 'FETCH_JOKES_FULFILLED':
      state = {...state, jokes:action.payload};
      break;
    case 'FETCH_JOKES_REJECTED':
      state = {...state, error:action.payload};
      break;
    default:
    state = {...state};
  }
  return state;
};*/

//const reducers = combineReducers({sailer: sailerReducer, journey: journeyReducer, jokes:jokefarmReducer});
// const logger = (store) => (next) => (action) =>{
//   console.log('action fired! see!', action);
//   next(action);
// }


//
// store.subscribe(() => {
//   console.log('State changes', store.getState());
// });

//with promise
// store.dispatch({
//   type:'FETCH_JOKES',
//   payload:axios.get("http://api.icndb.com/jokes/?firstName=Kosar&lastName=H."),
// });
// store.dispatch({type: 'change_name', payload: 'Ali'});




//with thunk
/*store.dispatch((dispatch) => {
  axios.get("http://api.icndb.com/jokes/?firstName=Kosar&lastName=H.")
  .then((res) =>{
    dispatch({type:'joke_received', payload:res.data});
  });
  dispatch({type: 'change_name', payload: 'Ali'})
  dispatch({type: 'change_name', payload: 'Ali_K'})
  dispatch({type: 'change_planet', payload: 'Earth'})
  dispatch({type: 'change_direction', payload: 'Mars to Vega'})
  dispatch({type: 'change_direction', payload: 'Back Home'})
});*/
