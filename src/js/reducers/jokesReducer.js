export default function reducer(state = {
    jokes:[],
    fetched:false,
    fetching:false,
    error:null,
}, action){
  switch (action.type) {
    case 'FETCH_JOKES_FULFILLED':
      state = {...state, jokes:action.payload.data.value, fetched:true, fetching:false};
      break;
    case 'FETCH_JOKES_REJECTED':
      state = {...state, error:action.payload};
      break;
    default:
    state = {...state};
  }
  return state;
};
